const usersDataBase = {
  Dayveed: {
    firstName: "Dayveed",
    lastName: "Halartishe",
    email: "dayveed@mail.com",
    profession: "Web Designer",
    passWord: "Dayveed123",
  },
  Ada: {
    firstName: "Ada",
    lastName: "Lovelace",
    email: "adalovelace@mail.com",
    profession: "Computer programmer",
    password: "12345Ada",
  },
  Yemi: {
    firstName: "Yemi",
    lastName: "Adebisi",
    email: "yemi_adebisi@gmail.com",
    profession: "Software Engineer",
    password: "12345Yemi",
  },
};

function displayUserDetails() {
  // Enter Username
  let userName = prompt("Enter Your Username");

  while (validateUserName(userName) == false) {
    userName = prompt(
      "Username Greater Than 10, Please Enter A Valid Username"
    );
  }

  if (userName == null) {
    return;
  }

  //Enter Password
  let passWord = prompt("Enter Your Password");
  while (validatePassWord(passWord) == false) {
    passWord = prompt(
      "Password Must Be Greater Than 6, Please Enter A Valid Password"
    );
  }

  if (passWord == null) {
    return;
  }

  //Confirm Password
  let confirmPassWord = prompt("Confirm Password");
  while (confirmPassWord !== passWord) {
    confirmPassWord = prompt("Password Incorrect. Confirm Password Again");
  }
  if (confirmPassWord == null) {
    return;
  }

  //Storing Object Data and logging it
  //   (usersDataBase.username = userName),
  //     (usersDataBase.password = passWord),
  //     console.log(
  //       "User Details Stored:\nUsername: " +
  //         usersDataBase.username +
  //         "\nPassword:" +
  //         usersDataBase.password
  //     );
  //check if the user database contains the username
  const user = usersDataBase[userName];
  if (user == undefined) {
    alert(
      "User Not Found. Try Again With A Valid Username or Register on The App"
    );
    return;
  }
  console.log(user);
  alert(`User found with the following details:
  First Name: ${user.firstName}
  Last Name: ${user.lastName}
  Email: ${user.email}
  Profession: ${user.profession}
  `);

  //   console.log("Username:", userName);
  //   console.log("Password:", passWord);
  //   alert("Ëverywhere Good");
}

displayUserDetails();

// alert("You have come to the end of this program. Goodbye!!");

function validateUserName(userName) {
  if (userName == null) {
    return true;
  } else if (userName.length > 10) {
    return false;
  } else if (userName.length < 1) {
    return false;
  } else {
    return true;
  }
}

function validatePassWord(passWord) {
  if (passWord == null) {
    return true;
  } else if (passWord.length > 6) {
    return true;
  } else {
    return false;
  }
}
