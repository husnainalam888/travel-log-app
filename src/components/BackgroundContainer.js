import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, Keyboard, Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const BackgroundContainer = ({children}) => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardVisible(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardVisible(false);
    });
    // return () => {
    //   Keyboard.removeAllListeners('keyboardDidShow');
    //   Keyboard.removeAllListeners('keyboardDidHide');
    // };
  });
  return (
    <View style={styles.backgroundContainer}>
      <LinearGradient
        colors={['rgba(147, 107, 233, 0.3)', 'rgba(14, 10, 24, 0)']}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        style={styles.background}></LinearGradient>
      <ScrollView
        contentContainerStyle={[
          {
            flexGrow: 1,
          },
          isKeyboardVisible && Platform.OS === 'ios' && {paddingBottom: 200},
        ]}
        style={styles.absolute}>
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  background: {
    flex: 0.5,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 14,
  },
});

export default BackgroundContainer;
