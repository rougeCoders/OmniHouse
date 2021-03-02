import React from 'react';
import { View } from 'react-native';
import { Badge, Icon } from 'react-native-elements';
import CustomIcon from '../iconSet/customIcon.js';
import styles from './homeHeader.styles.js';
import OmniHouseTheme from "../../styles/theme.js";

const HomeHeader = () => {

    return(
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems:'center'
                    }}>
                    <CustomIcon name='omnigem'
                        style={styles.imageIcon}/>
                    <CustomIcon name='raffle'
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