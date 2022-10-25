const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const dragonDamage = (dragon) => {
return Math.floor((Math.random() * dragon) + 15)
  }
dragonDamage(dragon.strength)

const warriorDamage = (warrior, weaponDmg) => {
    return Math.floor((Math.random() * warrior) + weaponDmg * warrior)
}
console.log(warriorDamage(warrior.strength,warrior.weaponDmg))

const manaMago = () => {

}