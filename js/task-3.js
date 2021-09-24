


const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = transaction => {
    const delay = randomIntegerFromInterval(200, 500);

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const canProcess = Math.random() > 0.3;

            if (canProcess) {
                resolve({ transaction, delay });
            } else {
                reject(new Error(`Error processing transaction ${transaction.id}. Please try again later.`));
            }
        }, delay);
    });

    return promise;
};

const logSuccess = ({ transaction, delay } = {}) => {
    console.log(`Transaction ${transaction.id} processed in ${delay}ms`);
};

makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(console.warn);
makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(console.warn);
makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(console.warn);
makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(console.warn);
