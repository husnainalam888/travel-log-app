import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Input = ({
  value,
  onChangeText,
  placeholder,
  label,
  secureTextEntry,
  autoCapitalize,
  containerStyle,
  inputStyle,
  multiLine,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        multiline={multiLine}
        style={[styles.input, inputStyle]}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={'rgba(85, 92, 115, 1)'}
        autoCapitalize={autoCapitalize}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  label: {
    color: 'white',
  },
  input: {
    color: 'white',
    padding: 16,
    backgroundColor: 'rgba(130, 140, 169, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
  },
});
