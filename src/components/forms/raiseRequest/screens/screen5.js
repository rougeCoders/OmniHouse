import React, { useState,useEffect } from 'react';
import { View,FlatList,StyleSheet,TouchableOpacity ,TextInput} from 'react-native';
import { Text, Input, Button, Icon,Image } from 'react-native-elements';
import constants from '../../../../constants.js';
import styles from './raiseRequest.style.js';
import ServiceCards from '../../../cards/serviceCards/index.js';
import ServiceCardsWithIcon from '../../../cards/serviceCardsWithIcon/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { GasSafe,Delete,Plumber } from '../../../../images/index.js';
import { addRaiseRequestImages } from '../../../../store/actions/addRaiseRequest.js';
import { ScrollView } from 'react-native-gesture-handler';
import  ActiveSection  from '../../../cards/activeSection/index.js';
import {firebase} from '../../../../firebase/firebase.js';
import moment from 'moment';


const Screen3 = (props) => {

    const dispatch = useDispatch();
    const raiseRequestTypes = useSelector(state => state.addRaiseRequest);
    const user = useSelector(state => state.auth.user);

    const currentTime = moment().utcOffset('+05:30').format('hh:mm a DD/MM/YYYY');

    useEffect(() => {
        const userRaisedMaintainenceRequest = {...raiseRequestTypes, ...user , requestRaisedTime:currentTime }
        const raisedRequestTable = firebase.firestore().collection('raisedMaintainenceRequest');
        raisedRequestTable.add(userRaisedMaintainenceRequest);
    },[])

    const activeStages = [
        {
            title:'Requested',
            iconType:'checked',
            fillColor:'#fff',
            iconWidth:'18',
            iconHeight:'13',
            backGroundColor:'#1CB145',
            backGroundColorChecked:'#1CB145'
        },
        {
            title:'Inspection',
            iconType:'inspection',
            fillColor:'#fff',
            iconWidth:'12',
            iconHeight:'20',
            backGroundColor:'#D38C55',
            backGroundColorChecked:'#1CB145'
        },
        {
            title:'Action',
            iconType:'action',
            fillColor:'#fff',
            iconWidth:'21',
            iconHeight:'22',
            backGroundColor:'#93227F',
            backGroundColorChecked:'#1CB145'
        },
        {
            title:'Finished',
            iconType:'checked',
            fillColor:'#fff',
            iconWidth:'18',
            iconHeight:'13',
            backGroundColor:'#93227F',
            backGroundColorChecked:'#1CB145'
        }
    ];
    

    return (
        <ScrollView>
            <View style={{padding:'10%', marginBottom:20, width:'100%'}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{alignSelf:'center'}}>
                        <Image  
                            source={raiseRequestTypes.raiseRequestCategoryTypeImage.categoryImage}
                            style={{width:raiseRequestTypes.raiseRequestCategoryTypeImage.categoryImageWidth,height:raiseRequestTypes.raiseRequestCategoryTypeImage.categoryImageHeight, borderRadius:raiseRequestTypes.raiseRequestCategoryTypeImage.categoryImageWidth/2}}
                        />
                    </View>
                    <View style={{flexDirection:'column', marginLeft: 20}}>
                        <Text style={{color:'#fff', fontSize:20, marginBottom:10}}>{raiseRequestTypes.raiseRequestCategoryType}</Text>
                        <Text style={{color:'#fff'}}>{raiseRequestTypes.raiseRequestCategorySubType}</Text>
                    </View>
                </View>
                <View style={{alignItems:'center', marginTop: 30}}>
                    <View style={{width:250,height:250, borderRadius:125,backgroundColor:'#000', justifyContent:'center'}}>
                        <Text style={{color:'#fff', fontSize: 20, textAlign:'center'}}>Your Request is raised successfully</Text>
                    </View>
                </View>
                <View>
                    <ActiveSection activeStagesData={activeStages} title="Active" subTitle="Tap on the stage to confirm dates or if the issue is resolved"/>
                </View>
            </View>
        </ScrollView>
    )
}

const screeen3Style = StyleSheet.create({
    nextButton:{
        width:'100%',
        backgroundColor: "#A75DD4", 
        padding: 15,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:20,
        marginTop: 20
    },
    imageFlatList:{
        marginTop : 20,
        marginBottom : 20
    },
    imageFlatListItem:{
        flex:1
    },
    imageStyle: {
        height: 84,
        margin: 5,
    },
    dashedBorderContainer:{
        width: 84,
        height: 84,
        borderWidth: 3,
        borderColor: "#517fa4",
        borderStyle: "dashed",
        borderRadius: 5,
        marginTop: 15,
        marginBottom: 15,
        justifyContent: 'center'
    },
    plusIconContainer:{
        justifyContent:'center',
        alignItems:'stretch',
        width:18,
        height:18, 
        position:'absolute',
        bottom:-9,
        right:-9
    },
    plusIcon:{
        backgroundColor:'#93227F',
        color:'#fff', 
        textAlign:'center'
    },
    nextButton:{
        width:'100%',
        backgroundColor: "#93227F", 
        padding: 15,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:20,
        marginTop: 20
    },
    textareaContainer:{
        backgroundColor:'gray',
        marginTop:30,
        height: 110,
        padding: 10,
        marginBottom: 20
    }
})
export default Screen3;