import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import Colors from '../theme/Colors';

const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={{borderLeftColor: Colors.primaryColor}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontSize: 14,
        fontWeight: '400',
      }}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: props => (
    <ErrorToast
      {...props}
      style={{
        borderLeftColor: Colors.primaryColor,
        backgroundColor: Colors.backgroundColor,
      }}
      contentContainerStyle={{backgroundColor: Colors.backgroundColor}}
      text1Style={{
        color: Colors.primaryColor,
      }}
      text2Style={{
        color: Colors.textColor,
      }}
    />
  ),
};

export {toastConfig};
