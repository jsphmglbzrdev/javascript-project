// Task 1
function Animal(sound) {
	this.sound = sound;
	
}

Animal.prototype.makeSound = function(){
	console.log(this.sound)
}

function Dog(){
	Animal.call(this, "Woof Woof"); // Inherit sound property
}

const newDog = new Dog();
console.log(newDog()); // Output: Woof Woof

function Dog() {}

// Task 2
function Shape(color) {
}

function Rectangle(width, height, color) {
}
