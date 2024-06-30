 const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-details">
        <h2>Get in Touch</h2>
        <p>
          Thank you for visiting our site. If you have any questions or
          feedback, feel free to reach out to us. We would love to hear from
          you!
        </p>
      </div>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          <strong>Name:</strong> Likhitha
        </p>
        <p>
          <strong>Position:</strong> Software Developer
        </p>
        <p>
          <strong>Company:</strong> FTD
        </p>
        <p>
          <strong>Email:</strong> likhitha@example.com
        </p>
        <p>
          <strong>Phone:</strong> (123) 456-7890
        </p>
      </div>
      <div className="contact-form">
        <h2>Contact Form</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact