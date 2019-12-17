let money, time;
function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpences() {
    for (let i = 0; i < 2; i++) {
        let a1 = prompt('Введите обязательную статью расходов в этом месяце', '');
        let b1 = prompt('Во сколько обойдется?', '');
        if ((typeof (a1) === 'string' && typeof (a1) != null && typeof (b1) != null && (a1) === '' && (b1) === '' && a1.length < 50)) {
            console.log("done");

            appData.expenses.a1 = b1;
        }

    }
}
chooseExpences();

function detectDayBudget() {                                            // Расчет дневного бюджета
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}


function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Это высокий уровень достатка!");
    } else {
        console.log("Произошла ошибка");
    }
}

function checkSavings () {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');

            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего дипозита:' + appData.monthIncome);
    }
}
checkSavings ();

function chooseOptExpenses() {
for (let i = 0; i < 3; i++) {
    let questionOptExpenses = prompt("Статья необязательных расходов?");
    appData.optionalExpenses[i] = questionOptExpenses;
    console.log(appData.optionalExpenses);
}
}


