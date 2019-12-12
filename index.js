let money = prompt("Ваш бюджет на месяц?", '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');
let a1 = prompt('Введите обязательную статью расходов в этом месяце', '');
let a2 = prompt('Введите обязательную статью расходов в этом месяце', '');
let b1 = prompt('Во сколько обойдется?', '');
let b2 = prompt('Во сколько обойдется?', '');


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: 'false',
};
appData.expenses.a1 = b1;
appData.expenses.a2 = b2;


alert(appData.budget / 30);

