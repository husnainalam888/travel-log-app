import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {SvgFromXml} from 'react-native-svg';
import SVG_XMLs from '../svgs/SVGs';
import GradientTextButton from '../components/GradientButton';
import {useMMKVStorage} from 'react-native-mmkv-storage';
import {GLOBAL_STORAGE} from '../utils/storage';

const OnBoardingScreen = ({navigation}) => {
  const [user, setUser] = useMMKVStorage('USER', GLOBAL_STORAGE, {});
  useEffect(() => {
    if (user?.token) {
      navigation.replace('dashboard');
    }
  });

  const onGetStarted = () => {
    navigation.replace('signUp');
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../images/on_boarding.png')}
          style={styles.image}
        />
      </View>
      <LinearGradient
        colors={['#050507', '#05050700']}
        start={{x: 0.6, y: 0.2}}
        end={{x: 0.6, y: 0}}
        locations={[0, 1]}
        style={styles.gradient}></LinearGradient>
      <SvgFromXml
        xml={SVG_XMLs.noise_overlay}
        height={Dimensions.get('window').height}
        width={Dimensions.get('window').width}
        style={styles.noise_overlay}
      />
      <View style={styles.subContainer}>
        <View style={{flex: 0.6}} />
        <View style={{flex: 0.5, alignItems: 'center'}}>
          <View style={styles.content}>
            <View style={styles.row}>
              <SvgFromXml xml={SVG_XMLs.where2_logo} />
              <Text style={styles.logo}>Travel Logger</Text>
            </View>
            <View style={{gap: 10}}>
              <Text style={styles.heading}>Track Your Adventures</Text>
              <Text style={styles.text}>
                Effortlessly log your journeys, track distances, and relive your
                travel memories.
              </Text>
            </View>
            <GradientTextButton
              title={'Get Started'}
              onPress={onGetStarted}
              style={{marginHorizontal: 20}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 0.6,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  gradient: {
    flex: 0.5,
    marginTop: -100,
    paddingTop: 100,
  },
  noise_overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    // backgroundColor: 'red',
  },
  subContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    padding: 28,
    gap: 20,
    justifyContent: 'space-between',
    // alignItems: 'center',
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
