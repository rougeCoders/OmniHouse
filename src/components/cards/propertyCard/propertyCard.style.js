import { StyleSheet } from 'react-native';
import OmniHouseTheme from '../../../styles/theme.js';

export default StyleSheet.create({

    container:{
      padding: OmniHouseTheme.spacing(0.75),
      flexDirection: 'row',
    },
    buttonContainer: {
      padding: OmniHouseTheme.spacing(1.5),
      marginBottom: OmniHouseTheme.spacing(2.5),
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: OmniHouseTheme.palette.primary.accent,
      borderRadius: OmniHouseTheme.spacing(1.25),
      width:'100%'
    },
    buttonText:{
      marginTop: OmniHouseTheme.spacing(0.5),
      color: OmniHouseTheme.palette.primary.font,
    },
    subContainer: {
      flexDirection:'row',
      alignItems:'center',
      marginTop:OmniHouseTheme.spacing(0.5)
    },
    progressBarContainer:{
      width:OmniHouseTheme.spacing(16),
      height:OmniHouseTheme.spacing(0.5),
      borderRadius:OmniHouseTheme.spacing(2.5),
      backgroundColor:'#7d6072'
    },
    progressBar:{
      height:OmniHouseTheme.spacing(0.5),
      borderRadius:OmniHouseTheme.spacing(2.5),
      backgroundColor: OmniHouseTheme.palette.primary.vector,
    },
    progressText:{
      marginLeft: OmniHouseTheme.spacing(1.5),
      color: OmniHouseTheme.palette.primary.font,
    },
    labelText:{
      backgroundColor: OmniHouseTheme.palette.primary.main,
      padding: OmniHouseTheme.spacing(0.5),
      paddingLeft: OmniHouseTheme.spacing(1),
      paddingRight: OmniHouseTheme.spacing(1),
      borderRadius:OmniHouseTheme.spacing(0.75),
      color: OmniHouseTheme.palette.primary.font,
      fontWeight:'bold'
    },
    badge:{
      width:0
    },
    badgeStyle:{
      width: OmniHouseTheme.spacing(3),
      height: OmniHouseTheme.spacing(3),
      borderRadius: OmniHouseTheme.spacing(3)
    },
    badgeContainerStyle:{
      position: 'absolute',
      top: -5,
      right: -6
    }
});