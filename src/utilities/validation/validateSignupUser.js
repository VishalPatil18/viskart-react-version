/**
 * Welcome to @VISKart / SRC / UTILITIES / VALIDATION / VALIDATE_SIGNUP_USER
 *
 * This is a utility function that performs a validation on the input email, username, password
 * and confirmPassword given by user while signing-up
 *
 * @type - function
 * @param {object} signup - Signup object having email, username, password and confirmPassword entered by user
 * @return - {boolean || string} true if validation is correct else a string returning
 *                               the message to show in warning
 * @export {function} validateSignupUser - The function to perform input validation for signup
 * @see Source - https://github.com/VishalPatil18/viskart-react-version
 */

const validateSignupUser = ({ email, username, password, confirmPassword }) => {
  const emailLength = email.length;
  const passwordLength = password.length;
  const usernameLength = username.length;
  if (emailLength === 0 || passwordLength === 0 || usernameLength === 0) {
    return "Email, username and Password cannot be empty!";
  }

  if (password !== confirmPassword) {
    return "Passwords do not match! Please try again";
  }

  const regexHasNum = /[0-9]/;
  const regexHasAlpha = /[a-z]/i;
  const regexEmail = /\S+@\S+\.\S+/;
  const passTestResult =
    regexHasNum.test(password) && regexHasAlpha.test(password);
  const emailTestResult = regexEmail.test(email);
  if (passTestResult && emailTestResult) {
    return true;
  } else if (emailTestResult) {
    return "Invalid password. Password should have smallcase letter, capital letter and number each";
  } else if (passTestResult) {
    return "Invalid Email. Please try again!";
  } else {
    return "Invalid Email and Password. Please try again!";
  }
};

export { validateSignupUser };
