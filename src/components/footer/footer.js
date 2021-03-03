import React from 'react';
import { View } from 'react-native';
import CustomIcon from '../iconSet/customIcon.js';
import styles from './footer.styles.js';
import OmniHouseTheme from "../../styles/theme.js";

const Footer = () => {

    return(
        <View style={styles.container}>
            <CustomIcon name='searchlarge' height={OmniHouseTheme.spacing(3.5)}
                 width={OmniHouseTheme.spacing(3.5)} />
            <CustomIcon name='messaginglarge' height={OmniHouseTheme.spacing(4.5)}
                 width={OmniHouseTheme.spacing(4.5)} />
            <CustomIcon name='homebutton' height={OmniHouseTheme.spacing(6.5)}
                 width={OmniHouseTheme.spacing(6.5)} />
            <CustomIcon name='calenderlarge' height={OmniHouseTheme.spacing(4.5)}
                 width={OmniHouseTheme.spacing(4.5)} />
            <CustomIcon name='addbox' height={OmniHouseTheme.spacing(3.5)}
                 width={OmniHouseTheme.spacing(3.5)} />
        </View>
    )
}

export default Footer;