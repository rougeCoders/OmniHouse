import React from 'react';
import PropTypes from 'prop-types';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './dropdown.style.js';
import OmniHouseTheme from '../../styles/theme.js';

const DropDown = (props) => {

    const handleChange = (value) => {
        props.onChangeItem(value);
    } 

    return(
            <DropDownPicker
                items={props.items}
                containerStyle={styles.dropDownPickerContainer}
                dropDownStyle={styles.dropDownPicker}
                style={styles.dropDownPicker}
                labelStyle={styles.dropDownPickerLabel}
                itemStyle={styles.dropDownPickerItem}
                arrowColor={OmniHouseTheme.palette.primary.font}
                arrowSize={OmniHouseTheme.spacing(3)}
                onChangeItem={item => handleChange(item.value)}
            />
    )
}

DropDown.propTypes = {
    /**
     * Dropdown Items
     */
    items: PropTypes.array,
    /**
     * Event for selection
     */
    onChangeItem: PropTypes.object,
  };

export default DropDown;