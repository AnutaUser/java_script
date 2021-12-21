// let newDay = 0;
//
// function wakeUp (alarmClock, callback) {
//     setTimeout(() => {
//         if (alarmClock) {
//             newDay = 'A new day begins!';
//             callback(null, newDay);
//             return;
//         }
//         callback('overslept', null)
//     }, 1000);
// }
//
// function washYourself(water, callback) {
//     setTimeout(() => {
//         if (water) {
//             callback(null, 'Take a shower.');
//             return;
//         }
//         callback('No water', null)
//     }, 500);
// }
//
// function toEat(food, callback) {
//     setTimeout(() => {
//         if (food) {
//             callback(null, 'Bon appetit');
//             return;
//         }
//         callback('No food', null);
//     }, 2000);
//
// }
//
// function goWork(callback) {
//     setTimeout(() =>{
//         return callback(null, 'Working oll day.');
//     }, 5000);
// }
//
// function playWithDaughter(callback) {
//     setTimeout(() => {
//         return callback(null, 'Play games, read.');
//     }, 3000);
// }
//
// function makeSupper(callback) {
//     setTimeout(() => {
//         return callback(null, 'Cooking.');
//     }, 2000);
// }
//
// function listenLecture(callback) {
//     setTimeout(() => {
//         return callback(null, 'Lecture from Sergio!!!');
//     }, 4000);
// }
//
// function prepareForSleep(callback) {
//     setTimeout(() => {
//         return callback(null, 'Good night, sweet dreams))');
//     }, 1000);
// }
//
// wakeUp(true, (e, goodMorning) => {
//     if (e) {
//         console.error('Olala', e);
//         return;
//     }
//     console.log(goodMorning);
//
//     washYourself(true, (e, douche) => {
//         if (e) {
//             console.error(e, 'We will stink((');
//             return;
//         }
//         console.log(douche);
//
//         toEat(true, (e, eating) => {
//             if (e) {
//                 console.error(e, 'Go to the shop.');
//                 return;
//             }
//             console.log(eating);
//
//             goWork((e, completeTasks) => {
//                 if (e) {
//                     console.error(e);
//                     return;
//                 }
//                 console.log(completeTasks);
//
//                 toEat (true, (e, eating) => {
//                     if (e) {
//                         console.error(e, 'Sit on a diet');
//                         return;
//                     }
//                     console.log(eating);
//
//                     playWithDaughter((e, play) => {
//                         if (e) {
//                             console.error(e, 'O no!');
//                         }
//                         console.log(play);
//                         makeSupper((e, cook) => {
//                             if (e) {
//                                 console.error(e, 'All hungry');
//                             }
//                             console.log(cook);
//                             listenLecture((e, education) => {
//                                 if (e) {
//                                     console.error(e, 'No internet');
//                                 }
//                                 console.log(education);
//
//                                 prepareForSleep((e, prepare) => {
//                                     if (e) {
//                                         console.error(e, 'Something go wrong');
//                                     }
//                                     console.log(prepare);
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// });

let newDay = 0;

function wakeUp (alarmClock) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (alarmClock) {
            newDay = 'A new day begins!';
            resolve(newDay);
        }
        reject('Overslept');
    }, 1000);
    });
}

function washYourself(water) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (water) {
            resolve('Take a shower.');
        }
        reject('No water');
    }, 500);
    });
}

function toEat(food) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (food) {
            resolve('Bon appetit');
            return;
        }
        reject('No food');
    }, 2000);
    });
}

function goWork() {
    return new Promise(resolve => {
    setTimeout(() =>{
        resolve('Working oll day.');
    }, 5000);
    });
}

function playWithDaughter() {
    return new Promise(resolve => {
    setTimeout(() => {
        resolve('Play games, read.');
    }, 3000);
    });
}

function makeSupper() {
    return new Promise(resolve => {
    setTimeout(() => {
        resolve('Cooking.');
    }, 2000);
    });
}

function listenLecture() {
    return new Promise(resolve => {
    setTimeout(() => {
        resolve('Lecture from Sergio!!!');
    }, 4000);
    });
}

function prepareForSleep() {
    return new Promise(resolve => {
    setTimeout(() => {
        resolve('Good night, sweet dreams))');
    }, 1000);
    });
}

// wakeUp(true)
//     .then(morning => {
//         console.log(morning)
//         return washYourself(true);
//     })
//
//     .then(water => {
//         console.log(water);
//         return toEat(false);
//     })
//
//     .then(breakfast => {
//         console.log(breakfast);
//         return goWork();
//     })
//
//     .then(workWorkWork => {
//         console.log(workWorkWork);
//         return toEat(true);
//     })
//
//     .then(dinner => {
//         console.log(dinner);
//         return playWithDaughter();
//     })
//
//     .then(plying => {
//         console.log(plying);
//         return makeSupper();
//     })
//
//     .then(cooking => {
//         console.log(cooking);
//         return listenLecture();
//     })
//
//     .then(studing => {
//         console.log(studing);
//         return prepareForSleep();
//     })
//
//     .then(sleep => {
//         console.log(sleep);
//     })
//
//         .catch(e => {
//         console.error(e);
//     })

async function oneOfDays() {
    try{
        const morning = await wakeUp(true);
        console.log(morning);

        const washing = await washYourself();
        console.log(washing);

        const breakfast = await toEat();
        console.log(breakfast);
    }catch (e) {
        console.info(e);
    }

        const workWorkWork = await goWork();
        console.log(workWorkWork);

    try {
        const dinner = await toEat(true);
        console.log(dinner);
    }catch (e) {
        console.info(e);
    }

        const daughter = await playWithDaughter();
        console.log(daughter);

        const cook = await makeSupper(true);
        console.log(cook);

        const study = await listenLecture();
        console.log(study);

        const goodNight = await prepareForSleep();
        console.log(goodNight);
}

oneOfDays();