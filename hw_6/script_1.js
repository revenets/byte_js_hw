let userName;
let userSurname;
let userPassword;

const isPasswordValid = (password) => {
	let upperCount = 0;
	let lowerCount = 0;
	let numberCount = 0;

	for ( let i = 0; i < password.length; i++) {
		
		let upperChar;
		let lowerChar;
		let numberChar;

		if (Number(password[i])) {
			numberChar = password[i];
			numberCount++;			
		} else {	
			upperChar = password[i].toUpperCase();
			lowerChar = password[i].toLowerCase();
		}

		if (password[i] === upperChar) {
			upperCount++;
		} else if (password[i] === lowerChar) {
			lowerCount++;
		}
	}
	return (password.length >= 6 && upperCount && lowerCount && numberCount) ? true : false;
}

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

do {
    userName = prompt('Enter your Name: ');
    userSurname = prompt('Enter your Surname: ');
} while (!userName.length || !userSurname.length);

do {
	userPassword = prompt('Enter your password: ');
} while (!isPasswordValid(userPassword));


alert(formatUserCall(userName, userSurname));