import formData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.NEXT_PUBLIC_MAILGUN_API_KEY,
});
const mailgunDomain = process.env.NEXT_PUBLIC_MAILGUN_DOMAIN;

const sendConfirmMail = async (username: string, email: string) => {
  const html = `
  
<!DOCTYPE html>
<html>
<head>
  <title>Welcome to TriMail</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f7f7f7;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    h1 {
      color: #333;
      text-align: center;
    }

    p {
      margin-bottom: 20px;
    }

    .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #4CAF50;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Welcome to TriMail!</h1>
    <p>Dear ${username},</p>
    <p>Thank you for joining TriMail. We are excited to have you as part of our community.</p>
    <p>If you have any questions or need assistance, feel free to reach out to our support team.</p>
    <p>Happy mailing!</p>
    <p>The TriMail Team</p>
  </div>
</body>
</html>
  `;

  mg.messages
    .create(mailgunDomain, {
      from: "trimailtris@gmail.com",
      to: [email],
      subject:
        "Welcome to TriMail community. A Blockchain-based AI Research Paper Recommendation System and Newsletter sevice",
      text: "Get into the world of science and news",
      html: html,
    })
    .then((e) => {
      console.log(e);
    });
};

export default sendConfirmMail;
