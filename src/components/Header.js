import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SvgFromXml} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';

const Header = ({startIcon, endIcon, title, endIconText}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {startIcon && <Icon icon={startIcon} onPress={navigation.goBack} />}
      <Text style={styles.title}>{title}</Text>
      {endIcon || endIconText ? (
        <Icon icon={endIcon} text={endIconText} />
      ) : (
        <Text style={{width: 45}}></Text>
      )}
    </View>
  );
};

const Icon = ({icon, text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.icon}>
      {icon && <SvgFromXml xml={icon} />}
      {text && <Text style={styles.text}>{text}</Text>}
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    color: 'white',
  },
});
