import React from "react";



function Header(props) {

  let userName = props.NameUser.trim();
  userName =userName+" " 
  userName = userName.substring(0,userName.indexOf(" "));


  return (
    <header className="headerClass">
      <h1 className="headerh1">Blog Post <span className="headerh1Span">H! {userName}</span></h1>
    </header>
  )
}

export default Header;