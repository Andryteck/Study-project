let money = +prompt ("Ваш бюджет на месяц?", '');
let time = prompt ("Введите дату в формате YYYY-MM-DD", '');
// let a1 = prompt('Введите обязательную статью расходов в этом месяце', '');
// let a2 = prompt('Введите обязательную статью расходов в этом месяце', '');
// let b1 = prompt('Во сколько обойдется?', '');
// let b2 = prompt('Во сколько обойдется?', '');


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: 'false',
};

for (let i = 0; i < 2; i++) {
    let a1 = prompt('Введите обязательную статью расходов в этом месяце', '');
     let b1 = prompt('Во сколько обойдется?', '');
     if ((typeof(a1) === 'string' && typeof(a1) != null && typeof(b1) !=null && (a1)=== '' && (b1)=== '' && a1.length < 50)) {
        console.log ("done");

        appData.expenses.a1 = b1;
} else {
    console.log ("bad result");
  i--;  
}
}
appData.moneyPerDay = appData.budget / 30;


alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");


if (appData.moneyPerDay < 100) {
    console.log ("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ("Это средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
    console.log ("Это высокий уровень достатка!");
} else {
    console.log ("Произошла ошибка");
}

