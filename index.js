// Code your solutions in this file

function writeCards(names, event) {
    let guests = [];
    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        guests.push(`Thank you, ${name}, for the wonderful ${event} gift!`);
    }
    return guests;
}

function countDown(n) {
    for (let i = n; i >= 0; i--) {
        console.log(i);
    }
}