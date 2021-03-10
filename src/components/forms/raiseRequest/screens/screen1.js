import React, { useState } from 'react';
import { View,FlatList,StyleSheet,TouchableOpacity } from 'react-native';
import { Text, Input, Button, Icon } from 'react-native-elements';
import constants from './../../../../constants.js';
import styles from './raiseRequest.style.js';
import ServiceCards from './../../../cards/serviceCards/index.js';
import { useDispatch } from 'react-redux';
import { addRaiseRequestCategory, addRaiseRequestCategoryImage } from '../../../../store/actions/addRaiseRequest.js';

const Screen1 = (props) => {

    const [raiseRequestServiceType, setRaiseRequestServiceType] = useState('');

    const dispatch = useDispatch();

    const handleRaiseRequestServiceTypeSelection = (content) => {
        setRaiseRequestServiceType(content.value);
        dispatch(addRaiseRequestCategory(content.value));
        dispatch(addRaiseRequestCategoryImage(content.categoryImageDetails));
        props.navigation.navigate('Screen2',{
            response: content
        });
    }

    const serviceData = [
        {
            index:1,
            title: constants.Maintenance.Electricians,
            value: constants.Maintenance.Electricians,
            text:'',
            backgroundColor: '#D4E09B',
            layoutType:'Grid',
            headingTitle: 'Select Issue',
            nextBtnText: 'Other',
            categoryImageDetails:{
                categoryImage: require('./../../../../images/Plumber.png'),
                categoryImageWidth: 48,
                categoryImageHeight:48,
            },
            items:[
                {
                    index:1,
                    title:'Switch & Socket',
                    value:'Switch & Socket',
                    backgroundColor: '#D4E09B'
                },
                {
                    index:2,
                    title:'Light & Bulbs',
                    value:'Light & Bulbs',
                    backgroundColor: '#D4E09B'
                },
                {
                    index:3,
                    title:'Circuit Box & Fuse',
                    value:'Circuit Box & Fuse',
                    backgroundColor: '#D4E09B'
                },
                {
                    index:4,
                    title:'Wiring',
                    value:'Wiring',
                    backgroundColor: '#D4E09B'
                },
                {
                    index:5,
                    title:'Door Locks',
                    value:'Door Locks',
                    backgroundColor: '#D4E09B'
                },
                {
                    index:6,
                    title:'Appliances',
                    value:'Appliances',
                    backgroundColor: '#D4E09B'
                }
            ]
        },
        {
            index:2,
            title: constants.Maintenance.Plumbers,
            value: constants.Maintenance.Plumbers,
            text:'',
            backgroundColor: '#2CADAD',
            layoutType:'Grid',
            headingTitle: 'Select Issue',
            nextBtnText: 'Other',
            categoryImageDetails:{
                categoryImage: require('./../../../../images/Plumber.png'),
                categoryImageWidth: 48,
                categoryImageHeight:48,
            },
            items:[
                {
                    index:1,
                    title:'Taps and Pipes',
                    value:'Taps and Pipes',
                    backgroundColor: '#2CADAD'
                },
                {
                    index:2,
                    title:'Water Pressure',
                    value:'Water Pressure',
                    backgroundColor: '#2CADAD'
                },
                {
                    index:3,
                    title:'Drain',
                    value:'Drain',
                    backgroundColor: '#2CADAD'
                },
                {
                    index:4,
                    title:'Toilet',
                    value:'Toilet',
                    backgroundColor: '#2CADAD'
                },
                {
                    index:5,
                    title:'Basin & Sink',
                    value:'Basin & Sink',
                    backgroundColor: '#2CADAD'
                },
                {
                    index:6,
                    title:'Bath & Shower',
                    value:'Bath & Shower',
                    backgroundColor: '#2CADAD'
                }
            ]
        },
        {
            index:3,
            title: constants.Maintenance.ApplianceRepair,
            value: constants.Maintenance.ApplianceRepair,
            text:'',
            backgroundColor: '#BD8B8B',
            layoutType:'Stack',
            headingTitle: 'Select Applicance',
            nextBtnText: 'Other',
            categoryImageDetails:{
                categoryImage: require('./../../../../images/Plumber.png'),
                categoryImageWidth: 48,
                categoryImageHeight:48,
            },
            items:[
                {
                    index:1,
                    title:'Microwave',
                    value:'Microwave',
                    backgroundColor: '#BD8B8B',
                    iconType:'microwave',
                    width:20,
                    height:16,
                    fillColor: '#F2F0F0'
                },
                {
                    index:2,
                    title:'Washing Machine',
                    value:'Washing Machine',
                    backgroundColor: '#BD8B8B',
                    iconType:'washingmachine',
                    width:17,
                    height:21,
                    fillColor: '#FFF'
                },
                {
                    index:3,
                    title:'Refrigerator & Freezers',
                    value:'Refrigerator & Freezers',
                    backgroundColor: '#BD8B8B',
                    iconType:'refrigerator',
                    width:16,
                    height:20,
                    fillColor: '#F2F0F0'
                },
                {
                    index:4,
                    title:'Dryers',
                    value:'Dryers',
                    backgroundColor: '#BD8B8B',
                    iconType:'dryer',
                    width:20,
                    height:16,
                    fillColor: '#F2F0F0'
                },
                {
                    index:5,
                    title:'TV',
                    value:'TV',
                    backgroundColor: '#BD8B8B',
                    iconType:'tv',
                    width:22,
                    height:20,
                    fillColor: '#F2F0F0'
                },
                {
                    index:6,
                    title:'Chimney/Cooker Food',
                    value:'Chimney/Cooker Food',
                    backgroundColor: '#BD8B8B',
                    iconType:'chimney',
                    width:22,
                    height:20,
                    fillColor: 'none'
                },
                {
                    index:7,
                    title:'Boiler',
                    value:'Boiler',
                    backgroundColor: '#BD8B8B',
                    iconType:'boiler',
                    width:20,
                    height:25,
                    fillColor: '#FFF'
                },
                {
                    index:8,
                    title:'Air Conditioner(A/C)',
                    value:'Air Conditioner(A/C)',
                    backgroundColor: '#BD8B8B',
                    iconType:'airconditioner',
                    width:20,
                    height:21,
                    fillColor: '#FFF'
                },
                {
                    index:9,
                    title:'Electric Shower',
                    value:'Electric Shower',
                    backgroundColor: '#BD8B8B',
                    iconType:'electricShower',
                    width:20,
                    height:21,
                    fillColor: '#FFF'
                },
                {
                    index:10,
                    title:'Radiator',
                    value:'Radiator',
                    backgroundColor: '#BD8B8B',
                    iconType:'radiator',
                    width:19,
                    height:19,
                    fillColor: '#FFF'
                }
            ]
        },
        {
            index:4,
            title: constants.Maintenance.Painters,
            value: constants.Maintenance.Painters,
            text:'',
            backgroundColor: '#D58A1B',
            layoutType:'Grid',
            headingTitle: 'Select Issue',
            nextBtnText: 'Other',
            categoryImageDetails:{
                categoryImage: require('./../../../../images/Plumber.png'),
                categoryImageWidth: 48,
                categoryImageHeight:48,
            },
            categoryImageHeight:48,
            items:[
                {
                    index:1,
                    title:'Home Painting',
                    value:'Home Painting',
                    backgroundColor: '#D58A1B'
                },
                {
                    index:2,
                    title:'Water Proofing',
                    value:'Water Proofing',
                    backgroundColor: '#D58A1B'
                },
                {
                    index:3,
                    title:'Textured Walls',
                    value:'Textured Walls',
                    backgroundColor: '#D58A1B'
                },
                {
                    index:4,
                    title:'Wood Publishing',
                    value:'Wood Publishing',
                    backgroundColor: '#D58A1B'
                },
                {
                    index:5,
                    title:'Wallpaper',
                    value:'Wallpaper',
                    backgroundColor: '#D58A1B'
                },
                {
                    index:6,
                    title:'Mould',
                    value:'Mould',
                    backgroundColor: '#D58A1B'
                }
            ]
        },
        {
            index:5,
            title: constants.Maintenance.Carpenters,
            value: constants.Maintenance.Carpenters,
            text:'',
            backgroundColor: '#D38C55',
            layoutType:'Grid',
            headingTitle: 'Select Issue',
            nextBtnText: 'Other',
            categoryImageDetails:{
                categoryImage: require('./../../../../images/Plumber.png'),
                categoryImageWidth: 48,
                categoryImageHeight:48,
            },
            items:[
                {
                    index:1,
                    title:'Furniture Assembling',
                    value:'Furniture Assembling',
                    backgroundColor: '#D38C55'
                },
                {
                    index:2,
                    title:'Furniture Repair',
                    value:'Furniture Repair',
                    backgroundColor: '#D38C55'
                },
                {
                    index:3,
                    title:'Bed',
                    value:'Bed',
                    backgroundColor: '#D38C55'
                },
                {
                    index:4,
                    title:'Door',
                    value:'Door',
                    backgroundColor: '#D38C55'
                },
                {
                    index:5,
                    title:'Windows',
                    value:'Windows',
                    backgroundColor: '#D38C55'
                },
                {
                    index:6,
                    title:'Cupboard & Drawers',
                    value:'Cupboard & Drawers',
                    backgroundColor: '#D38C55'
                }
            ]
        },
        {
            index:6,
            title: constants.Maintenance.Gardening,
            value: constants.Maintenance.Gardening,
            text:'',
            backgroundColor: '#CA9AA5',
            layoutType:'Grid',
            headingTitle: 'Select Issue',
            nextBtnText: 'Other',
            categoryImageDetails:{
                categoryImage: require('./../../../../images/Plumber.png'),
                categoryImageWidth: 48,
                categoryImageHeight:48,
            },
            items:[
                {
                    index:1,
                    title:'Weed Removal',
                    value:'Weed Removal',
                    backgroundColor: '#CA9AA5'
                },
                {
                    index:2,
                    title:'Tree Cutting',
                    value:'Tree Cutting',
                    backgroundColor: '#CA9AA5'
                },
                {
                    index:3,
                    title:'Garden Waste Removal',
                    value:'Garden Waste Removal',
                    backgroundColor: '#CA9AA5'
                },
                {
                    index:4,
                    title:'Garden Maintainance',
                    value:'Garden Maintainance',
                    backgroundColor: '#CA9AA5'
                },
                {
                    index:5,
                    title:'Hedge Trimming',
                    value:'Hedge Trimming',
                    backgroundColor: '#CA9AA5'
                },
                {
                    index:6,
                    title:'Landscaping',
                    value:'Landscaping',
                    backgroundColor: '#CA9AA5'
                }
            ]
        }
    ];

    return (
        <View style={{padding:'10%', marginBottom:20, width:'100%'}}>
            <Text h3 style={{color:'#fff'}}>Select a service</Text>
            <FlatList
                style={[styles.flatListContainer,{marginTop:20, marginBottom:20}]}
                data={serviceData}
                contentContainerStyle = {{flexGrow: 1, justifyContent: 'center'}}
                renderItem={({ item,index }) => (
                    <ServiceCards title={item.title}
                        index = {index}
                        {...item}
                        onPress={handleRaiseRequestServiceTypeSelection}
                        {...(raiseRequestServiceType === item.value &&
                        { backgroundColor: OmniHouseTheme.palette.primary.vector})}
                    />)}
                keyExtractor={item => item.index}
                numColumns={2}
            />
            <TouchableOpacity
                style={screeen1Style.nextButton}>
                <Text style={{color:'#000', fontSize: 16}}>Other</Text>
            </TouchableOpacity>
        </View>
    )
}

const screeen1Style = StyleSheet.create({
    nextButton:{
        width:'100%',
        backgroundColor: "#A75DD4", 
        padding: 15,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:20
    }
})
export default Screen1;