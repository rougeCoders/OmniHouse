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
    baseText:{
        color: OmniHouseTheme.palette.primary.font,
        fontWeight: 'bold'
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
        marginBottom: OmniHouseTheme.spacing(-0.25),
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
        fontSize:16,
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
    flatListContainer:{
        alignSelf: 'center',
        marginBottom: OmniHouseTheme.spacing(0.25),
    },
    buttonContainer:{
        flexDirection:'row-reverse'
    },
    selectableLabel:{
        padding: OmniHouseTheme.spacing(0.5),
        marginLeft: OmniHouseTheme.spacing(0.5),
        marginRight: OmniHouseTheme.spacing(0.5),
        borderRadius: OmniHouseTheme.spacing(1),
    },
    nextButton:{
        color: OmniHouseTheme.palette.primary.font,
    },
    nextButtonTitle:{
        color: OmniHouseTheme.palette.primary.font,
    },
    calenderButtonContainer:{
        borderTopLeftRadius: OmniHouseTheme.spacing(1),
        borderTopRightRadius: OmniHouseTheme.spacing(1),
        backgroundColor: OmniHouseTheme.palette.primary.accent,
        padding: OmniHouseTheme.spacing(2.5),
        marginBottom: OmniHouseTheme.spacing(2.5),
        flexDirection: 'row',
        borderBottomColor: OmniHouseTheme.palette.primary.vector,
        borderBottomWidth: OmniHouseTheme.spacing(0.25),
    },
    calenderText:{
        color: OmniHouseTheme.palette.primary.font,
        marginLeft: OmniHouseTheme.spacing(1),
        fontWeight: 'bold'
    },
});