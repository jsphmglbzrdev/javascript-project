

/** Closures
function increment(){
	let count = 0;

	return function(){
		return ++count
	}
	
	let counter = increment();
	console.log(counter());
}
*/

/**Promises
function getData(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let success = true;
			if(success){
				resolve("Data fetched successfully!")
			}else{
				reject("Error fetching data.")
			}
		}, 3000)
	})
}

getData()
	.then((data) => {
		console.log(data)
	})
	.catch((error) => {
		console.error(error)
	})
*/

/**	Prototype and this keyword

function Person(name, age){
	this.name = name;
	this.age = age;
	
}

Person.prototype.greet = function(){
	console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`)
}

let myName = new Person("John", 30)
myName.greet();

*/


// function processData(){

// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			return resolve({name : "Joseph", url : "www.youtube.com"})
// 		}, 3000)
// 	})

// }
// async function getData(){
// 	try{
// 		console.log("Fetching data....")
// 		const data = await processData();
// 		console.log("Data : ", data)
// 		console.log("Data fetched successfully")
// 	}catch(err){
// 		console.log("There must be something wrong", err)
// 	}

// }
// getData()

function simulateAsyncTask() {
	console.log("Task started");
	setTimeout(() => {
		console.log("Task finished");

	}, 2000)
	}
function simulateMultipleTasks() {

	for(let i =1; i<=3; i++){
		setTimeout(() => {
			console.log(`Task ${i} finished`);
		}, i * 1000)
	}
}
function fetchDataWithCallback(callback) {
	setTimeout(() => {
		console.log("fetched");
		callback("Fetched data")
	}, 2000)
}
simulateAsyncTask();
simulateMultipleTasks();
fetchDataWithCallback((result) => {
	console.log(result);
})