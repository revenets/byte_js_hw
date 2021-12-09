let name;
for (let i = 3; i > 0; i--) {
    name = prompt("Enter your name: ");
    if (!name && name !== null) {
        alert(`${i - 1} attemts left`);
        continue;
    } else {
        console.log(name);
        break;
    }
}
