import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {Link}  from "react-router-dom";

const Footer = () => {
  return (
    <div>
       <footer className="bg-gray-800 text-white p-6">
      <div className="container flex justify-around">
        {/* Links Section */}
        <div>
          <h2 className="font-bold text-lg mb-2">Quick Links</h2>
          <ul className="space-y-2">
            <li  className="hover:text-gray-400">
            <Link to="/">Home</Link>
            </li>
            <li  className="hover:text-gray-400">
            <Link to="/About">About</Link>
            </li>
            <li className='hover:text-gray-400'><a href="#services" className="hover:text-gray-400">Services</a>
            <Link to="/Shop"></Link>
            </li>
            <li className="hover:text-gray-400">
            <Link to="/Contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h2 className="font-bold text-lg mb-2">Subscribe to our Newsletter</h2>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            />
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-4 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact Information and Social Media */}
        <div>
          <h2 className="font-bold text-lg mb-2">Contact Us</h2>
          <p>1234 Street Name</p>
          <p>City, State, ZIP</p>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <div className="mt-4 flex space-x-4">
            <a href="https://facebook.com" className="hover:text-gray-400"><FaFacebook /></a>
            <a href="https://twitter.com" className="hover:text-gray-400"><FaTwitter /></a>
            <a href="https://instagram.com" className="hover:text-gray-400"><FaInstagram /></a>
            <a href="https://linkedin.com" className="hover:text-gray-400"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
