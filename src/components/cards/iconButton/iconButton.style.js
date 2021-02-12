import { StyleSheet } from 'react-native';
import OmniHouseTheme from '../../../styles/theme.js';

export default StyleSheet.create({

    container:{
      flexDirection:'column',
      alignItems:'center',
      margin:OmniHouseTheme.spacing(0.5),
    },
    buttonContainer: {
      padding: OmniHouseTheme.spacing(0.75),
      margin: OmniHouseTheme.spacing(0.75),
      borderRadius: OmniHouseTheme.spacing(1.25),
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor: OmniHouseTheme.palette.secondary.accent,
      height: OmniHouseTheme.spacing(11.5),
      width: OmniHouseTheme.spacing(11.5),
    },
    buttonFlat:{
      width: '98%',
      height: OmniHouseTheme.spacing(6.5),
    },
    imageIcon: {
      borderRadius: OmniHouseTheme.spacing(1.25),
      width: OmniHouseTheme.spacing(10),
      height: OmniHouseTheme.spacing(10),
    },
    titleText: {
      textAlign:'center',
      color: OmniHouseTheme.palette.primary.font
    },
    supportText: {
      textAlign:'center',
      width: OmniHouseTheme.spacing(19.5),
      color: OmniHouseTheme.palette.primary.font
    }
});