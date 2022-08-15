import { useState } from "react";
import { clientId } from "../../constants/googleLogin";
// @ts-ignore
import { GoogleLogin, GoogleLogout } from "react-google-login";

const initialState = {
  isLoggedIn: false,
  userInfo: {
    name: "",
    emailId: ""
  }
};
export const GoogleLoginButton = () => {
  const [login, setLogin] = useState(initialState);

  // Success Handler
  const responseGoogleSuccess = (response: any) => {
    console.log(response);
    let userInfo = {
      name: response.profileObj.name,
      emailId: response.profileObj.email
    };
    setLogin({ userInfo, isLoggedIn: true });
  };

  // Error Handler
  const responseGoogleError = (response: string) => {
    console.log(response);
  };

  // Logout Session and Update State
  const logout = (response: any) => {
    console.log(response);
    let userInfo = {
      name: "",
      emailId: ""
    };
    setLogin({ userInfo, isLoggedIn: false });
  };


  return (
    <div>
      <div>
        {login.isLoggedIn ? (
          <div>
            <h1>Welcome, {login.userInfo.name}</h1>
            <GoogleLogout
              clientId={clientId}
              buttonText={"Logout"}
              onLogoutSuccess={() => logout}
            />
          </div>
        ) : (
          <GoogleLogin
            clientId={clientId}
            buttonText="Sign In with Google"
            onSuccess={(response) => responseGoogleSuccess(response)}
            onFailure={(response) => responseGoogleError(response)}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"} />
        )
        }
      </div>
    </div>
  );
};

