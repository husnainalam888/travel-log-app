import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BackgroundContainer from '../components/BackgroundContainer';
import Header from '../components/Header';
import SVG_XMLs from '../svgs/SVGs';
import Input from '../components/Input';
import GradientTextButton from '../components/GradientButton';
import Colors from '../theme/Colors';
import {loginApi, signUpApi} from '../api/authApi';
import {storeUser} from '../utils/storage';

const SignUp = ({navigation}) => {
  const [data, setData] = React.useState({
    name: '',
    email: '',
    password: '',
  });
  return (
    <BackgroundContainer>
      <Header title={'Sign Up'} startIcon={SVG_XMLs.back} />
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Input
            label={'Full name'}
            placeholder={'Enter your full name'}
            value={data.name}
            onChangeText={name => setData({...data, name})}
          />
          <Input
            label={'Email'}
            placeholder={'Enter your email'}
            value={data.email}
            onChangeText={t => setData({...data, email: t})}
          />
          <Input
            label={'Password'}
            placeholder={'Enter your password'}
            value={data.password}
            onChangeText={t => setData({...data, password: t})}
          />
        </View>
        <View style={styles.btnContainer}>
          <GradientTextButton
            title="Create an Account"
            onPress={() => {
              signUpApi({
                data,
                setResponse: user => {
                  storeUser(user);
                  navigation.replace('dashboard');
                },
              });
            }}
            style={styles.GradientTextButton}
          />
          <Text style={styles.signIn}>
            Already have an account?{' '}
            <Text
              onPress={() => {
                navigation.navigate('login');
              }}
              style={{color: Colors.primaryColor}}>
              Sign in
            </Text>
          </Text>
        </View>
      </View>
    </BackgroundContainer>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  formContainer: {
    paddingTop: 51,
    gap: 20,
  },
  signIn: {
    color: 'white',
    textAlign: 'center',
  },
  btnContainer: {gap: 16, marginTop: 28},
  GradientTextButton: {marginHorizontal: 30},
});
