import Toast from 'react-native-toast-message';
import {getUser, removeLoading, setLoading} from '../utils/storage';
const TAG = 'api: index.js';
const BASE_URL = 'http://192.168.88.115:5000';
const postRequest = async (endpoint, data = {}, headers = {}) => {
  const user = getUser();
  console.log('user : token', user);
  if (user) {
    headers.Authorization = `Bearer ${user.token}`;
  }
  try {
    setLoading();
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(data),
    });
    removeLoading();
    if (!response.ok && response.status === 404) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to process the request.');
    }

    return await response.json();
  } catch (error) {
    removeLoading();
    console.error('Error in postRequest:', error.message);
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: error.message,
    });
    throw error;
  }
};

const apiCall = async ({endoint, data, setResponse, method = 'POST'}) => {
  try {
    const response = await postRequest(endoint, data);
    if (response.status) {
      setResponse(response.data);
    } else {
      if (response.message) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: response.message,
        });
      }
    }
  } catch (e) {
    console.error(TAG, 'loginApi : error :', e);
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Something went wrong! ',
    });
  }
};

export {postRequest, apiCall};
