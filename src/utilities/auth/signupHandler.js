/**
 * Welcome to @VISKart / SRC / UTILITIES / AUTH / SIGNUP_HANDLER!
 *
 * This is a utility function that sign's-up a new user
 *
 * @type - function
 * @param {object} event - The event which triggered the signup action
 * @param {object} signup - The object having `email`, `username` and `password` of the user trying to signup
 * @param {function} authDispatch - Dispatch function to change the authState in authContext
 * @param {function} authModalHandler - Function to toggle the authModal
 * @param {function} setLoader - Function to activate and deactivate loaders
 * @param {function} navigate - Function used to navigate from one route to another
 * @return - no return
 * @export {function} signupHandler - The function to perform signup operation
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

import { toast } from "react-toastify";
import { signupService } from "../../services";

const signupHandler = async (
  event,
  signup,
  authDispatch,
  authModalHandler,
  setLoader,
  navigate
) => {
  try {
    event.preventDefault();
    authModalHandler("CLOSE");
    setLoader(true, "Signing Up");
    const response = await signupService(signup);
    if (response.status === 201) {
      authDispatch({
        type: "SIGNUP",
        payload: {
          token: response.data.encodedToken,
          user: response.data.createdUser,
        },
      });
      localStorage.setItem("viskartToken", response.data.encodedToken);
      localStorage.setItem(
        "viskartUser",
        JSON.stringify(response.data.createdUser)
      );
      setLoader(false, "I'm Working");
      toast.success(`Signup Successful ${signup.username}!`);
      navigate("/");
    } else {
      throw new Error("Something went wrong! Please try again later");
    }
  } catch (error) {
    setLoader(false, "I'm Working");
    toast.error(error.response.data.errors[0]);
  }
};

export { signupHandler };
