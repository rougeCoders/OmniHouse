import { StyleSheet } from 'react-native';
import OmniHouseTheme from '../../styles/theme.js';

export default StyleSheet.create({

  dropDownPicker:{
      backgroundColor: OmniHouseTheme.palette.primary.main,
      color: OmniHouseTheme.palette.primary.font,
      borderColor: OmniHouseTheme.palette.primary.vector,
      borderWidth: OmniHouseTheme.spacing(0.25),
      borderRadius: OmniHouseTheme.spacing(1),
  },
  dropDownPickerLabel:{
      fontSize: OmniHouseTheme.spacing(2.5),
      color: OmniHouseTheme.palette.primary.font,
  },
  dropDownPickerContainer:{
      height: OmniHouseTheme.spacing(5),
  },
  dropDownPickerItem:{
      justifyContent: 'flex-start',
  },
});