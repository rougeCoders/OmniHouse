import React,{ useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity,StyleSheet,ActivityIndicator,FlatList } from "react-native";
import { Image, Text,Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import {firebase} from '../../../../firebase/firebase.js';
import OmniHouseIcon from '../../../../images/OmniHouseIcon.js';
import  ActiveSection  from '../../../cards/activeSection/index.js';

const Screen1 = (props) => {

    const [raisedMaintainenceRequest ,setRaisedMaintainenceRequest] = useState();
    const [isLoading ,setIsLoading] = useState(true);

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
    
    useEffect(() => {
        const raisedRequestTable = firebase.firestore().collection('raisedMaintainenceRequest').get()
        .then(querySnapshot => {
          const raisedRequest = [];
          console.log('Total raise request: ', querySnapshot.size);
          querySnapshot.forEach(documentSnapshot => {
            console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
            const {raiseRequestCategoryType,raiseRequestCategorySubType,raiseRequestIssueDescription,raiseRequestCategoryTypeImage}  = documentSnapshot.data()
            raisedRequest.push({
                index : documentSnapshot.id,
                raiseRequestCategoryType,
                raiseRequestCategorySubType,
                raiseRequestIssueDescription,
                raiseRequestCategoryTypeImage
            })
          });
          setIsLoading(false)
          setRaisedMaintainenceRequest(raisedRequest);
        });
    },[])

    return(
        <ScrollView>
            <View style={{padding:'10%', marginBottom:20, width:'100%'}}>
              <Text h4 style={{color:'#fff', marginBottom:15}}>Raised Requests</Text>
                { isLoading && (
                    <View style={screeen1Style.preloader}>
                        <ActivityIndicator size="large" color="#9E9E9E"/>
                  </View>
                )}
                {
                    !isLoading && (
                        <FlatList
                        data={raisedMaintainenceRequest}
                        renderItem={({ item,index }) => (
                            <View style={{ width:'100%', marginBottom:25}}>
                                <View style={{flexDirection:'row', backgroundColor:'#595C56',flex:1, padding: 8, borderRadius:5}}>
                                    <View style={{alignSelf:'center'}}>
                                        <Image  
                                            source={item.raiseRequestCategoryTypeImage.categoryImage}
                                            style={{width:item.raiseRequestCategoryTypeImage.categoryImageWidth,height:item.raiseRequestCategoryTypeImage.categoryImageHeight, borderRadius:item.raiseRequestCategoryTypeImage.categoryImageWidth/2}}
                                        />
                                    </View>
                                    <View style={{flexDirection:'column', marginLeft: 20, flex: 2}}>
                                        <Text style={{color:'#fff', fontSize:20, marginBottom:5}}>{item.raiseRequestCategoryType}</Text>
                                        <Text style={{color:'#fff', marginBottom:5}}>{item.raiseRequestCategorySubType}</Text>
                                    </View>
                                    <View style={{alignSelf:'center', marginRight:4}}>
                                        <OmniHouseIcon name="textBook" fill="#F2F0F0" width={20} height={20}  />
                                    </View>
                                </View>
                                <View>
                                    <ActiveSection activeStagesData={activeStages} backGroundColor="#3A3339"/>
                                </View>
                            </View>
                        )}
                        keyExtractor={item => item.index}
                        numColumns={1}
                    />
                )}
            </View>
        </ScrollView>
    )
} 

const screeen1Style = StyleSheet.create({
    preloader: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow:1,
        marginTop:20
    }
})
export default Screen1;