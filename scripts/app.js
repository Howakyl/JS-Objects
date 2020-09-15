

//1 Syntax
//const myObject = {
//  name: 'Kyle',
//  age: 23
// }
//The different parts of an object is made of:
//The object literal which is made a variable declaration,(const/let), followed by curly braces, which create the block for the object.
// Inside, the object has KEY VALUE PAIRS. These are a property (name: , age:) followed by a method. (Kyle, 23)
// The Pairs are separated by commas.

/////////////////////////////////////////////

// 2 Me 
// 1. 
// const me = {
//     name: 'Kyle',
//     age: 23,
//     email: 'kyle@foo.bar'
// };
// //2. done above ^
// //3.
// console.log(me.name);
// //4.
// me["age"] = 1000;
// //5.
// console.log(me.age);
// //6.
// me["place of residence"] = 'Seattle';
// //7.
// console.log(me["place of residence"])

/////////////////////////////////////////////

//3. Slimer

// const monster = {
//     name: "Slimer",
//     color: "greenish",
//     type: "plasm or ghost or something"
//  };

//  //1.
//  console.log(monster.name);
// //2.
// monster.type = 'creature';
// //3.
// monster.age = 6;
// //4.
// console.log(monster.type , monster.age);
// //5.
// console.log(`My name is ${monster.name}, and I'm a ${monster.color} ${monster.type}.`);

/////////////////////////////////////////////

//4. Ogres

// object containing the adventurer's info
const player = {
    name: 'adventurer',
    hitpoints: 10,
    attackValue: 2,
}

//object containing Ogre's info
const monster = {
    name: 'ogre',
    hitpoints: 10,
    attackValue: function () {
        let ogreAttack = Math.floor(Math.random() * 3 + 1);
        return ogreAttack;
    }
}


//Subtracks attack values from combatant's hitpoints
const battle = {
    ogreTurn: function () {
        monster.hitpoints -= player.attackValue;
        return monster.hitpoints;
    },
    playerTurn: function () {
        player.hitpoints -= monster.attackValue();
        return player.hitpoints;
    }
}
// console.log(battle.fight())
function battleCommence() {
    for (i =0; player.hitpoints >= 0 && monster.hitpoints >= 0; i++) {
        battle.playerTurn();
        console.log(`The adventurer attacks for ${player.attackValue} damage! The ogre's health is: ${monster.hitpoints} hitpoints.`)
        console.log(' ')
        if (monster.hitpoints <= 0) {
            console.log(`The ${monster.name}'s hitpoints have reached zero. The adventurer wins!!!!`)
            break;
        }
        battle.ogreTurn();
        if (player.hitpoints <= 0) {
            console.log('The adventurer\'s\ hitpoints have reached zero...the ' + monster.name + ' wins!')
            break;
        }
        console.log(`The ${monster.name} attacks for ${monster.attackValue()} damage! The adventurer's health is: ${player.hitpoints} hitpoints.`)
        console.log(' ')
    }
};
battleCommence();

/////////////////////////////////////////////
//Cat Combinator

//1). Mama Cat
// const cat1 = {
//     name: 'Fluffy',
//     breed: 'Russian-Blue',
//     age: 5
// };

// // console.log(cat1.age);
// // console.log(cat1.breed);

// //2). Papa Cat
// const cat2 = {
//     name: 'Bojack',
//     breed: 'Siamese',
//     age: 5
// };

// //3). Combine Cats!

// function combineCats (mama, papa) {
//     return cat3 = {
//         name: mama.name + papa.name,
//         age: 1,
//         breed: mama.breed +'-'+papa.breed
//     };
// }
// console.log(combineCats(cat1,cat2))

// //4). Cat brain bender
// console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));
