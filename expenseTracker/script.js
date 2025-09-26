const expenseName = document.getElementById("expense-name");
const expenseAmount = document.getElementById("expense-amount");
const expenseList = document.getElementById("expense-list");
const totalExpenses = document.getElementById("total-expense");
const noExpenseMessage = document.getElementById("no-expense-message");
const loaderContainer = document.getElementById("loader-container");
const form = document.getElementById("expense-form");

let expenses = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleUserInput();

  loaderContainer.classList.remove("hidden");
  loaderContainer.classList.add("flex");

  setTimeout(() => {
    loaderContainer.classList.add("hidden");
    loaderContainer.classList.remove("flex");

    renderExpenses();
    form.reset();
  }, 2000); // adjust delay as needed
});

function handleUserInput() {
  const name = expenseName.value;
  const trimmedName = name.trim();
  const expensesAmount = expenseAmount.value;

  const data = {
    date: new Date().getDate(),
    trimmedName,
    expensesAmount,
  };

  expenses.push(data);

	localStorage.setItem('expenses', JSON.stringify(expenses));
  console.log(expenses);
}

function handleTotalExpense() {
  totalExpenses.innerText = `Total: $${expenses
    .reduce((acc, curr) => acc + Number(curr.expensesAmount), 0)
    .toFixed(2)}`;
}

function renderExpenses() {
  expenseList.innerHTML = "";

  if (expenses.length === 0) {
    noExpenseMessage.style.display = "block";
    return;
  } else {
    noExpenseMessage.style.display = "none";
  }

  expenses.forEach((expense, index) => {
    return (expenseList.innerHTML += `
	<div class="grid grid-cols-3 w-full bg-gray-900 py-2 rounded-md items-center text-center">
  <div>${expense.trimmedName}</div>
  <div>$${expense.expensesAmount}</div>
  <div>
    <button class="bg-red-600 py-2 px-3 rounded-md" onclick="deleteExpense(${index})">
      Delete
    </button>
  </div>
</div>

		`);
  });

  handleTotalExpense();
}

function deleteExpense(index) {
	
	loaderContainer.classList.remove("hidden");
  loaderContainer.classList.add("flex");

  setTimeout(() => {
    loaderContainer.classList.add("hidden");
    loaderContainer.classList.remove("flex");

  }, 2000); // adjust delay as needed

  const expenseDelete = expenses.filter((_, i) => i !== index);
	localStorage.setItem('expenses', JSON.stringify(expenseDelete));
  totalExpenses.innerText = `Total: $${expenseDelete
    .reduce((acc, curr) => acc + Number(curr.expensesAmount), 0)
    .toFixed(2)}`;

	window.location.reload()
  renderExpenses();
	
}

renderExpenses();
