import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  FaCcVisa,
  FaCcMastercard,
  FaPaypal,
  FaCcDiscover,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 sm:pt-16 pb-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Details */}
          <div className="text-left lg:text-left">
            <h2 className="font-bold text-lg text-white mb-3">
              Faiza Enterprise
            </h2>
            <p className="text-sm text-gray-400">
              Your one-stop shop for all grocery, dairy products, and cold
              beverages. We provide the freshest produce and essentials at your
              doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg text-white mb-3 text-left lg:text-left">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-400 lg:text-left">
              <li>
                <a href="#" className="hover:text-amber-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-lg text-white mb-3 text-left lg:text-left">
              Customer Service
            </h3>
            <ul className="space-y-2 text-sm text-gray-400 lg:text-left">
              <li>
                <a href="#" className="hover:text-amber-400">
                  Order Tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400">
                  Delivery Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400">
                  Payment Methods
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center lg:text-center">
            <h3 className="font-semibold text-lg text-white mb-3">Follow Us</h3>
            <div className="flex justify-center lg:justify-center gap-6 text-xl">
              <a href="#" className="hover:text-blue-500">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-sky-500">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-rose-500">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-blue-700">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className="mt-8 pt-4 border-t border-gray-700">
          <div className="flex flex-col items-center">
            <h4 className="font-semibold text-lg text-white mb-3">We Accept</h4>
            <div className="flex justify-center gap-6">
              <FaCcVisa size={30} className="text-gray-400 hover:text-white" />
              <FaCcMastercard
                size={30}
                className="text-gray-400 hover:text-white"
              />
              <FaPaypal size={30} className="text-gray-400 hover:text-white" />
              <FaCcDiscover
                size={30}
                className="text-gray-400 hover:text-white"
              />
            </div>
          </div>
        </div>

        {/* Bottom Row: Registered Office Details & Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-sm text-gray-400">
          <p className="mb-2">
            <strong>Registered Office:</strong> Faiza Enterprise Pvt. Ltd.
            <br />
            Nengrapir, Building 5, First Floor
            <br />
            Daulatpur, Dakshin Dinajpur 733125, WB, India
            <br />
            Email: support@faizaenterprise.com | Phone: +91-8768513153
            <br />
            <span className="text-gray-500">
              Company Registration No: 123456789
            </span>
          </p>
          <p>
            &copy; {new Date().getFullYear()} Faiza Enterprise. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
