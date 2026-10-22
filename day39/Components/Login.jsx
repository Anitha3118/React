import React from "react";
function LoginStatus()
{
    let isLoggedIn = true;
  if(isLoggedIn)
  {
    return <h2>Welcome to Student portal </h2>
  }
  else{
    return <h2>Please Login</h2>
  }
}
export default LoginStatus
