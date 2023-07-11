import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between p-3">
        <div>
          <h2 className="text-xl mb-2">Categories</h2>
          <ul className="flex flex-col pl-2 text-gray-500 text-l gap-2">
            <Link>Mobiles</Link>
            <Link>Laptops</Link>
            <Link>Electronics</Link>
          </ul>
        </div>
        <div>
          <h2>Links</h2>
          <ul>
            <Link>Ayklam</Link>
          </ul>
        </div>
        <div>
          <h2>About</h2>
        </div>
        <div>
          <h2>contact</h2>
        </div>
      </div>
      <div>
        <h3>CopyRights@RamezGamel</h3>
      </div>
    </div>
  );
};

export default Footer;
