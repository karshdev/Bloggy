const router = require("express").Router();
const nodemailer = require("nodemailer");
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "sharmaaakarsh120@gmail.com",
      pass: "jruoiexdgbblkpqa",
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });
  router.post("/", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "sharmaaakarsh120@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.status(500).json({ status: "ERROR" });
      } else {
        res.status(200).json({ status: "Message Sent" });
      }
    });
  });

module.exports = router;