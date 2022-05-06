import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const data = {
    email:"",
    fname:"",
    lname:"",
    password:""
}
function Signup(){

    const [stateInit, setStateInit] = useState(data)

    function setUser() {
        const val = JSON.stringify(stateInit)
        sessionStorage.setItem("user",val );
        let personName = sessionStorage.getItem("user");
        console.log(personName);
    }

    function handleChange(e) {
        console.log(e.target)
        const {name, value} = e.target
        setStateInit( { ...stateInit, [name]: value} )
        console.log(stateInit);
    
    }
   
    const mystyle = {
        backgroundColor: "rgb(35, 35, 199)",
          borderRadius: '1000px',
          width:"400px",
          height:"50px",
          margin: "1%",
          textAlign: "center",
          color: "white",
          marginLeft: "2%",
          fontSize: "large",
          };
          const mystyleOne = {
            color: "black",
            borderRadius: "30%",
            fontSize: "500%",
            textDecoration: "none",
          }
         const mystyleTwo = {
             marginLeft: "40%",
         }
         const mystyleThree = {
            margin: "0%",
         }
         const mystyleFour = {
            marginLeft: "35%",
         }
    
         const mystylefive = {
            width:"400px",
            height:"50px",
            margin: "1%",
            textAlign: "start",
         }
         const mystylesix = {
            marginLeft: "14%",
         }

    return(
        <div>
        <div className = "topBar">
            <a href="/" class="bacK" style={mystyleOne}>&#8249;</a>
          <Link to="/">
          <img style = {mystyleTwo} src="//csvcus.homeaway.com/rsrcs/cdn-logos/5.8.0/sitename/vrbo/web/logo.svg" alt="Vrbo"></img>
          </Link>
            <hr style = {mystyleThree}></hr>        
        </div>
        <br></br>
        <div className="detail-inputs" style = {mystyleFour}>
            <h1 style=  {mystylefive}>Create an account</h1>
            <input style=  {mystylefive} onChange={handleChange} value={stateInit.email} name ="email" type="email" placeholder="Email Address"></input><br></br>
            <input style=  {mystylefive} onChange={handleChange} value={stateInit.fname} name ="fname" type="text" placeholder="First Name" id = "firstname"></input><br></br>
            <input style=  {mystylefive} onChange={handleChange} value={stateInit.lname} name ="lname" type="text" placeholder="Last Name"></input><br></br>
            <input style=  {mystylefive} onChange={handleChange} value={stateInit.password} name ="password" type="password" placeholder="Password"></input><br></br>
            <p style=  {mystylefive}>By creating an account, I agree to the Vrbo <a href = "https://www.vrbo.com/legal/terms-and-conditions" target="_blank">Terms and <br></br>
            Conditions</a> and <a href = "https://www.vrbo.com/legal/privacy-policy" target="_blank">Privacy Statement.</a></p>
            <Link to={"/"}>
            <button onClick={setUser} style={mystyle}>Continue</button><br></br><br></br>
            </Link>
            <span>Already have an account? <a href = "Signin.jsx" target = "_blank">Sign in</a></span><br></br><br></br>
            <span id = "moreCenter">or continue with</span><br></br><br></br>
            <div className = 'social-apps' style = {mystylesix}>
          <a href="https://appleid.apple.com/auth/authorize?response_type=code&client_id=com.vrbo.applesignin&response_mode=form_post&scope=name%20email&state=nRnC8GXrCh3zD6Nu0imqLF8pppc6naCiEfDks7yi_vM&nonce=y8qmFV_cEFZW1X_ZixmqAuRCqiaZyJbB0-ha1xfPJwo&redirect_uri=https://www.vrbo.com/eg-auth-svcs/api/v1/oauth2/callback/apple-web&locale=en_US" target="_blank"><img src= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAACurq6mpqZNTU3v7++ysrLk5OTV1dW4uLhgYGDS0tL4+PjNzc36+vqDg4OXl5dmZmY8PDx0dHSKiorAwMBISEjl5eUaGhrExMQ3NzePj49CQkKhoaFra2vz8/N5eXkpKSlYWFgSEhIjIyObm5swMDAnJycNDQ3tN1RYAAAEiUlEQVR4nO2c13rbMAxGRct7yXsmXkndvv8TNoqnbMpyY4A/y+8/17nAiWgOAGQUEUIIIYQQQgghhBBCCCGEEEIIIYQQQggRpx4n5TE6CD0aTZMSo+NQopKYI7/QoahQWRkTtOHIXBHgKG2ZDA10POIss4KmhQ5ImvKNoKmgI5Kl/XkraNAhydL+uBPso2OS5f4LmhI6JlHufoOh/QxvZ9GUATooSeoWwbAG6R+bITooSWxj1IzQUQlSsQmaNjosQYY2wSU6KkHsnxAdlSQjm2BQCQybYFAbtnnoY9Q6z9TQQYliEZyjYxKldi8YWPKiGvY0GlnWijo6Imn6Wb/BGh2QOJOMYIg54MWVXzOoU/2Ji+EqrFXwzHGUTuLwfoBH4k2yLAWX3A6RaadRikuN1lNDsdt53+z2s9mi3E/ijv+zT3uc7K/my1X1ccj15fXs+s2w0XUU60+oWlK9g9xZpW49DafriKeb8Uu9+pmIu/E2789TPCyXtjePAja97GhtrR7+dUoVJJLHe2HE5fPva9qz5oRvWUyhRlkqd/OFlUmvMa8mlrpTDu9orzONp2P+R5posyO5M8zr7L1YOZp6gsZ8eJDut1U7BZmh/aKdriC+dGqts8gyhArG+oLYtd9arxYHuUt14bcD+kWPt6Iy9JCCLsYoNiX+3Gb0JTpQwXHogrbeNGHAZSlrNVcUdIPGm7ZgGSxoqXUKgz5V5OXJxIDXhrUFJ2hB9dUeXprqKQviMzQDZUN4fb+rLLhAC0YdZUN8T3Rxivs18CXi4rLDS7yh/aJoXxzlK0CPvQd0BT1o5lsrG+Jr3do7GrSf+mLxG+2nWE47gD4ZflHSNcRvSrWT+R707itvaTz4hsqG0ES+E0N0yTDSL6qh/Wwt96EZaif04Uka9QMwPJOovi9N0II51yTl+EAL6ueD8U17TzUXvgD+rol2nxB+mCo26x0AV3/Vj08eFGZaxTG+CPojttUNt2DD6P6NIGnQ3frKSe8UcEpRfaqBj1P9RgV4usaBIfjRmn5xgK8D3bw5+CEabFuU9gHqyAqouHWjuMCVg7X7Tc7AUhou1osDO9TaP3OmaBJMF5+zYZoC6feeujTEDFT1HtoLoPYT7dz+FageKXeGqIuW6vmoE7Dra87mGlwvpuoF2Qt7mKCj23nQUpSbBQMoqF5I/AabddPu906BCjpIfsMTp8rX8Q36Ezo4JuJr+sqXgYFr4QnlqxfwqyWR8hED+6DCiUlxoD/Gi9dbNFOnvrzfqjZOPWg0PaLVmuHHGE1Rmk/xF0suqOzAN2irDAoJDfz7SVnkH8nAN5lmEb8Khb9keYvwOQpZOMxDtL0dfxHYhuRs489KmEGujQh/ATEHqQYNfItwLo8eqNsm1da0/bUBWtfGvYfJD2+/YEpe2XRQug17nJcwH3j6Gzxh3b8l1tV7bf13oF8WKqZ7O1I/H6zdjdt8a9m3nYyV2rVjUpBoqS2vXtQa+pCVeY7xqDkp90fVp77Ieh4vk6RX/X/0CCGEEEIIIYQQQgghhBBCCCGEEEIIIQTDXw1EQTJa684CAAAAAElFTkSuQmCC" height = "35px"></img></a>
          <a href = "https://www.facebook.com/login.php?skip_api_login=1&api_key=232223133460554&kid_directed_site=0&app_id=232223133460554&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv11.0%2Fdialog%2Foauth%3Fresponse_type%3Dcode%26client_id%3D232223133460554%26response_mode%3Dquery%26scope%3Dpublic_profile%2Bemail%26state%3DJamaKemu1UdfS3YfXNG1dhyO3J9fCp4OPikFe_oEhuY%26redirect_uri%3Dhttps%253A%252F%252Fwww.vrbo.com%252Feg-auth-svcs%252Fapi%252Fv1%252Foauth2%252Fcallback%252Ffacebook-web%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D42374241-0d2d-4133-962d-3cafafa32adb%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.vrbo.com%2Feg-auth-svcs%2Fapi%2Fv1%2Foauth2%2Fcallback%2Ffacebook-web%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DJamaKemu1UdfS3YfXNG1dhyO3J9fCp4OPikFe_oEhuY%23_%3D_&display=page&locale=en_GB&pl_dbl=0" target = "_blank"><img height = "35px" src = "data:image/png;base64,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"></img>  </a>
          <a href = "https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=42464624060-9dvu968n052patjorlqk96iq0ucbmrjs.apps.googleusercontent.com&response_mode=query&scope=openid%20profile%20email&state=E-0qYCnUChMavctz4GKkwZxS-IwCRM8DfXoBPdTV8xQ&nonce=4V2Ok22v6MwBq76TyNbGTS3zSfO9cmyVDRRbwl_ojq8&redirect_uri=https://www.vrbo.com/eg-auth-svcs/api/v1/oauth2/callback/google-web" target = "_blank"><img src = "data:image/png;base64,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" height = "35px"></img></a>
        </div>
        </div>
        </div>
    )
}

export {Signup}