import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Note: Double Click on <strong><em>New Post</em></strong> and <strong><em>Published Posts </em></strong>
      buttons to remove displayed Structures </p>
      <p>Copyright ⓒ Biswajit Sharma {year}</p>

    </footer>
  );
}

export default Footer;
