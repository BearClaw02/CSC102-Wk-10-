function checkCreds() {
    console.log("checkCreds() started");
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNum = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;

    console.log(" Full Name is " + fullName);

    if (fullName.length > 20 || fullName.length < 2) {
        document.getElementById("loginStatus").innerHTML = "Invalid full name !! Please submit a valid full name.";
    } else if (badgeNum > 999 || badgeNum < 0) {
        document.getElementById("loginStatus").innerHTML = "Invalid Badge number ! Please submit a valid Badge number.";
    }
    else {
        alert("Welcome,  " + fullName);
        location.replace("UATSpacePage.html");
    }
}