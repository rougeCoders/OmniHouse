import React from 'react';
import { ScrollView } from 'react-native';
import ImageCard from '../cards/imageCard/index.js';
import image from './../../assets/logo.png';
import constants from './../../constants.js';

const HomeNavigation = (props) => {

    return (
        <ScrollView style={{
            flexDirection: 'row',
            marginTop:10,
            marginBottom:10,
        }}>
            <ImageCard ImageUri={image} Title='My Properties'
                ScreenLink={constants.ScreenNames.MyProperty} {...props} />
        </ScrollView>
    )
}
export default HomeNavigation;