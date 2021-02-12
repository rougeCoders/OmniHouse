import React from 'react';
import { View } from "react-native";
import { Image, Text } from 'react-native-elements';

const TenantsHeader = (props) => {
    console.log(props.styles);
    return(
        <Text h4 style={props.styles.headText}>Do you currently have tenants?</Text>
    )
}

export default TenantsHeader;