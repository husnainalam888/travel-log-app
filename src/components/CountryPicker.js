import {
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {CountryPicker as RNCountryPicker} from 'react-native-country-codes-picker';
import {SvgFromXml} from 'react-native-svg';
import CountryFlags from '../utils/countries';
import SVG_XMLs from '../svgs/SVGs';
const CountryPicker = ({
  value,
  onChangeText,
  placeholder,
  label,
  containerStyle,
}) => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('PK');
  const [dialCode, setDialCode] = useState('+92');

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <RNCountryPicker
        show={show}
        pickerButtonOnPress={item => {
          console.log(item);
          setDialCode(item.dial_code);
          setCountryCode(item.code);
          setShow(false);
        }}
      />
      <View style={styles.input}>
        <TouchableOpacity
          onPress={() => setShow(true)}
          style={styles.flagContainer}>
          <SvgFromXml xml={SVG_XMLs.arrow_down} height={10} width={10} />
          <Text>{CountryFlags.find(c => c.code == countryCode)?.emoji}</Text>
          <Text style={styles.dialCode}>{dialCode}</Text>
        </TouchableOpacity>
        <TextInput
          value={value}
          style={styles.textInput}
          placeholderTextColor={'rgba(85, 92, 115, 1)'}
          placeholder={placeholder}
          onChangeText={onChangeText}
          keyboardType="number-pad"
        />
      </View>
    </View>
  );
};

export default CountryPicker;

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  label: {
    color: 'white',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    padding: 16,
    backgroundColor: 'rgba(130, 140, 169, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
  },
  textInput: {
    color: 'white',
    flex: 1,
    padding: 0,
  },
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  dialCode: {
    color: 'white',
  },
});
