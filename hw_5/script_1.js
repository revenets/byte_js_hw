function getPrimeNumber() {
    let start_num = Number(prompt("Enter start number"));
    let end_num = Number(prompt("Enter end number"));

    for (let i = start_num; i <= end_num; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }

        if (i > 1 && flag == 0) {
            console.log(i);
        }
    }
}

getPrimeNumber();
