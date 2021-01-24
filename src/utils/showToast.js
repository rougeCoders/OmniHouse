import Toast from 'react-native-toast-message';
import constants from'../constants.js';

const getErrorMessage = (error) => {
    const errorObj = constants.Errors.filter(er => er.errorCode === error)[0];
    return errorObj !== undefined ? errorObj.errorMsg : error;
}

const showToast = (type,text1,text2) => {
    switch(type){
        case 'info':
            Toast.show({
                type: 'info',
                text1,
                text2,
                position: 'bottom',
                visibilityTime: 4000,
                autoHide: true,
                bottomOffset: 50
              });
        break;
        case 'success':
            Toast.show({
                type: 'success',
                text1,
                text2,
                position: 'bottom',
                visibilityTime: 4000,
                autoHide: true,
                bottomOffset: 50
              });
        break;
        case 'error':
            Toast.show({
                type: 'error',
                text1,
                text2: getErrorMessage(text2),
                position: 'bottom',
                visibilityTime: 4000,
                autoHide: true,
                bottomOffset: 50
              });
        break;
    }
}

export default showToast