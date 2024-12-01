import React from 'react';
import {Modal, View, ActivityIndicator, StyleSheet} from 'react-native';
import Colors from '../theme/Colors';

const LoadingModal = ({visible, setVisible}) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={() => setVisible(false)} // Close modal when back button is pressed (Android)
    >
      <View style={styles.container}>
        <View style={styles.modalBackground}>
          <ActivityIndicator size="large" color={Colors.primaryColor} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalBackground: {
    padding: 20,
    backgroundColor: '#1E2035', // Modal background color
    borderRadius: 10,
  },
});

export default LoadingModal;
