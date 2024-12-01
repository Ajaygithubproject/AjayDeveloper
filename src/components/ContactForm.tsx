import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would add your form submission logic, such as sending the data to an API or email service.

    // For now, simulate a form submission success and show the success message.
    setIsSubmitted(true);

    // Reset form data after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // Optionally, you can reset the success message after some time:
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000); // Hide the success message after 3 seconds
  };

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold">Get in Touch</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="text-gray-600" />
            <a href="mailto:ajaymanohar1872@gmail.com" className="hover:text-gray-600">
              ajaymanohar1872@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="text-gray-600" />
            <a href="tel:+919626877940" className="hover:text-gray-600">
              +91 96268 77940
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="text-gray-600" />
            <span>Trichy, India</span>
          </div>
          <div className="flex items-center space-x-3">
            <Linkedin className="text-gray-600" />
            <a
              href="https://www.linkedin.com/in/ajay-kumar-m-946006287/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="flex items-center space-x-2 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
        >
          <span>Send Message</span>
          <Send size={16} />
        </button>
      </motion.form>

      {isSubmitted && (
        <div className="mt-6 text-center text-green-500 font-semibold">
          Message Sent!
        </div>
      )}
    </div>
  );
};

export default ContactForm;
