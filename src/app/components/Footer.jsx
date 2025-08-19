import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#b45739] text-white text-center py-6">
      {/* Contact Info */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm sm:text-base mb-3">
        <p>Email: <a href="mailto:construct@zee.qa" className="underline hover:text-gray-200">construct@zee.qa</a></p>
        <p>Tel: <a href="tel:44556875" className="hover:text-gray-200">44556875</a></p>
        <p>Phone: <a href="tel:50421545" className="hover:text-gray-200">50421545</a></p>
      </div>

      {/* Rights Info */}
      <p className="text-xs text-gray-200">
        © 2025 Zee Constructions. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
