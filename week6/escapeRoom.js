const readline = require('readline-sync');

const name = readline.question('What is your name?');
const welcome = `Welcome ${name} to BobbyWorld's Escape Room Simulation Game!`;
console.log(welcome);

readline.keyInPause(`
You are now in the Escape Room, ${name}, 
Find your way out or DIE
`);
readline.keyInPause(`
Directions: Inside this escape room you will find a key. This key will unlock a door. 
You must choose the right sequence of actions to escape the room and SURVIVE.
`);

let isAlive = true;
let isDoorOpen = false;
let hasKey = false;

while (isAlive == true && isDoorOpen == false) {
    const chooseOption = readline.keyIn(`
    Choose number to pick an option : 
    1. Put your hand in the hole
    2. Find the key
    3. Open the door
    `, {limit: `$<1-3>`});

    if (chooseOption == 1) {
        console.log(`
        Wrong option!, ${name}, you have DIED...
        `);
        isAlive = false;
    } else if (chooseOption == 2 && hasKey == false) {
        console.log(`
        SCORE... you have aquired the key!
        
        What's next??
        `);
        hasKey = true;
    } else if (chooseOption == 2 && hasKey == true) {
        console.log(`
        You have already acquired the key. Use the key to unluck the door to escape the simulation.
        
        What's next??
        `);
    } else if (chooseOption == 3 && hasKey == false) {
        console.log(`
        The door is locked. You must find the key. 
        
        What's next??
        `);
    } else if (chooseOption == 3 && hasKey == true) {
        console.log(`
        Amazing job, ${name}, you acquired the key and was able to open the door!
        You acquired the key and escaped the game simulation! You survived the escape room! Thanks for playing BobbyWorld's Escape Room Simulation Game!
        
        Thanks for participating!!!
        `);
        isDoorOpen = true;
    }
}
