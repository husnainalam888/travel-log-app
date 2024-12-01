import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import StackNavigation from './src/navigation/StackNavigation';
import Colors from './src/theme/Colors';
import LoadingModal from './src/components/LoadingModal';
import {useMMKVStorage} from 'react-native-mmkv-storage';
import {GLOBAL_STORAGE} from './src/utils/storage';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/components/ToastConfigs';
// import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const [loading, setLoading] = useMMKVStorage(
    'LOADING',
    GLOBAL_STORAGE,
    false,
  );
  useEffect(() => {
    // SplashScreen?.hide();
  }, []);

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StackNavigation />
      <LoadingModal visible={loading} setVisible={setLoading} />
      <Toast position="bottom" config={toastConfig} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
});
