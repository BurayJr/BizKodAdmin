import { useEffect, useState } from "react";
import { environment } from "./env";
import Parse from 'parse';



const Login = ( ) => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }


    const loginUser = async (e) => {

        try{
            e.preventDefault();
        if (!username || !password) {
            console.log("Please fill in both username and password fields.");
            return;
          } else {
              console.log('andrej');
            const response = await fetch(`http://192.168.0.184:4000/login`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: username,
                password: password,
              
              }),
            })

            const data = await response.json();

            console.log('data', data);
            if(data.status===200){
                window.location.href = '/portal';
            }
        }
    }
        catch (error) {
            console.error("Error:", error);
            }
        
        
            //   .then((response) => {
            //     console.log("Response status:", response.status);
            //     if (response.status === 200) {
            //       // Open a new page or redirect to a different URL
            //     //   window.location.href = '/OglasList';
            //     window.location.href = '/portal';
            //     } else {
            //       console.log("Login failed. Please try again.");
            //     }
            //   })
            //   .catch((error) => {
            //     console.error("Error:", error);
            //   });
          
    }

    return (
        
    <div className="login-container ">
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 justify-content-center align-items-center ">
      <h1 className="adm">Admin Login</h1>
      
      <form id="login-form">
        <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start pt-4 ">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            required
            onChange={handleUsernameChange}
            className="form-control form-control-lg"
          />
        </div>
        <div className="form-outline mb-3">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            onChange={handlePasswordChange}
            className="form-control form-control-lg"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-lg" onClick={loginUser} >Login</button>
      </form>
      </div>
    </div>
    
    


    )
}

export default Login;