import React, { useState } from "react";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdMarkEmailRead } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Placeholder for API or email service integration
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen px-6 md:px-16 lg:px-24 py-10 
                    bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100
                    transition-colors duration-500">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
        <p className="mt-2 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Have questions or need assistance? Reach out to us and we’ll respond promptly.
        </p>
      </div>

      <div className="max-w-3xl mx-auto grid gap-10 sm:grid-cols-2">

        {/* CONTACT INFORMATION */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            You can reach us via phone, email, or visit our office.
          </p>
          <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-300">
            
            <li className="flex items-center gap-2"><FaLocationDot className="w-6 h-6 text-blue-600" />
            <a href="Address: Nairobi, Kenya"className="hover:text-blue-600 transition"> Address: Nairobi, Kenya </a>
            </li>
            <li className="flex items-center gap-2"><PiPhoneCallFill className="w-6 h-6 text-blue-600" />
            <a href="tel:+254792529532"className="hover:text-blue-600 transition"> Phone: +254 792 529 532 </a>
            </li>
            <li className="flex items-center gap-2"><MdMarkEmailRead className="w-6 h-6 text-blue-600" />
            <a href="Imail:samuelmunialo2005@gmail.com"className="hover:text-blue-600 transition"> Email: samuelmunialo2005@gmail.com </a>
            </li>

             <li className="flex items-center gap-2">< CgWebsite className="w-6 h-6 text-blue-600" />
            <a href="Website: www.elearning-sdg4.org"className="hover:text-blue-600 transition"> Website: www.elearning-sdg4.org </a>
            </li>
          </ul>
        </div>

        {/* CONTACT FORM */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
        <h2 className="text-xl font-semibold mb-4">Send a Message</h2>

        <form
          action="https://formsubmit.co/samuelmunialo2005@gmail.com"
    method="POST"
    className="flex flex-col gap-4"
  >
    {/* Disable captcha (optional) */}
    <input type="hidden" name="_captcha" value="false" />

    {/* Email subject */}
    <input type="hidden" name="_subject" value="New Contact Form Message" />

    {/* Redirect after submit */}
    <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2
                 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100
                 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
    />

    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2
                 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100
                 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
    />

    <textarea
      name="message"
      placeholder="Your Message"
      rows={5}
      required
      className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2
                 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100
                 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
    />

    <button
      type="submit"
      className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded
                 hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
    >
      Send Message
    </button>
  </form>
</div>


      </div>
    </div>
  );
};

export default Contact;
