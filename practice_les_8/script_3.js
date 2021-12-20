const getMinMax = (arr) => {
    const res = {
        min: arr[0],
        max: arr[0],
    };

    for (let num of arr) {
        if (num < res.min) {
            res.min = num;
        }

        if (num > res.max) {
            res.max = num;
        }
    }

    return res;
};

const queueTime = (customers, pointsQuantity) => {
    if (!customers.length) {
        return 0
    }

    const cashPoints = [];
    const restQueue = [];

    for (let i = 0; i < customers.length; i++) {
        const currentCustomer = customers[i];
        if (i < pointsQuantity) {
            cashPoints.push(currentCustomer);
        } else {
            restQueue.push(currentCustomer);
        }
    }

    for (let i = 0; i < restQueue.length; i++) {
        const shortestQueue = getMinMax(cashPoints).min;

        for (let j = 0; j < cashPoints.length; j++) {
            if (cashPoints[j] === shortestQueue) {
                cashPoints[j] += restQueue[i];
            }
        }
    }

    return getMinMax(cashPoints).max;
}

// const time = queueTime([10, 2, 3, 3], 2);
const time = queueTime([5, 3, 4], 2);
console.log(time);