import OmniHouseTheme from './../../../styles/theme.js';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    buttonContainer: {
      flexDirection:'column',
      alignItems: 'center',
      justifyContent:'center',
      margin:OmniHouseTheme.spacing(1),
    },

    imageIcon: {
      flexDirection:'column',
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:OmniHouseTheme.palette.primary.accent,
      borderRadius:10,
      width: 80,
      height: 80,
    },

    buttonText:{
      marginTop: OmniHouseTheme.spacing(0.5),
      color: OmniHouseTheme.palette.primary.font,
    }
});