import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright &#9400; {year} || The Genius Hub</p>
    </footer>
  );
}

export default Footer;
