import React from "react";
// import SearchIcon from '@material-ui/icons/Search';
// import InputBase from '@material-ui/core/InputBase';
// import Toolbar from '@material-ui/core/Toolbar';


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

// function Header() {
//   return (
//     <Toolbar className="headerClass">
//       <h1 className="headerh1">Keeper</h1>
//         <div className="searchContent">
//           <SearchIcon />
//         </div>
//         <InputBase className="searchbar"
//           placeholder="Search…"
//           inputProps={{ 'aria-label': 'search' }}
//           style={{color:'white'}}
//         />
//     </Toolbar>
//   );
// }

export default Header;