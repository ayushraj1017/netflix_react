import React from "react";

const Nav = () => {
  return (
    <div className="text-white absolute top-0 left-0 w-full sticky 
     flex justify-between h-12">
      
     <div>
     <img className="h-12 p-2 cursor-pointer"
        src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png"
        alt=""
      />
     </div>
     <div>
      <img className="h-12 p-2 cursor-pointer"
       src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png"/>
     </div>
    </div>
  );
};

export default Nav;
