import OmniHouseTheme from './../../../styles/theme.js';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    buttonContainer: {
      alignItems: 'center',
    },

    imageIcon: {
      borderRadius:10,
      width: 80,
      height: 80
    },

    buttonText:{
      marginTop: OmniHouseTheme.spacing(0.5),
      color: OmniHouseTheme.palette.primary.font,
    }
});