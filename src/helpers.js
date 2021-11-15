export const checkBudget = (budget, remaining) => {
  let className;
  if( remaining <= 0.25 * budget) {
    className = "alert-danger";
  } else if (remaining <= 0.5 * budget) {
    className = "alert-warning";
  } else {
    className = "alert-success";
  }
  return className;
}

export const titleRemaining = (budget, remaining) => {
  let title;
  if( remaining <= 0.25 * budget) {
    title = "Danger: Remaining is less than or equal to a quarter of the budget";
  } else if (remaining <= 0.5 * budget) {
    title = "Warning: Remaining is less than or equal to half of the budget";
  } else {
    title = "Remaining is greater than half of the budget";
  }
  return title;
}