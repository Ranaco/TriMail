# TriMail

> Trimail is an all round web3 AI-based solution for newsletter and article reading.
> Unlike any convnetional newsletter service, **TriMail** works with a mix of AI and blockchain
> to create a flawless and secure newsletter and interest environment.

## Inspiration

> The idea of TriMail with a mix of blockchain and AI seemed fascinating to us, imagine
> being able to not just get whatever newsletter, but only the one that you are really
> interested in, with the security and privacy of blockchain. TriMail makes it possible
> with the help of [Particle](https://particle.network/), [Polybase](https://polybase.xyz)
> ,[Tensorflow](https://tensorflow.org/) and a custom SMTP server using [Nodemailer](https://nodemailer.com)

## Features

- Seamelss, secure and engaging UX.
- Interests can be picked and updated at anytime, easily.
- Regular and automatic mailing systetm.
- Custom AI model to fetch research papers, based on interests.
- Safe and secure management of data.
- User's soul bound ledger makes the process more secure and transparent.
- Multiple sign-in options, Gmail, Phone, mail, web3 wallet, etc.
- Fresh and user friendly UI

> ### Particle network

> We used all the features of Particle network - wallet auth, signing payments,
> managing User's Soul Bound Token, creating an overall seamsless and secure UX.
> By providing us an easy-to-integrate and ready-to-use in-built wallet,
> the UX overall improved greatly.

> ### Polybase SDK

> Polybase integrated well with our demands, not just for managing the user's personal info,
> interests and other stuff, but also, using the dynamic NFT servide, we could very easily
> create the User's Soul Bound Token, which could be easily updated but just updating the
> data on it's row. It was the perfect choice for this project.

## Challenges I ran into

1. Integrating polybase with particle network

   - Integrating Polybase with Particle network was an issue, I had to create
     a custom hook for that and some api calls

2. Custom SMTP server

   - Had to create a custom SMTP server for regular mailing, it was new to me.
     Had to use cron jobs and nodemailer service, Finally integrated nodemailer with sendgrid

3. Flask server for AI response

   - Deploying the model was hard part because it is huge size so we cant deploy in free hosting platform like pythonanywhere,heroku and all other freehosting 
    platform 

## Demo

> [Live website](https://trimail.tris.social)

## Tech Stack

- **Frontend**: NEXT.js, ethers, Material UI,
- **Backend**: Polybase, Particle auth, Particle connect, Flask, Nodejs, Tensorflow

## Deployed conracts

> [UserSBT (Polygon Mumbai)](https://mumbai.polygonscan.com/address/0x2F834f7a9e29e87D59D7e83c89359d9938BD1317)

## Run Locally

Clone the project

```bash
  git clone https://github.com/Ranaco/trimail
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
