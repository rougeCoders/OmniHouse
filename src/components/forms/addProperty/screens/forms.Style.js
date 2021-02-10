import { StyleSheet } from 'react-native';
import OmniHouseTheme from '../../../../styles/theme.js';

export default StyleSheet.create({

    formContainer :{
        marginBottom: OmniHouseTheme.spacing(12.5),
        flex:1,
        flexDirection:'column',
        justifyContent: 'space-around',
    },
    headText:{
        marginBottom: OmniHouseTheme.spacing(1.5),
        color: OmniHouseTheme.palette.primary.font,
    },
    inputContainer:{
        padding: OmniHouseTheme.spacing(1),
        paddingBottom: 0,
        marginBottom:OmniHouseTheme.spacing(1),
        borderTopLeftRadius: OmniHouseTheme.spacing(1),
        borderTopRightRadius: OmniHouseTheme.spacing(1),
        borderBottomColor: OmniHouseTheme.palette.primary.vector,
        borderBottomWidth: OmniHouseTheme.spacing(0.25),
        backgroundColor: OmniHouseTheme.palette.primary.accent,
    },
    inputBox:{
        padding: OmniHouseTheme.spacing(2),
        borderTopLeftRadius: OmniHouseTheme.spacing(1),
        borderTopRightRadius: OmniHouseTheme.spacing(1),
        borderBottomColor: OmniHouseTheme.palette.primary.vector,
        borderBottomWidth: OmniHouseTheme.spacing(0.25),
        backgroundColor: OmniHouseTheme.palette.primary.accent,
        color: OmniHouseTheme.palette.primary.font,
    },
    inputLabelStyle:{
        color: OmniHouseTheme.palette.primary.vector,
        fontSize: OmniHouseTheme.spacing(1.5),
    },
    inputBoxText:{
        fontSize:28,
        color:'white'
    },
    inputBoxContainer:{
        marginTop: OmniHouseTheme.spacing(-1.5),
        marginBottom:OmniHouseTheme.spacing(-3.5),
        borderBottomWidth: OmniHouseTheme.spacing(0.25),
        borderBottomColor: OmniHouseTheme.palette.primary.vector,
    },
    conditionText:{
        marginBottom: OmniHouseTheme.spacing(1.5),
        marginTop: OmniHouseTheme.spacing(1.5),
        color: OmniHouseTheme.palette.primary.font,
        textAlign:'center',
        fontStyle:'italic'
    },
    dropDownPicker:{
        backgroundColor: OmniHouseTheme.palette.primary.main,
        color: OmniHouseTheme.palette.primary.font,
        borderColor: OmniHouseTheme.palette.primary.vector,
    },
    dropDownPickerLabel:{
        fontSize: OmniHouseTheme.spacing(2.5),
        color: OmniHouseTheme.palette.primary.font,
    },
    dropDownPickerContainer:{
        height: OmniHouseTheme.spacing(5),
        backgroundColor: OmniHouseTheme.palette.primary.main,
    },
    dropDownPickerItem:{
        justifyContent: 'flex-start',
    },
    buttonContainer:{
        flexDirection:'row-reverse'
    },
    nextButton:{
        color: OmniHouseTheme.palette.primary.font,
    },
    nextButtonTitle:{
        color: OmniHouseTheme.palette.primary.font,
    }
});