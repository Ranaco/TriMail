# TriMail

> TriMail is an all-around web3 AI-based solution for newsletters and article reading. Unlike conventional newsletter services, **TriMail** utilizes a combination of AI and blockchain technologies to create a flawless and secure newsletter and interest environment.

## Inspiration

> The idea of TriMail, incorporating both blockchain and AI, fascinated us. Imagine being able to receive newsletters only on topics you are genuinely interested in, all while ensuring security and privacy through blockchain technology. TriMail makes this possible with the help of [Particle](https://particle.network/), [Polybase](https://polybase.xyz), [Tensorflow](https://tensorflow.org/), and a custom SMTP server using [Nodemailer](https://nodemailer.com).

## Features

- Seamless, secure, and engaging UX.
- Users can easily select and update their interests at any time.
- Regular and automatic mailing system.
- Custom AI model for fetching research papers based on user interests.
- Safe and secure data management.
- User's soul-bound ledger enhances security and transparency.
- Multiple sign-in options, including Gmail, phone, email, and web3 wallet.
- Fresh and user-friendly UI.

> ### Particle Network

> We utilized various features of the Particle network, such as wallet authentication, signing payments, managing the User's Soul Bound Token, and creating a seamless and secure user experience. The built-in wallet provided by Particle significantly improved the overall user experience.

> ### Polybase SDK

> Polybase seamlessly integrated with our requirements, enabling us to manage users' personal information, interests, and more. Additionally, by leveraging the dynamic NFT service, we easily created the User's Soul Bound Token, which can be updated simply by modifying the data on its row. Polybase was the perfect choice for this project.

## Challenges Faced

1. Integrating Polybase with the Particle network:
   - Integrating Polybase with the Particle network posed a challenge. We had to create a custom hook and make API calls to establish the integration.

2. Custom SMTP server:
   - Setting up a custom SMTP server for regular mailing was a new experience for us. We utilized cron jobs and integrated Nodemailer with SendGrid to overcome this challenge.

3. Flask server for AI response:
   - Deploying the AI model was a challenging task due to its large size, making it impractical to deploy on free hosting platforms such as PythonAnywhere or Heroku.

## Demo

> [Live Website](https://trimail.tris.social)

## Tech Stack

- **Frontend**: NEXT.js, ethers, Material UI
- **Backend**: Polybase, Particle auth, Particle connect, Flask, Node.js, Tensorflow

## Deployed Contracts

> [UserSBT (Polygon Mumbai)](https://mumbai.polygonscan.com/address/0x2F834f7a9e29e87D59D7e83c89359d9938BD1317)

## Running Locally

Clone the project:

```bash
git clone https://github.com/Ranaco/trimail
```
Running the model

Download the model from this [Link](https://drive.google.com/file/d/17gmBpR9dUYMQNsH93vJj9twn7k6zPpMW/view) and store it in model directory

```
cd model
```
Install all the requirements 

```
pip install -r requirements.txt
```

To Run the model 

```
python recommendation_api.py
```


Go to the project directory

```bash
  cd trimail
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

### ENV

> The environment variables are as follows and can be obtained from respective sources.

- NEXT_PUBLIC_POLY_NAMESPACE (Polybase)
- NEXT_PUBLIC_APP_ID (Particle)
- NEXT_PUBLIC_CLIENT_KEY (Particle)
- NEXT_PUBLIC_PROJECT_ID (Particle)
- NEXT_PUBLIC_PRIVATE_KEY (Wallet)
- NEXT_PUBLIC_USER_SBT (Smart contract address mentioned in the README)
- NEXT_PUBLIC_CORE_KEY (CORE API key)
- NEXT_PUBLIC_MAILGUN_API_KEY (Mailgun API key)
- NEXT_PUBLIC_MAILGUN_DOMAIN (Mailgun domain)


## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch
   ```sh
   git checkout -b feature/AmazingFeature
   ```
3. Commit your Changes
   ```sh
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the Branch
   ```sh
    git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

## Feedback & Contact

If you have any feedback or contact, please reach out to us at [Ranaco](mailto:ranasatyamraj@gmail.com)

## Authors

> [Ranaco](https://github.com/Ranaco)(Fullstack developer | Blockchain developer)

> [Sanjai](https://github.com/sanjail3)(AI Lead | Python developer)
