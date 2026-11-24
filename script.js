
let expenses = [];

let form = document.getElementById("expenseForm");
let list = document.getElementById("expenseList");
let total = document.getElementById("totalAmount");
let filter = document.getElementById("categoryFilter");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("expenseName").value;
    let amount = Number(document.getElementById("expenseAmount").value);
    let category = document.getElementById("expenseCategory").value;

    let expense = {
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(expense);

    form.reset();

    showExpenses();
});

function showExpenses() {

    list.innerHTML = "";

    let sum = 0;

    for (let i = 0; i < expenses.length; i++) {

        sum = sum + expenses[i].amount;

        if (filter.value == "All" ||
            filter.value == expenses[i].category) {

            let item = document.createElement("p");

            item.textContent = expenses[i].name + " - ₹" +
                expenses[i].amount + " - " + expenses[i].category;

            list.appendChild(item);
        }
    }

    total.innerText = "₹" + sum.toFixed(2);
}

filter.addEventListener("change", showExpenses);
