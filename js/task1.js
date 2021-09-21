
// создаем функцию delay, которая возвращает промис
// нужно создать промис, который перейдет в состояние resolved в этой функции
// промис переходит в resolved через ***мс, которые передали в параметр функции


export default function delay(ms) {
    const time = new Promise(resolve => {
        setTimeout(() => {
            resolve(ms);
        }, ms)
    });

    return time;
};

const logger = time => console.log(`Resolved after ${time}ms`);


delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
