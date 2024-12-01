import {
  AppState,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import SVG_XMLs from '../svgs/SVGs';
import {SvgFromXml} from 'react-native-svg';
import MapView, {Marker} from 'react-native-maps';
import darkStyle from '../theme/MapStyle';
import {useMMKVStorage} from 'react-native-mmkv-storage';
import {GLOBAL_STORAGE} from '../utils/storage';
import Geolocation from '@react-native-community/geolocation';
import Toast from 'react-native-toast-message';
import {apiCall} from '../api';
import {useFocusEffect} from '@react-navigation/native';

const DashboardScreen = ({navigation}) => {
  const mapRef = useRef();
  const [user, setUser] = useMMKVStorage('USER', GLOBAL_STORAGE, {});
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 31.4504,
    longitude: 73.135,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [recentJourney, setRecent] = useState(false);
  const [address, setAddress] = useState('Finding your current location...');
  useEffect(() => {
    getCurrentLocation();
    AppState.addEventListener('change', getCurrentLocation);
  }, []);
  const getCurrentLocation = () => {
    try {
      console.log('gettingLocation');
      Geolocation.getCurrentPosition(
        data => {
          console.log('getCurrentPosition response', data);
          let newLocation = {
            latitude: data.coords.latitude,
            longitude: data.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          };
          mapRef.current?.animateToRegion(newLocation, 1000);
          setCurrentLocation(newLocation);
          apiCall({
            endoint: 'journey/location',
            data: {
              lat: newLocation.latitude,
              lng: newLocation.longitude,
            },
            setResponse: data => {
              console.log('getCurrentLcation response', data);
              setRecent(data?.recentJourney);
              setAddress(data?.address);
            },
          });
        },
        error => {
          Toast.show({
            type: 'error',
            text1: 'Location is off',
            text2: 'Turn on your location first ',
          });
        },
      );
    } catch (e) {
      console.log('getCurrentLcation error:', e);
    }
  };

  const toggleJourney = () => {
    if (!currentLocation.latitude || !currentLocation.longitude) {
      Toast.show({
        type: 'error',
        text1: 'Location is off',
        text2: 'Turn on your location first ',
      });
      return;
    }
    if (recentJourney) {
      apiCall({
        endoint: 'journey/end',
        data: {
          lat: currentLocation.latitude,
          lng: currentLocation.longitude,
        },
        setResponse: data => {
          setRecent(false);
          navigation.navigate('history');
        },
      });
    } else {
      apiCall({
        endoint: 'journey/start',
        data: {lat: currentLocation.latitude, lng: currentLocation.longitude},
        setResponse: data => {
          console.log('toggleJourney response', data);
          setRecent(data);
        },
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../images/radial_gradient_bg.png')}
        style={{flex: 1, padding: 20}}>
        <Text style={styles.greeting}>
          Hi, {user?.name}!{'\n'}
          <Text style={styles.greeting2}>Ready to Start Your Journey?</Text>
        </Text>
        <View style={styles.row}>
          <SvgFromXml
            xml={SVG_XMLs.locationIcon}
            style={{marginHorizontal: -16, marginBottom: -5}}
            height={60}
            width={60}
          />
          <Text style={styles.location}>{address}</Text>
        </View>
        <View style={styles.flex1}>
          <SvgFromXml
            xml={SVG_XMLs[!recentJourney ? 'startJourney' : 'endJourney']}
            onPress={() => toggleJourney()}
            style={{alignSelf: 'center'}}
            height={200}
            width={200}
          />
          <View style={styles.borderRadius}>
            <MapView
              ref={mapRef}
              customMapStyle={darkStyle}
              initialRegion={currentLocation}
              style={styles.MapView}>
              <Marker
                title={address}
                pinColor="white"
                coordinate={currentLocation}
              />
            </MapView>
          </View>
          <Text
            style={styles.simpleButton}
            onPress={() => navigation.navigate('history')}>
            Journey History
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default DashboardScreen;

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
  greeting: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 24,
  },
  greeting2: {
    fontSize: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  location: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  flex1: {
    flex: 1,
    paddingTop: 20,
    gap: 20,
    justifyContent: 'space-between',
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  simpleButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: 12,
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 1,
    textAlign: 'center',
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  MapView: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    overflow: 'hidden',
  },
  borderRadius: {
    borderRadius: 10,
    overflow: 'hidden',
  },
});
