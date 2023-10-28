import { motion } from "framer-motion";
import { FiUser, FiMail, FiMessageCircle } from "react-icons/fi";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="mx-auto max-w-lg p-6 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
          Name
        </label>
        <div className="flex items-center">
          <FiUser className="mr-3 text-gray-500" />
          <input
            type="text"
            id="name"
            className="w-full rounded-md py-2 border focus:outline-none focus:border-blue-500"
            placeholder="Your Name"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
          Email
        </label>
        <div className="flex items-center">
          <FiMail className="mr-3 text-gray-500" />
          <input
            type="email"
            id="email"
            className="w-full rounded-md py-2 border focus:outline-none focus:border-blue-500"
            placeholder="Your Email"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
          Message
        </label>
        <div className="flex items-center">
          <FiMessageCircle className="mr-3 text-gray-500" />
          <textarea
            id="message"
            className="w-full rounded-md py-2 border focus:outline-none focus:border-blue-500"
            placeholder="Your Message"
            rows="4"
          ></textarea>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md focus:outline-none"
        onClick={handleSubmit}
      >
        Send
      </motion.button>
    </form>
  );
};

export default ContactForm;
