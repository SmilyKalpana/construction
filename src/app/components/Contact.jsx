import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className="flex justify-center items-center py-10 bg-gray-50">
      <form className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-4xl font-semibold mb-4 text-center text-primary">
          Contact Us
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b45739]"
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Enter your message"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b45739]"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#b45739] text-white py-2 rounded-lg hover:bg-[#9d452e] transition"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact
