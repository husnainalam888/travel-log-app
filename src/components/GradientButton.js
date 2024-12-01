import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientTextButton = ({style, onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <LinearGradient
        colors={['#F93DAB', '#A03FE3', '#29F1E5']} // Replace with your gradient colors
        style={styles.gradient}
        start={{x: -0.1, y: 0}}
        end={{x: 1, y: 4}}
        locations={[0, 0.5, 1]}>
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    overflow: 'hidden', // Ensures the border radius is applied
  },
  gradient: {
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white', // Change text color as needed
    fontSize: 16, // Adjust font size
    fontWeight: 'bold', // Adjust font weight
  },
});

export default GradientTextButton;
