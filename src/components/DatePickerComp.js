import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SvgFromXml} from 'react-native-svg';
import SVG_XMLs from '../svgs/SVGs';

const DatePickerComp = ({
  value,
  onChangeText,
  placeholder,
  label,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.input}>
        <Text
          value={value}
          style={[
            styles.TextInput,
            {color: value ? 'white' : 'rgba(85, 92, 115, 1)'},
          ]}>
          {value || placeholder}
        </Text>
        <SvgFromXml
          xml={SVG_XMLs.back}
          height={18}
          width={18}
          style={{transform: [{rotate: '270deg'}]}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DatePickerComp;

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  label: {
    color: 'white',
  },
  input: {
    flexDirection: 'row',
    color: 'white',
    padding: 16,
    backgroundColor: 'rgba(130, 140, 169, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    flex: 1,
  },
  TextInput: {
    color: 'white',
    flex: 1,
  },
});
