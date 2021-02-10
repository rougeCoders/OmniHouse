import React from 'react';
import { View } from 'react-native';
import { Image, Badge, Icon } from 'react-native-elements';
import image from './../../assets/logo.png';
import styles from './homeHeader.styles.js';
import OmniHouseTheme from "../../styles/theme.js";

const HomeHeader = () => {

    return(
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
            }}>
                <View>
                    <Image source={image}
                        style={styles.imageIcon}/>
                </View>
                <View>
                    <Image source={image}
                        style={styles.imageIcon}/>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
            }}>
                <View style={styles.subContainer}>
                    <Icon
                        name='notifications'
                        type='ionicons'
                        color={OmniHouseTheme.palette.icons.main}
                    />
                    <Badge
                        status="error"
                        size="large"
                        containerStyle={{ position: 'absolute', top: 8, right: 10 }}
                    />
                </View>
                <View style={styles.subContainer}>
                    <Icon
                        name='help-outline'
                        type='ionicons'
                        color={OmniHouseTheme.palette.icons.main}
                    />
                </View>
                <View style={styles.subContainer}>
                    <Icon
                        name='settings'
                        type='ionicons'
                        color={OmniHouseTheme.palette.icons.main}
                    />
                </View>
            </View>
        </View>
    )
}

export default HomeHeader;