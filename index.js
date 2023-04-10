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
    let i = n;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}