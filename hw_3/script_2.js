function userGreeting() {
    let userName = prompt("What is your name?");
    let userAge = Number(prompt("How old are You?"));
    if (userAge > 30) {
        alert(`Здравствуйте, ${userName}!`);
    } else {
        alert(`Привет, ${userName}!`);
    }
}

userGreeting();