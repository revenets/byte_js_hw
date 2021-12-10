const LOGIN = "admin";
const PASSWORD = "1q2w3e";

const authorize = () => {
    let userLogin;
    let userPassword;
    let isAuthSuccess = false;

    for(let i = 2; i >= 0; i--) {
        userLogin = prompt("Enter login: ");
        if (!userLogin) {
            alert("This field is required");
            i = 2;
            continue;
        }

        userPassword = prompt("Enter password: ");
        if (!userPassword) {
            alert("This field is required");
            i = 2;
            continue;
        }

        if (userLogin === LOGIN && userPassword === PASSWORD) {
            isAuthSuccess = true;
            alert("Welcome!");
            break;
        } else {
            alert(`Incorrect input! ${i} attempts left`);
        }
    }

    if(!isAuthSuccess) {
        alert("Access denied!");
    }
}

authorize();
