import emailjs from "emailjs-com";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      e.target,
      "YOUR_PUBLIC_KEY"
    );

    e.target.reset();
    alert("Message sent successfully");
  };

  return (
    <section className="section">
      <h2>Contact Me</h2>

      <form onSubmit={sendEmail} className="form">
        <input name="name" placeholder="Your Name" required />
        <input name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Message" />
        <button className="btn primary">Send</button>
      </form>
    </section>
  );
}
