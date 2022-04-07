/**
 * Welcome to @VISKart / SRC / UTILITIES / VALIDATION / VALIDATE_LOGIN_USER
 *
 * This is a utility function that performs a validation on the input email and password
 * given by user while logging-in
 *
 * @type - function
 * @param {object} login - Login object having email and password entered by user
 * @return - {boolean || string} true if validation is correct else a string return
 *                               the message to show in warning
 * @export {function} validateLoginUser - The function to perform input validation for login
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

const validateLoginUser = (login) => {
  const emailLength = login.email.length;
  const passwordLength = login.password.length;
  if (emailLength === 0 && passwordLength === 0) {
    return "Email and Password cannot be empty!";
  } else if (emailLength === 0) {
    return "Email cannot be empty! Please enter a valid email id";
  } else if (passwordLength === 0) {
    return "Password cannot be empty! Please enter a valid password";
  }

  const regexEmail = /\S+@\S+\.\S+/;
  const emailTestResult = regexEmail.test(login.email);
  if (emailTestResult) {
    return true;
  } else {
    return "Invalid Email! Please enter a valid email id";
  }
};

export { validateLoginUser };
