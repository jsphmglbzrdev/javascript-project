const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

const todoData = JSON.parse(localStorage.getItem('todoData')) || [];


const storeData = () => {
	const todoText = todoInput.value.trim();

	const data = {
		todo : todoText,
		timestamp : new Date().toISOString()
	};
	todoData.push(data)
	localStorage.setItem('todoData', JSON.stringify(todoData));

	renderData();
}

const renderData = () => {
	todoList.innerHTML = '';

	todoData.forEach((item, index) => {
		const listItem = document.createElement('li');

		listItem.innerHTML = `${item.todo}`
		todoList.appendChild(listItem);

	})
}

addButton.addEventListener('click', () => {
	storeData();
	todoInput.value = '';
});

console.log(todoData);


renderData()
