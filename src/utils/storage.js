import {MMKVLoader} from 'react-native-mmkv-storage';

const GLOBAL_STORAGE = new MMKVLoader().initialize();
const getUser = () => {
  return GLOBAL_STORAGE.getMap('USER');
};
const storeUser = user => {
  GLOBAL_STORAGE.setMap('USER', user);
};
const setLoading = () => {
  GLOBAL_STORAGE.setBool('LOADING', true);
};
const removeLoading = () => {
  GLOBAL_STORAGE.setBool('LOADING', false);
};
export {GLOBAL_STORAGE, getUser, storeUser, setLoading, removeLoading};
