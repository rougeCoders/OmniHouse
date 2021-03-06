import React from 'react';
import SvgIcon from 'react-native-svg-icon';
import svgs from './OmniHouseSvg'; // point to your svgs.js wherever that may be

const OmniHouseIcon = (props) => <SvgIcon {...props} svgs={svgs} />;

export default OmniHouseIcon;