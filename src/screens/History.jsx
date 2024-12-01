import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../components/Header';
import SVG_XMLs from '../svgs/SVGs';
import Input from '../components/Input';
import HistoryItemList from '../components/HistoryItemList';
import GradientTextButton from '../components/GradientButton';
import {apiCall} from '../api';
import {useMMKVStorage} from 'react-native-mmkv-storage';
import {GLOBAL_STORAGE} from '../utils/storage';

const History = () => {
  const [data, setData] = useMMKVStorage('JOURNEYS', GLOBAL_STORAGE, []);
  useEffect(() => {
    apiCall({
      endoint: 'journey/all',
      setResponse: data => {
        setData(data);
      },
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../images/radial_gradient_bg.png')}
        style={{flex: 1, padding: 20}}>
        <Header title={'Journey History'} startIcon={SVG_XMLs.back} />
        <HistoryItemList data={data} />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  Text: {
    color: 'white',
    marginVertical: 10,
    alignSelf: 'center',
    fontSize: 14,
  },
});
