import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BackgroundContainer from '../components/BackgroundContainer';
import Header from '../components/Header';
import SVG_XMLs from '../svgs/SVGs';
import Input from '../components/Input';
import GradientTextButton from '../components/GradientButton';
import Colors from '../theme/Colors';
import {loginApi} from '../api/authApi';
import {storeUser} from '../utils/storage';
const Login = ({navigation}) => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
  });

  const handleSignIn = () => {
    loginApi({
      data,
      setResponse: data => {
        storeUser(data);
        navigation.reset({index: 0, routes: [{name: 'dashboard'}]});
      },
    });
  };

  return (
    <BackgroundContainer>
      <Header title={'Login'} startIcon={SVG_XMLs.back} />
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Input
            value={data.email}
            onChangeText={t => setData({...data, email: t})}
            label={'Email'}
            placeholder={'Enter your email'}
          />
          <Input
            value={data.password}
            onChangeText={t => setData({...data, password: t})}
            label={'Password'}
            placeholder={'Enter your password'}
          />
        </View>
        <View style={styles.btnContainer}>
          <GradientTextButton
            title="Sign In"
            onPress={handleSignIn}
            style={styles.GradientTextButton}
          />
          <Text style={styles.signIn}>
            Don't have an account?{' '}
            <Text
              onPress={() => navigation.navigate('signUp')}
              style={{color: Colors.primaryColor}}>
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </BackgroundContainer>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  formContainer: {
    gap: 20,
  },
  signIn: {
    color: 'white',
    textAlign: 'center',
  },
  btnContainer: {gap: 16, marginTop: 28},
  GradientTextButton: {marginHorizontal: 8, marginTop: 16},
});
