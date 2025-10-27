import { useState } from 'react';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[--bg-color] transition-colors duration-500">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold text-center text-[--accent-color] mb-16 border-b border-[--border-color] pb-4 neon-text transition-colors duration-500">
          Contact Me
        </h2>
        <p className="text-lg text-[--text-color]/80 text-center max-w-3xl mx-auto mb-16 transition-colors duration-500">
          Ready to build something electric? Reach out for collaboration, opportunities, or just to talk tech. Use the 
          secure terminal below.
        </p>

        {/* Notification Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-[9999] flex items-center justify-center p-4">
            <div className="bg-[--card-color] p-8 rounded-xl max-w-md w-full border border-[--accent-color] neon-shadow text-center">
              <h3 className="text-2xl font-bold text-[--accent-color] mb-4">System Notification</h3>
              <p className="text-[--text-color] mb-6">
                Thank you for reaching out! Your message has been received by the terminal.
                <br />
                <br />
                <strong>NOTE:</strong> For this form to send a real email, a backend service (like EmailJS or a 
                serverless function) must be configured.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-[--accent-color] text-[--bg-color] font-bold py-2 px-6 rounded-full hover:opacity-90 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-[--text-color] text-sm font-bold mb-2 transition-colors duration-500"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[--card-color] border border-[--border-color] text-[--text-color] focus:outline-none focus:ring-2 focus:ring-[--accent-color] transition-colors duration-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-[--text-color] text-sm font-bold mb-2 transition-colors duration-500"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[--card-color] border border-[--border-color] text-[--text-color] focus:outline-none focus:ring-2 focus:ring-[--accent-color] transition-colors duration-500"
              required
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="message"
              className="block text-[--text-color] text-sm font-bold mb-2 transition-colors duration-500"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[--card-color] border border-[--border-color] text-[--text-color] focus:outline-none focus:ring-2 focus:ring-[--accent-color] transition-colors duration-500"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[--accent-color] text-[--bg-color] font-bold py-3 px-12 rounded-full text-lg hover:opacity-90 transition duration-300 neon-shadow"
            >
              Transmit Data
            </button>
          </div>
        </form>

        <div className="text-center mt-16">
          <p className="text-[--text-color]/80 text-lg transition-colors duration-500">Direct Comms:</p>
          <a
            href="mailto:kumaran311221@gmail.com"
            className="text-[--accent-color] text-xl font-medium hover:underline neon-text transition-colors duration-500"
          >
            kumaran311221@gmail.com
          </a>
          <p className="text-[--text-color]/80 text-lg mt-2 transition-colors duration-500">+91-6383228145</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

