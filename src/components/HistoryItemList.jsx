import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlowButton} from './GradientOptionSelector';
import {SvgFromXml} from 'react-native-svg';
import SVG_XMLs from '../svgs/SVGs';
import Colors from '../theme/Colors';

const HistoryItemList = ({header, data}) => {
  return (
    <View>
      <FlatList
        ListHeaderComponent={header}
        style={{marginVertical: 10, marginHorizontal: -14}}
        data={data}
        renderItem={({item}) => <HistoryItem item={item} />}
      />
    </View>
  );
};

const HistoryItem = ({item}) => {
  return (
    <View style={styles.item}>
      <View style={[styles.row, {justifyContent: 'space-between'}]}>
        <Text style={styles.heading}>{item?.title}</Text>
        <Text style={styles.kmText}>{item.totalDistance}</Text>
      </View>
      <View style={styles.row}>
        <SvgFromXml
          xml={SVG_XMLs.locationIcon}
          style={{margin: -5}}
          height={28}
          width={28}
        />
        <Text style={styles.text}>From {item?.startLocation?.address} </Text>
      </View>
      <View style={styles.row}>
        <SvgFromXml
          xml={SVG_XMLs.locationIcon}
          style={{margin: -5}}
          height={28}
          width={28}
        />
        <Text style={styles.text}>To {item?.endLocation?.address}</Text>
      </View>
    </View>
  );
};

export default HistoryItemList;

const styles = StyleSheet.create({
  item: {
    padding: 16,
    backgroundColor: 'rgba(130, 140, 169, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    flex: 1,
    margin: 10,
    gap: 10,
  },
  heading: {
    color: 'white',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  kmText: {
    color: Colors.primaryColor,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
