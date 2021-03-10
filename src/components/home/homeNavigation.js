import React from 'react';
import { ScrollView } from 'react-native';
import ImageCard from '../cards/imageCard/index.js';
import constants from './../../constants.js';

const HomeNavigation = (props) => {

    return (
        <ScrollView horizontal={true} style={{
            marginTop:10,
            marginBottom:10,
        }}>
            <ImageCard icon={{name:'myproperties'}} title='My Properties'
                backgroundColor='#93227F' ScreenLink={constants.ScreenNames.MyProperty} {...props} />
            <ImageCard icon={{name:'marketplace'}} title='Marketplace'
                backgroundColor='#2A9D8F' ScreenLink={constants.ScreenNames.MyProperty} {...props} />
            <ImageCard icon={{name:'maintenancelarge'}} title='Maintenance'
                backgroundColor='#A75DD4' ScreenLink={constants.ScreenNames.Maintenance} {...props} />
            <ImageCard icon={{name:'inventory'}} title='Inventory'
                backgroundColor='#D38C55' ScreenLink={constants.ScreenNames.MyProperty} {...props} />
            <ImageCard icon={{name:'docs'}} title='Documents'
                backgroundColor='#1CB145' ScreenLink={constants.ScreenNames.MyProperty} {...props} />
            <ImageCard icon={{name:'wallet'}} title='Wallet'
                backgroundColor='#C33682' ScreenLink={constants.ScreenNames.MyProperty} {...props} />
            <ImageCard icon={{name:'messaginglarge'}} title='Messages'
                backgroundColor='#3D405B' ScreenLink={constants.ScreenNames.MyProperty} {...props} />
            <ImageCard icon={{name:'calenderlarge'}} title='Calender'
                backgroundColor='#457B9D' ScreenLink={constants.ScreenNames.MyProperty} {...props} />
        </ScrollView>
    )
}
export default HomeNavigation;