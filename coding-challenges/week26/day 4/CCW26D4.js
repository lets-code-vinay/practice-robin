var userObj = {
  name: "robin",
  class: 12,
  Roll_Number: 123445,
  email: "hemantkumargupta36@gmail.com",
};
function UserModel(userInfo) {
  this.userDetails = userInfo;
}

const user = new UserModel(userObj);
console.log(user.userDetails.name);
