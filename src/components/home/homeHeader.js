import React from 'react';
import { View } from 'react-native';
import { Image, Badge } from 'react-native-elements';
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
                <View>
                    <Image source={image}
                        style={{ width: 50, height: 50 }}/>
                    <Badge
                        status="error"
                        size="large"
                        containerStyle={{ position: 'absolute', top: 6, right: 6 }}
                    />
                </View>
                <View>
                    <Image source={image}
                        style={{ width: 50, height: 50 }}/>
                </View>
                <View>
                    <Image source={image}
                        style={{ width: 50, height: 50 }}/>
                </View>
            </View>
        </View>
    )
}

export default HomeHeader;