export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validateNumber = (value) => {
  return !isNaN(value) && value > 0;
};

export const validateAmount = (amount) => {
  return !isNaN(amount) && parseFloat(amount) > 0;
};

export const validateRequired = (value) => {
  return value !== null && value !== undefined && value !== '';
};