const express = require("express");
const nodemailer = require("nodemailer");
const cron = require("node-cron");
const sgMail = require("@sendgrid/mail");
const { Polybase } = require("@polybase/client");
require("dotenv").config();

const namespace = process.env.NAMESPACE;
const pass = process.env.SENDGRID_KEY;
sgMail.setApiKey(pass);

const frequency = {
  Daily: "0 0 * * *",
  Weekly: "0 0 * * 0",
  Monthly: "0 0 1 * *",
  "Monday | Wednesday | Friday": "*/30 * * * * *",
  // "0 0 * * 1,3,5",
  Weekends: "0 0 * * 6,0",
};

const polyDB = new Polybase({
  defaultNamespace: namespace,
});

const app = express();
const PORT = 3001 || process.env.PORT;

const transporter = nodemailer.createTransport({
  service: "SendGrid",
  auth: {
    user: "apikey",
    pass: pass,
  },
  from: "trimailtris@gmail.com",
});
const collection = polyDB.collection("UserSBT");

const processUser = (user) => {
  const html = `
    <div>
    <h1>Hello there ${user.name}</h1>
    </div>
  `;
  transporter.sendMail(
    {
      from: "trimailtris@gmail.com",
      to: user.email,
      subject: "Specially picked newsletters of your interest from TriMail",
      html: html,
    },
    (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Succesfully sent ", info);
      }
    }
  );
};

const fetchUsers = async () => {
  try {
    let users = [];
    const data = await collection.get();
    data.data.map((e) => {
      users.push(e.data);
    });

    users.forEach((user) => {
      cron.schedule(frequency[user.frequency], () => {
        processUser(user);
      });
    });

    return users;
  } catch (err) {
    console.log("Error fetching user ", err);
  }
};

fetchUsers().then((users) => {});

app.listen(PORT, () => {
  console.log("Listening to port, ", PORT);
});
