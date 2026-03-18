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
  
  const dayRate = (ratePerHour * hoursPerDay);
  const discountedDays = Math.floor(numDays / billableDays) * billableDays;
  const regularDays = numDays % billableDays;

  total += dayRate * discountedDays * (1 - discount);
  total += dayRate * regularDays;

  return Math.ceil(total);
}
