import { StyleSheet } from 'react-native';
import OmniHouseTheme from "../../styles/theme.js";

export default StyleSheet.create({
    container :{
        padding: OmniHouseTheme.spacing(1),
        backgroundColor: OmniHouseTheme.palette.primary.main,
    },
    welcomeText:{
        marginTop: OmniHouseTheme.spacing(2.5),
        marginBottom: OmniHouseTheme.spacing(2.5),
        color: OmniHouseTheme.palette.primary.font,
        fontWeight: 'bold',
    }
});