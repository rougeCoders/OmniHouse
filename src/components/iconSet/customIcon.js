import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import OmniHouseTheme from "../../styles/theme.js";
import Omnigem from '../../assets/svgIcons/OmniGem.svg';
import Raffle from '../../assets/svgIcons/Raffle.svg';
import MyProperties from '../../assets/svgIcons/MyProperties.svg';
import Marketplace from '../../assets/svgIcons/Marketplace.svg';
import MaintenanceLarge from '../../assets/svgIcons/Maintenance-Large.svg';
import Inventory from '../../assets/svgIcons/Inventory.svg';
import Docs from '../../assets/svgIcons/Docs.svg';
import Wallet from '../../assets/svgIcons/Wallet.svg';
import MessagingLarge from '../../assets/svgIcons/Messaging-Large.svg';
import CalenderLarge from '../../assets/svgIcons/Calender-Large.svg';

const icon = (props) => {
    switch (props.name) {
        case 'omnigem':
            return <Omnigem />;
        case 'raffle':
            return <Raffle />;
        case 'myproperties':
            return <MyProperties />
        case 'marketplace':
            return <Marketplace />
        case 'maintenancelarge':
            return <MaintenanceLarge />
        case 'inventory':
            return <Inventory />
        case 'docs':
            return <Docs />
        case 'wallet':
            return <Wallet />
        case 'messaginglarge':
            return <MessagingLarge />
        case 'calenderlarge':
            return <CalenderLarge />
    }
}

const CustomIcon = (props) => {
    return (
        <View style={{padding: OmniHouseTheme.spacing(0.5)}}>
            {icon(props)}
        </View>
    )
}

CustomIcon.propTypes = {
    /**
     * name of the icon
     */
    name: PropTypes.string,
    /**
     * color of the icon
     */
    color: PropTypes.string,
};

export default CustomIcon;