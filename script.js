let expenseIndex = 1;

function addExpense() {
  const expensesContainer = document.getElementById("expensesContainer");

  const newExpenseItem = document.createElement("div");
  newExpenseItem.id = "expense" + expenseIndex;
  newExpenseItem.className = "expense-item";

  const newExpenseLabel = document.createElement("label");
  newExpenseLabel.htmlFor = "expenseLabel" + expenseIndex;
  newExpenseLabel.textContent = "Expense " + (expenseIndex + 1) + ":";

  const newExpenseLabelInput = document.createElement("input");
  newExpenseLabelInput.type = "text";
  newExpenseLabelInput.id = "expenseLabel" + expenseIndex;
  newExpenseLabelInput.className = "expense-label";
  newExpenseLabelInput.required = true;

  const newExpenseAmountInput = document.createElement("input");
  newExpenseAmountInput.type = "number";
  newExpenseAmountInput.id = "amount" + expenseIndex;
  newExpenseAmountInput.className = "expense-amount";
  newExpenseAmountInput.required = true;

  const newRemoveExpenseBtn = document.createElement("button");
  newRemoveExpenseBtn.type = "button";
  newRemoveExpenseBtn.className = "remove-expense-btn";
  newRemoveExpenseBtn.textContent = "Remove Expense";
  newRemoveExpenseBtn.addEventListener("click", function() {
    newExpenseItem.remove();
  });

  newExpenseItem.appendChild(newExpenseLabel);
  newExpenseItem.appendChild(newExpenseLabelInput);
  newExpenseItem.appendChild(newExpenseAmountInput);
  newExpenseItem.appendChild(newRemoveExpenseBtn);

  expensesContainer.appendChild(newExpenseItem);

  expenseIndex++;
}

document.getElementById("addExpenseBtn").addEventListener("click", addExpense);

document.getElementById("calculateBtn").addEventListener("click", function(event) {
  event.preventDefault();

  const income = parseFloat(document.getElementById("income").value);

  const expenseLabels = document.querySelectorAll(".expense-label");
  const expenseAmounts = document.querySelectorAll(".expense-amount");

  let totalExpenses = 0;

  for (let i = 0; i < expenseLabels.length; i++) {
    const expenseAmount = parseFloat(expenseAmounts[i].value);

    if (!isNaN(expenseAmount)) {
      totalExpenses += expenseAmount;
    }
  }

  const savings = income - totalExpenses;
  const remaining = totalExpenses > income ? 0 : income - totalExpenses;

  document.getElementById("savings").textContent = "Savings: Rs" + savings.toFixed(2);
  document.getElementById("remaining").textContent = "Remaining: Rs" + remaining.toFixed(2);

  document.getElementById("result").style.display = "block";
});
