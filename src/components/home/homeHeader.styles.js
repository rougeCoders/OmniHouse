import { StyleSheet } from 'react-native';
import OmniHouseTheme from "../../styles/theme.js";

export default StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: OmniHouseTheme.spacing(1),
        backgroundColor: OmniHouseTheme.palette.primary.main,
    },
    subContainer: {
        padding: OmniHouseTheme.spacing(1),
    },
    imageIcon: {
        height: OmniHouseTheme.spacing(6),
        width: OmniHouseTheme.spacing(6),
    },
    welcomeText: {
        marginTop: OmniHouseTheme.spacing(2.5),
        marginBottom: OmniHouseTheme.spacing(2.5),
        fontWeight: 'bold',
    }
});