import { StyleSheet } from 'react-native';
import OmniHouseTheme from "../../styles/theme.js";

export default StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-around',
        padding: OmniHouseTheme.spacing(1),
        backgroundColor: OmniHouseTheme.palette.primary.main,
    }
});