import nodemailer from "nodemailer";
import { userEmail_Password, user_email } from "../../config.js";
let transporterInfo = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: user_email,
    pass: userEmail_Password,
  },
};

export let sendMail = async (mailInfo) => {
  try {
    let transporter = nodemailer.createTransport(transporterInfo); //
    let info = await transporter.sendMail(mailInfo);
  } catch (error) {
    console.log("error has occurred", error.message);
  }
};

//=>Send mail from google smtp
//=> We call the following two  function when we need to send mail

/* await sendMail({
  from: '"Hello Display" <kcanjan2020@gmail.com>', //it is used to display text before email address
  to: [req.body.email], //=>send to specific mail
  subject: "My first system email",
  html: `<h1>Hello world:</h1>`,
}); */

//=> send mail with attachments
/* 
    await sendMail({
      from: '"Fred Foo" <nitanthapa425@gmail.com>',
      to: ["kcanjan2020@gmail.com"],
      cc: ["kcanjan2020@gmail.com"],
      bcc: ["kcanjan2020@gmail.com"],
      attachments: [
        {
          filename: 'example.pdf', // Replace with your desired filename
           path: '/path/to/example.pdf' // Replace with the actual file path on your server
        },
      ],

      subject: "this is subject",
      html: `<h1>Hello World<h1>`,
    });
 */
