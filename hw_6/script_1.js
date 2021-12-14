let userName;
let userSurname;
let userPassword;

do {
    userName = prompt('Enter your Name: ');
    userSurname = prompt('Enter your Surname: ');
} while (!userName.length || !userSurname.length);


const formatUserCall = (name, surname) => {
    let formatName = "";
    let formatSurname = "";

    for (let i=0; i < name.length; i++){
        if (i === 0) {
            formatName += name[i].toUpperCase();
        } else {
            formatName += name[i].toLowerCase();
        }
    }
    
    for (let i=0; i < surname.length; i++){
        if (i === 0) {
            formatSurname += surname[i].toUpperCase();
        } else {
            formatSurname += surname[i].toLowerCase();
        }
    }
    
    return `${formatName} ${formatSurname}`;
}


console.log(formatUserCall(userName, userSurname));
