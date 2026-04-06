"use client";

import { useState } from "react";

export default function Map() {
  const [mapOpen, setMapOpen] = useState(false);
  return (
    <>
      <a href="#" className={`map-section ${mapOpen ? "js-active" : ""}`}>
        <div className="map-toggle wow fadeInUpShort" aria-hidden="true">
          <div className="mt-icon">
            <i className="mi-location"></i>
          </div>
          <div className="mt-text">
            <div onClick={() => setMapOpen((pre) => !pre)} className="mt-open">
              Open the map <i className="mt-open-icon"></i>
            </div>
            <div onClick={() => setMapOpen((pre) => !pre)} className="mt-close">
              Close the map <i className="mt-close-icon"></i>
            </div>
          </div>
        </div>
      </a>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8576429901987!2d72.50819691247453!3d23.028998579082494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b370fdf7101%3A0x168e6d8d1195ecf8!2sPanchgini%20Apartment%2C%20Ramdevnagar%20Rd%2C%20Satellite%2C%20Ahmedabad%2C%20Gujarat%20380015%2C%20India!5e0!3m2!1sen!2sus!4v1775460391263!5m2!1sen!2sus" 
        width={600}
        height={450}
        loading="lazy"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex={0}
      />
    </>
  );
}
