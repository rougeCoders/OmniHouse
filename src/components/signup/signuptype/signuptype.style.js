import { StyleSheet } from 'react-native';
import OmniHouseTheme from './../../../styles/theme.js';

export default StyleSheet.create({

    container :{
        padding:'10%',
        marginTop:OmniHouseTheme.spacing(-30),
        justifyContent: 'center',
    },
    text:{
        textAlign:'center',
        color:OmniHouseTheme.palette.primary.font,
    },
    buttonContainer:{
        marginTop: OmniHouseTheme.spacing(1.5),
    },
    signupButton:{
        borderRadius: OmniHouseTheme.spacing(2.75),
        height: OmniHouseTheme.spacing(5),
    },
    signupButtonIconTitle:{
        paddingLeft: OmniHouseTheme.spacing(1),
    },
});