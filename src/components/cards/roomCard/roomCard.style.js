import { StyleSheet } from 'react-native';
import OmnihouseTheme from './../../../styles/theme.js';

export default StyleSheet.create({

    container: {
      padding: OmnihouseTheme.spacing(0.5),
      margin: OmnihouseTheme.spacing(0.5),
      borderRadius: OmnihouseTheme.spacing(1),
      flexDirection:'row',
      alignItems: 'center',
      justifyContent:'space-between',
      borderBottomWidth: OmnihouseTheme.spacing(0.25),
      borderBottomColor: OmnihouseTheme.palette.secondary.accent,
    },
    headText:{
      fontSize: OmnihouseTheme.spacing(2),
      color: OmnihouseTheme.palette.primary.font,
    },
    text:{
      minWidth: OmnihouseTheme.spacing(6),
      padding: OmnihouseTheme.spacing(0.5),
      margin: OmnihouseTheme.spacing(0.5),
      borderRadius: OmnihouseTheme.spacing(1),
      fontSize: OmnihouseTheme.spacing(2),
      textAlign:'center',
      color: OmnihouseTheme.palette.primary.font,
      backgroundColor: OmnihouseTheme.palette.secondary.accent,
    },
    textLeft:{
      marginRight:0,
      borderTopRightRadius:0,
      borderBottomRightRadius:0
    },
    textRight:{
      marginLeft:0,
      borderTopLeftRadius:0,
      borderBottomLeftRadius:0
    },
    buttonsContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    }
});