function convertAge(years, months, days) {
  const daysYears = 365;
  const daysMonths = 30;

  //Calcula a idade em dias a partir dos anos
  const ageDaysFromYears = years * daysYears;
  //calcula a idade em dias a partiri dos meses
  const ageDaysFromMonth = months * daysMonths;
  //Soma a idade em dias de cada expressão para obter a idade total em dias
  const totalDays = ageDaysFromMonth + ageDaysFromYears + days;

  console.log("Idade total em dias: " + totalDays);
}

convertAge(31, 3, 15);
