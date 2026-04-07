import React from "react";

export default function FooterSocials() {
  const socials = [
    { name: "Facebook", icon: "fa-facebook", url: "https://www.facebook.com/PrimoTechworks" },
    { name: "YouTube", icon: "fa-youtube", url: "https://www.youtube.com/@PrimoTechworks" },
    { name: "Twitter", icon: "fa-x-twitter", url: "https://x.com/primotechworks" },
    { name: "LinkedIn", icon: "fa-linkedin", url: "https://www.linkedin.com/company/primotechworks" },
  ];

  return (
    <>
      {socials.map((social, index) => (
        <li key={index}>
          <a href={social.url} rel="noopener nofollow" target="_blank">
            <i className={social.icon} /> {social.name}
          </a>
        </li>
      ))}
    </>
  );
}
