// middleware function

function userCredentials(req, res, next) {
  console.log(`userName: (alex)`);
  console.log(`email: (alex@gmail.com)`);
  console.log(`password: (123Alex)`);
  console.log(`age: (24)`);
  next();
}

export default userCredentials;
