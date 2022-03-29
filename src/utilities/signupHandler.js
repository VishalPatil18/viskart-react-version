import { toast } from "react-toastify";
import { signupService } from "../services";

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
    }
  } catch (error) {
    setLoader(false, "I'm Working");
    toast.error(error.response.data.errors[0]);
  }
};

export { signupHandler };
