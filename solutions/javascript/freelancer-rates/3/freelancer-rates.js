// @ts-check

export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

export function daysInBudget(budget, ratePerHour) {
  return Math.floor((budget / ratePerHour) / 8);
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let total = 0;
  const billableDays = 22;
  const hoursPerDay = 8
  
  const dailyRate = dayRate(ratePerHour);
  const discountedDays = Math.floor(numDays / billableDays) * billableDays;
  const regularDays = numDays % billableDays;

  total += dailyRate * discountedDays * (1 - discount);
  total += dailyRate * regularDays;

  return Math.ceil(total);
}
