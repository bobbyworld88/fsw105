const readlineSync = require("readline-sync");

const name = readlineSync.question(
  "Welcome, Player!!! What's your name? "
);

readlineSync.keyInPause(`
 ${name} You have now been teleported to 1888 to Edo, Japan is run by ninjas during this era.
You are transported to this era as a rogue ninja and landed in town square. You need to dash to the castle to get back home.  
`);
readlineSync.keyInPause(`
When you teleported, you jumped out of the teleport device and hurt yourself. You are now down to 70 from 100 . If you can defeat the ninjas you can receive awards.
`);
readlineSync.keyInPause(`
You will need to get to the house and get the spare diamond to teleport back to your present time. Good Luck!  
`);
const enemies = ["gold ninja", "red ninja", "black ninja", "pink ninja"];
const items = [
  "sake",
  " a sword",
  "a ninja star",
  "ninja suit",
  "a water",
  "bread",
  "nun chucks",
];
let inventory = [];
let healthPoints = 70;
const actions = ["Print Inventory", "Dash", "Exit Game"];

function game() {
  let attackPower = Math.floor(Math.random() * (50 - 5) + 1) + 5;
  let enemyAttackPower = Math.floor(Math.random() * (40 - 5) + 1) + 5;
  let enemyHealth = Math.floor(Math.random() * (80 - 40 + 1)) + 40;
  let enemy = enemies[Math.floor(Math.random() * enemies.length)];
  const enemyOptions = ["Slash", "Hide"];
  let newItem = items[Math.floor(Math.random() * items.length)];

  while (healthPoints > 0) {
    const choose = readlineSync.keyInSelect(
      actions,
      `
        Player choose your next move!
        `
    );

    if (actions[choose] == "Dash") {
      let drive = Math.random();
      if (drive > 0.3) {
        let findHouse = Math.random();
        if (findHouse == 0.7) {
          console.log(`
                    Excellent work ${name}! You located the castle. You have acquired the diamond to open the secret room to teleport home.
                    Great Job!`);
          healthPoints = 0;
        } else {
          console.log(`
                    Dashing...
                    You have to keep moving what do you want to do next? 
                    `);
        }
      } else if (drive <= 0.3) {
        console.log(`
                ALERT!! ${enemy}!!! 
                Ninja health is ${enemyHealth}. 
                Your health is ${healthPoints}.
                `);
        while (healthPoints > 0 && enemyHealth > 0) {
          const slashOrAttack = readlineSync.keyInSelect(
            enemyOptions,
            `
                    Choose your next move!!!
                    `
          );
          if (enemyOptions[slashOrAttack] == "Run") {
            let run = Math.random();
            if (run >= 0.5) {
              console.log(`
                            You ran away :(
                            `);
              enemy = enemies[Math.floor(Math.random() * enemies.length)];
              enemyHealth = Math.floor(Math.random() * (80 - 40 + 1)) + 40;
              break;
            } else if (run < 0.5) {
              healthPoints = healthPoints - enemyAttackPower;
              console.log(`
                            In your escape ${enemy} was able to sneak attack with ${enemyAttackPower}. 
                            `);
              if (healthPoints > 0) {
                console.log(`
                                Player your health is now ${healthPoints}. 
                                `);
              } else if (healthPoints <= 0) {
                console.log(`
                                Player Your health has reached 0.
                                unfortunately you lost, ${name},
                                you were killed by ${enemy}. 
                                `);
              }
              enemy = enemies[Math.floor(Math.random() * enemies.length)];
              enemyHealth = Math.floor(Math.random() * (70 - 40 + 1)) + 40;
              break;
            }
          } else if (enemyOptions[slashOrAttack] == "Slash") {
            enemyHealth = enemyHealth - attackPower;
            console.log(`
                        Slash ${enemy} with ${attackPower} attack power. 
                        `);
            if (enemyHealth <= 0) {
              inventory.push(newItem);
              healthPoints = healthPoints + 20;
              console.log(`
                            You killed the ${enemy}!!!
                            You acquired ${newItem} for inventory and received 10 points.
                            `);
              enemyHealth = Math.floor(Math.random() * (70 - 40 + 1)) + 40;
              enemy = enemies[Math.floor(Math.random() * enemies.length)];
              newItem = items[Math.floor(Math.random() * items.length)];
              break;
            } else {
              healthPoints = healthPoints - enemyAttackPower;
              console.log(`
                             ${enemy} hit you with ${enemyAttackPower} attack power. 
                            `);
              if (healthPoints > 0) {
                console.log(`
                                Your health is now ${healthPoints}. 
                                `);
                attackPower = Math.floor(Math.random() * (40 - 5) + 1) + 5;
                enemyAttackPower = Math.floor(Math.random() * (30 - 5) + 1) + 5;
              } else if (healthPoints <= 0) {
                console.log(`
                                Player Your health has reached 0.
                                unfortunately you lost, ${name},
                                you were killed by ${enemy}.
                                `);
              }
            }
          }
        }
      }
    } else if (actions[choose] == "Print Inventory") {
      console.log(`
            Name: ${name}
            Health Points: ${healthPoints}
            Inventory: ${inventory}
            `);
    } else {
      console.log(`
            Thanks for playing! 
            `);
      healthPoints = 0;
    }
  }
}
game();
