import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';
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
import SearchLarge from '../../assets/svgIcons/Search-Large.svg';
import HomeButton from '../../assets/svgIcons/HomeButton.svg';
import AddBox from '../../assets/svgIcons/AddBox.svg';

const icon = (props) => {

    const iconProps = {};
    if(props.width !== undefined)
    { iconProps.width= props.width}
    if(props.height !== undefined)
    { iconProps.height= props.height}

    switch (props.name) {
        case 'omnigem':
            return <Omnigem {...iconProps} />;
        case 'raffle':
            return <Raffle {...iconProps} />;
        case 'myproperties':
            return <MyProperties {...iconProps} />
        case 'marketplace':
            return <Marketplace {...iconProps} />
        case 'maintenancelarge':
            return <MaintenanceLarge {...iconProps} />
        case 'inventory':
            return <Inventory {...iconProps} />
        case 'docs':
            return <Docs {...iconProps} />
        case 'wallet':
            return <Wallet {...iconProps} />
        case 'messaginglarge':
            return <MessagingLarge {...iconProps} />
        case 'calenderlarge':
            return <CalenderLarge {...iconProps} />
        case 'searchlarge':
            return <SearchLarge {...iconProps} />
        case 'homebutton':
            return <HomeButton {...iconProps} />
        case 'addbox':
            return <AddBox {...iconProps} />     
    }
}

const CustomIcon = (props) => {
    return (
        <TouchableHighlight style={{padding: OmniHouseTheme.spacing(0.5)}}>
            {icon(props)}
        </TouchableHighlight>
    )
}

CustomIcon.propTypes = {
    /**
     * name of the icon
     */
    name: PropTypes.string,
    /**
     * height of the icon
     */
    height: PropTypes.number,
    /**
     * width of the icon
     */
    width: PropTypes.number,
    
};

export default CustomIcon;