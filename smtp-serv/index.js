import express from "express";
import cron from "node-cron";
import { Polybase } from "@polybase/client";
import fetch from "node-fetch";
import * as dotenv from "dotenv";
dotenv.config();
import formData from "form-data";
import Mailgun from "mailgun.js";
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY || "key-yourkeyhere",
});

const namespace = process.env.NAMESPACE;
const mailgunDomain = process.env.MAILGUN_DOMAIN;
const coreApiKey = process.env.CORE_API_KEY;
const apiUrl = "https://api.core.ac.uk/v3/search/journals";

const frequency = {
  Daily: "*/3 * * * * *",
  // "0 0 * * *",
  Weekly: "0 0 * * 0",
  Monthly: "0 0 1 * *",
  "Monday | Wednesday | Friday": "*/3 * * * * *",
  // "0 0 * * 1,3,5",
  Weekends: "0 0 * * 6,0",
};

const polyDB = new Polybase({
  defaultNamespace: namespace,
});

const app = express();
const PORT = process.env.PORT || 3001;

const collection = polyDB.collection("UserSBT");

//Fetching data according to each users' interest
const fetchApiData = async (interest) => {
  let reports = [];
  const parsedUrl = apiUrl + `/?q=${interest}`;
  const data = await fetch(parsedUrl, {
    headers: {
      Authorization: `Bearer ${coreApiKey}`,
      ContentType: "application/json",
    },
  });

  const rawData = (await data.json()).results;

  rawData.map((e) => {
    const parsedData = {
      title: e.title,
      publisher: e.publisher,
      topics: e.subjects.slice(0, 2),
      language: e.language,
      url: e.identifiers.filter((e) => e.includes("url"))[0],
    };
    reports.push(parsedData);
  });

  return reports;
};

// Processing user for mailing
const processUser = async (user) => {
  const reports = await fetchApiData(user.interests[0]);

  if (reports[0]) {
    const html = `
    <div style = {{
    backgroundColor: #D8DEE9,
    color: "black"
    }}>
      <span>
        <strong>Hello ${user.name},</strong>
        <br/>
        &nbsp;Are you passionate about staying up to date with the latest advancements 
          and breakthroughs in your field of research? Look no further! We are 
          thrilled to introduce <strong>"Research Insights"</strong> your go-to source for regular 
          research paper recommendations handpicked by our expert team.
          <br/>
          <br/>
          <div >
            	<h4>
                  <center>${reports[0].title}</center>
            </h2>
            
            	<a href = "${reports[0].url.substring(4)}" target = "_">
                  <center>
            <button>
                  Check it out
            </button>
            </center>
            </a><span>${reports[0].publisher}</span>
          </div>
      </span>
    </div>
  `;

    mg.messages
      .create(mailgunDomain, {
        from: "trimailtris@gmail.com",
        to: [user.email],
        subject:
          "Introducing Research Insights - Your Regular Research Paper Recommendations",
        text: "Your Weekly Research Paper recommendations - from TriMail",
        html: html,
      })
      .then((e) => {
        console.log(e);
      });
  }
};

//Fetching all users' data
const fetchUsers = async () => {
  try {
    let users = [];
    const data = await collection.get();
    data.data.map((e) => {
      if (e.data.txnHash !== "" || undefined) {
        users.push(e.data);
      }
    });
    return users;
  } catch (err) {
    console.log("Error fetching user ", err);
  }
};

fetchUsers().then((users) => {
  users.forEach((user) => {
    cron.schedule(frequency[user.frequency], () => {
      processUser(user);
    });
  });
});

app.listen(PORT, () => {
  console.log("Listening to port, ", PORT);
});
