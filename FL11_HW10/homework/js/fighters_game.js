class Fighter {

  constructor(fighterData) {
    this._name = fighterData.name;
    this._damage = fighterData.damage;
    this._hp = fighterData.hp;
    this._agility = fighterData.agility;

    this.min = 0;
    this.max = 101;

    this.wins = 0;
    this.losses = 0;

    this.currentHealth = this._hp;
  }

  getName() {
    return this._name;
  }

  getDamage() {
    return this._damage;
  }

  getAgility() {
    return this._agility;
  }

  getHealth() {
    return this.currentHealth;
  }

  attack(opponent) {
    let attackProbability = Math.floor(Math.random() * (this.max - this.min)) + this.min;
    if (opponent.getAgility() < attackProbability) {
      opponent.dealDamage(this._damage);
      console.log(`${this._name} make ${this._damage} damage to ${opponent.getName()}`);
    } else {
      console.log(`${this._name} attack missed`);
    }
  }

  logCombatHistory() {
    console.log(`Name: ${this._name}, Wins: ${this.wins}, Losses: ${this.losses}`);
  }

  heal(healingPoints) {
    let healing = this.currentHealth + healingPoints;
    if (healing < this._hp) {
      this.currentHealth += healingPoints;
    } else {
      this.currentHealth = this._hp;
    }
    return this.currentHealth;
  }

  dealDamage(damagePoints) {
    let damage = this.currentHealth - damagePoints;
    if (damage > 0) {
      this.currentHealth -= damagePoints;
    } else {
      this.currentHealth = 0;
    }
    return this.currentHealth;
  }

  addWin() {
    this.wins += 1;
  }

  addLoss() {
    this.losses += 1;
  }
}

function battle(fighter1, fighter2) {
  let game = false;
  if (fighter1.getHealth() === 0) {
    console.log(`${fighter1.getName()} is dead and can't fight.`);
  } else if (fighter2.getHealth() === 0) {
    console.log(`${fighter2.getName()} is dead and can't fight.`);
  } else {
    game = true;
  }

  if (game) {
    while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
      fighter1.attack(fighter2);
      fighter2.attack(fighter1);
      console.log(fighter1.getHealth(), fighter2.getHealth())
    }
    if (fighter1.getHealth() === 0) {
      fighter1.addLoss();
      fighter2.addWin();
    } else {
      fighter1.addWin();
      fighter2.addLoss();
    }
  }
}