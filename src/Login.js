
import React from 'react';
import './Login.css';
const Login=()=> {
  var userData=[
    {username:"RAJIKANNAN",passcode:1234,cart:[]},
    {username:"YUGA",passcode:123,cart:[]},
    {username:"YOGA",passcode:123,cart:[]},
    {username:"SONI",passcode:123,cart:[]},
  ];
  // const signup=()=>{
  //   var userName=document.getElementById("userName").value;
  //   var userPasscode=document.getElementById("Passcode").value;
  //   var activeuserDetail= userData.filter((data) =>{
  //     return userName==data.userName;
  //   });
  //   console.log(activeuserDetail);
  //   if (activeuserDetail.length >0){
  //     if(activeuserDetail[0].Passcode==userPasscode){
  //       localStorage.setItem("userName",activeuserDetail[0].userName);
  //       window.location.replace("/Home");
  //     }else{
  //       console.log("Wrong Passcode");
  //     }
  //   }
  // }
  
  var activeuser=localStorage.getItem("userName");
  
  function navigate(){
    window.location.replace("/Home");
  }
return (
 
  <div class="parent">
    <div class="child">
    
      <label>username</label>
      <input type="text" id="userName"/>
      <label>Password</label>
      <input type="Number" id="passcode"/>
      <button onClick={navigate}className='hi'>Login</button>

    </div>
  </div>
)
}

export default Login;