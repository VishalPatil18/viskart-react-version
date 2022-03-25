import { signupService } from "../services";

const signupHandler = async (
  event,
  signup,
  authDispatch,
  authModalHandler,
  navigate
) => {
  try {
    event.preventDefault();
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
      authModalHandler("CLOSE");
      alert("Signup Successful");
      navigate("/");
    } else {
      throw new Error("Something went wrong! Please try again later.");
    }
  } catch (error) {
    alert(error);
  }
};

export { signupHandler };
