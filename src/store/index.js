import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRegistrationStore = defineStore('registration', () => {
  // Declare refs for the store
  const firstName = ref('');
  const lastName = ref('');
  const email = ref('');
  const password = ref('');
  const rePassword = ref('');

  // Action to set registration data
  const setRegistrationData = (data) => {
    firstName.value = data.firstName;
    lastName.value = data.lastName;
    email.value = data.email;
    password.value = data.password;
    rePassword.value = data.rePassword;
  };

  // Optional: Clear registration data
  const clearRegistrationData = () => {
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    password.value = '';
    rePassword.value = '';
  };

  return {
    firstName,
    lastName,
    email,
    password,
    rePassword,
    setRegistrationData,
    clearRegistrationData
  };
});