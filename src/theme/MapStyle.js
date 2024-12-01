import Colors from './Colors';

const darkStyle = [
  {
    elementType: 'geometry',
    stylers: [{color: Colors.backgroundColor}],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [{color: Colors.textColor}],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [{color: Colors.textColor}],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [{color: Colors.textColor}],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: Colors.primaryColor}],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: Colors.primaryColor}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: Colors.secondaryBackgroundColor}],
  },
];
export default darkStyle;
