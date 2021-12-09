let name;
let attempt = 3;
do {
    name = prompt("Enter your name");
    attempt--;
    console.log(`name`, name);
    !name ? alert(`${attempt} attempts left`) : alert("Welcome");
} while (!name && attempt > 0);
