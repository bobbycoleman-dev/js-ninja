class Ninja {
	constructor(name, health = 90, speed = 3, strength = 3) {
		this.name = name;
		this.health = health;
		this.speed = speed;
		this.strength = strength;
	}

	sayName() {
		console.log(this.name);
	}

	showStats() {
		console.log(`Name: ${this.name}\nHealth: ${this.health}\nSpeed: ${this.speed}\nStrength: ${this.strength}`);
	}

	drinkSake() {
		this.health += 10;
		console.log(`${this.name} drank Sake. +10 health. Health: ${this.health}`);
	}
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
