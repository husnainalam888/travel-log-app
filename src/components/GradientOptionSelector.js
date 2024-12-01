import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {SvgFromXml} from 'react-native-svg';
import SVG_XMLs from '../svgs/SVGs';

const GradientOptionSelector = ({label, containerStyle, options = []}) => {
  const [selected, setSelected] = React.useState(options[0]);
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.optionContainer}>
        {options.map((option, index) => (
          <LinearGradient
            style={{
              borderRadius: 10,
              padding: 1,
              overflow: 'hidden',
            }}
            colors={
              selected === option
                ? ['#F93DAB', '#A03FE3', '#29F1E5']
                : ['#00000000', '#00000000', '#00000000']
            }
            start={{x: -0.1, y: 0}}
            end={{x: 1, y: 2}}
            locations={selected === option ? [0, 0.5, 1] : [0, 0, 0]}
            key={index}>
            <Pressable
              onPress={() => {
                setSelected(option);
              }}
              style={[
                styles.item,
                selected === option && {backgroundColor: 'black'},
              ]}>
              {selected === option && (
                <SvgFromXml
                  xml={SVG_XMLs.glowOverlay}
                  style={styles.glowOverlay}
                />
              )}
              <Text key={index} style={{color: 'white'}}>
                {option}
              </Text>
            </Pressable>
          </LinearGradient>
        ))}
      </View>
    </View>
  );
};

export const GlowButton = ({title, onPress}) => {
  return (
    <LinearGradient
      style={{
        borderRadius: 50,
        padding: 1,
        overflow: 'hidden',
      }}
      colors={['#F93DAB', '#A03FE3', '#29F1E5']}
      start={{x: -0.1, y: 0}}
      end={{x: 1, y: 2}}
      locations={[0, 0.5, 1]}>
      <Pressable
        onPress={onPress}
        style={[
          styles.item,
          {
            backgroundColor: 'black',
            borderRadius: 50,
            paddingVertical: 5,
            paddingHorizontal: 30,
            minWidth: null,
          },
        ]}>
        <SvgFromXml xml={SVG_XMLs.glowOverlay} style={styles.glowOverlay} />
        <Text style={{color: 'white', fontSize: 12}}>{title}</Text>
      </Pressable>
    </LinearGradient>
  );
};

export default GradientOptionSelector;

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  label: {
    color: 'white',
  },
  optionContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
  item: {
    padding: 12,
    backgroundColor: 'rgba(130, 140, 169, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 100,
  },
  glowOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});
