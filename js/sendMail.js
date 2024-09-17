function sendMail() {
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    console.log(name, email, subject, message);
    Email.send({
      Host: "smtp.gmail.com",
      Username: name,
      Password: "ftxw shpr hapi scwz",
      To: 'venuvk0304@gmail.com',
      From: "venuvk0304@gmail.com",
      Subject: `Mail from ${name} - ${subject}`,
      Body: message + " " + email,
    }).then((message) => {
      alert("Email sent successfully")
    })
}
  