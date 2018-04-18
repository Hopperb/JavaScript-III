/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several prototypes with their correct inheritance heirarchy.

  In this file you will be creating three prototypes: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the bottom of the page to test your classes.
  
  Each class has unique properites and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string 'Object was removed from the game.'
*/
  function GameObject(properties){
  this.createdAt = properties.createdAt;
  this.dimensions = properties.dimensions;
  this.destroy = function (){
    console.log(`Object was removed from the game`);
  };
}

// GameObject.prototype.destroy = () => {
//   console.log("work");
//}


// console.log(something);

// something.destroy();
/*
=== CharacterStats ===
* hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  //   * should inherit destroy() from GameObject's prototype
  // */
  function CharacterStats(properties){
  GameObject.call(this, properties);
  this.hp = properties.hp;
  this.name = properties.name;
  this.takeDamage = () => {
    console.log(`${this.name} took damage.`)
  }
}


// /*
//   === Humanoid ===
//   * faction
//   * weapons
//   * language
//   * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
//   * should inherit destroy() from GameObject through CharacterStats
//   * should inherit takeDamage() from CharacterStats
// */
function Humanoid(properties){
  CharacterStats.call(this, properties);
  this.faction = properties.faction;
  this.weapons = properties.weapons;
  this.language = properties.language;
  
}
let greet = () => {
  return(`${this.name}: offers a greeting in ${this.language}.`)
}

//let something = new GameObject({createdAt:"EA",  dimensions:[1,2,3]});
CharacterStats.prototype = Object.create(GameObject.prototype);
// let somethingElse = new CharacterStats({hp:10, name:"Brandon", createdAt:"EA"});
Humanoid.prototype = Object.create(CharacterStats.prototype, GameObject.prototype);
Humanoid.prototype.greet = greet;

// let somethingNew = new Humanoid({faction:"Forest Kingdom", language:"English", weapons:"sticks"})
// somethingNew.takeDamage();
// console.log(somethingNew.createdAt,somethingNew.destroy())

// /*
//   * Inheritance chain: Humanoid -> CharacterStats -> GameObject
//   * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
//   * Instances of CharacterStats should have all of the same properties as GameObject.
// */

// //Test you work by uncommenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  hp: 5,
  name: 'Bruce',
  faction: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Toungue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  hp: 15,
  name: 'Sir Mustachio',
  faction: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Toungue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: 'Lilith',
  faction: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.hp); // 15
console.log(mage.name); // Bruce
console.log(swordsman.faction); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villian and Hero classes that inherit from the Humanoid class.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!