import Toast from 'react-native-toast-message';
import {apiCall} from '.';

const validateSignUpInput = ({email, password, name}) => {
  if (!email || !password || !name) {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'All fields are required',
    });
    return false;
  }
  if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Invalid email',
    });
    return false;
  }
  if (password.length < 6) {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Password must be at least 6 characters',
    });
    return false;
  }
  return true;
};

const validateLoginInput = ({email, password}) => {
  if (!email || !password) {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'All fields are required',
    });
    return false;
  }

  return true;
};

const loginApi = async ({data, setResponse}) => {
  if (!validateLoginInput(data)) {
    return;
  }
  apiCall({endoint: 'auth/login', data, setResponse});
};

const signUpApi = async ({data, setResponse}) => {
  if (!validateSignUpInput(data)) {
    return;
  }
  apiCall({endoint: 'auth/signup', data, setResponse});
};

export {loginApi, signUpApi};
