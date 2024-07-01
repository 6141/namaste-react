const Contact = () => {
    return (
      <div className="max-w-4xl mx-auto p-5">
        <h1 className="text-3xl font-bold mb-5">Contact Us</h1>
        <div className="mb-5">
          <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
          <p>
            Thank you for visiting our site. If you have any questions or feedback, feel free to reach out to us. We would love to hear from you!
          </p>
        </div>
        <div className="mb-5">
          <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
          <p><strong>Name:</strong> Likhitha</p>
          <p><strong>Position:</strong> Software Developer</p>
          <p><strong>Company:</strong> FTD</p>
          <p><strong>Email:</strong> likhitha@example.com</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Contact Form</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="name">Name:</label>
              <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name" name="name" required />
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="email">Email:</label>
              <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" name="email" required />
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="message">Message:</label>
              <textarea className="w-full p-2 border border-gray-300 rounded" id="message" name="message" required></textarea>
            </div>
            <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600" type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Contact;
  