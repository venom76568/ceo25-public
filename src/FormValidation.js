// FormValidation.js
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const validatePhone = (phone) => {
    // Simple validation for a 10-digit phone number
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };
  
  export const validateForm = (formData) => {
    const { name, phone, email } = formData;
    const errors = {};
  
    if (!name || !phone || !email) {
      errors.message = 'All fields are required';
    }
  
    if (!validateEmail(email)) {
      errors.email = 'Email is not in proper format';
    }
  
    if (!validatePhone(phone)) {
      errors.phone = 'Phone number should be a 10-digit number';
    }
  
    return errors;
  };
  