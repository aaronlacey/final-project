// Variables
let expenses = 0
let income = 0
let available = 0


//---------Query Selectors---------//
document.querySelector('#add_income').addEventListener('click', addIncome)
document.querySelector('#add_income').addEventListener('click', availableFunds)
let incomeList = document.querySelector('.incomeList')
let expensesList = document.querySelector('.expensesList')
document.querySelector('#add_expense').addEventListener('click', addExpense)
document.querySelector('#add_expense').addEventListener('click', availableFunds)



//-----------------Functions-----------------//

function addIncome() {
    let amount = document.querySelector('#amount').value
    income += parseInt(amount)
    console.log(income);
    console.log('description', description.value)
    let listElement = document.createElement("li")
    listElement.innerText = description.value
    incomeList.appendChild(listElement)

    document.querySelector('#earned__symbol').innerHTML = `$${income}`
    return income
}


function addExpense() {
    let amount = document.querySelector('#amount').value
    if (parseInt(amount) < 0) {
        expenses = expenses - parseInt(amount)

    } else {
        expenses = expenses + parseInt(amount)

    }
    let listElement = document.createElement("li")
    listElement.innerText = description.value
    expensesList.appendChild(listElement)
    document.querySelector('#spent__symbol').innerHTML = `$${expenses}`
    console.log(expenses);
    return expenses
}


function availableFunds() {
    available = income - expenses

    document.querySelector('.amountLeft').innerHTML = `$${available}`
    console.log("available", available)
    return available
}



