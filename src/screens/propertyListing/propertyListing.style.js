import { StyleSheet } from 'react-native';
import OmniHouseTheme from "../../styles/theme.js";

export default StyleSheet.create({

    container:{
        padding: OmniHouseTheme.spacing(2.5),
        backgroundColor: OmniHouseTheme.palette.primary.main,
    },
    headingText:{
        marginBottom: OmniHouseTheme.spacing(2.5),
        color: OmniHouseTheme.palette.primary.font,
    },
    searchTab:{
        flexDirection:'row',
        justifyContent:'flex-end',
        marginBottom: OmniHouseTheme.spacing(2)
    },
    buttonBottom:{
        borderRadius:OmniHouseTheme.spacing(6),
        paddingLeft:OmniHouseTheme.spacing(2.5),
        paddingRight:OmniHouseTheme.spacing(2.5)
    },
    addProp:{
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }

});