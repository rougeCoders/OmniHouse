import React from 'react';
import { View } from 'react-native';
import { Image, Badge, Icon } from 'react-native-elements';
import image from './../../assets/logo.png';


const HomeHeader = () => {

    return(
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding:10,
            paddingTop:20
        }}>
            <View style={{
                flexDirection: 'row',
            }}>
                <View>
                    <Image source={image}
                        style={{ width: 50, height: 50 }}/>
                </View>
                <View>
                    <Image source={image}
                        style={{ width: 50, height: 50 }}/>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
            }}>
                <View style={{padding:10}}>
                    <Icon
                        name='notifications'
                        type='ionicons'
                        color='#517fa4'
                    />
                    <Badge
                        status="error"
                        size="large"
                        containerStyle={{ position: 'absolute', top: 8, right: 10 }}
                    />
                </View>
                <View style={{padding:10}}>
                    <Icon
                        name='help-outline'
                        type='ionicons'
                        color='#517fa4'
                    />
                </View>
                <View style={{padding:10}}>
                    <Icon
                        name='settings'
                        type='ionicons'
                        color='#517fa4'
                    />
                </View>
            </View>
        </View>
    )
}

export default HomeHeader;