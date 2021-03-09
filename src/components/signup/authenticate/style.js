import { StyleSheet } from 'react-native';
import OmniHouseTheme from '../../../styles/theme.js';

export default StyleSheet.create({
    iconContainer:{
        alignItems:'center',
        marginTop: OmniHouseTheme.spacing(5),
    },
    inputContainer:{
        padding: OmniHouseTheme.spacing(1),
        paddingBottom: 0,
        marginBottom:OmniHouseTheme.spacing(3),
        borderTopLeftRadius: OmniHouseTheme.spacing(1),
        borderTopRightRadius: OmniHouseTheme.spacing(1),
        borderBottomColor: OmniHouseTheme.palette.primary.vector,
        borderBottomWidth: OmniHouseTheme.spacing(0.25),
        backgroundColor: OmniHouseTheme.palette.primary.accent,
    },
    inputLabelStyle:{
        color: OmniHouseTheme.palette.primary.vector,
        fontSize: OmniHouseTheme.spacing(1.5),
    },
    inputBoxText:{
        fontSize:16,
        color:'white'
    },
    inputBoxContainer:{
        marginTop: OmniHouseTheme.spacing(-1.5),
        marginBottom:OmniHouseTheme.spacing(-3.5),
        borderBottomWidth: OmniHouseTheme.spacing(0.25),
        borderBottomColor: OmniHouseTheme.palette.primary.vector,
    },
    signupButton:{
        alignSelf:'center',
        backgroundColor: '#A01E5B',
        borderRadius: OmniHouseTheme.spacing(2.75),
        width:'70%'
    },
    signupButtonMobile:{
        backgroundColor:'#93227F',
    },
    signupButtonIconTitle:{
        paddingLeft: OmniHouseTheme.spacing(1),
    },
    headText:{
        marginBottom: OmniHouseTheme.spacing(1.5),
        color: OmniHouseTheme.palette.primary.font,
    },
    flatListContainer:{
        alignSelf: 'center',
        marginBottom: OmniHouseTheme.spacing(0.25),
    },
    buttonContainer:{
        flexDirection:'row-reverse'
    },
    nextButton:{
        color: OmniHouseTheme.palette.primary.font,
    },
    nextButtonTitle:{
        color: OmniHouseTheme.palette.primary.font,
    },
});