import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity,StyleSheet,TextInput,FlatList} from "react-native";
import { Image, Text,Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import  ActiveSection  from '../../../cards/activeSection/index.js';

const Screen2 = (props) => {

    let itemDetail = props.route.params.response;
    console.log(itemDetail);
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

    return(
        <ScrollView>
            <View style={{padding:'10%', marginBottom:20, width:'100%'}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{alignSelf:'center'}}>
                        <Image  
                            source={itemDetail.raiseRequestCategoryTypeImage.categoryImage}
                            style={{width:itemDetail.raiseRequestCategoryTypeImage.categoryImageWidth,height:itemDetail.raiseRequestCategoryTypeImage.categoryImageHeight, borderRadius:itemDetail.raiseRequestCategoryTypeImage.categoryImageWidth/2}}
                        />
                    </View>
                    <View style={{flexDirection:'column', marginLeft: 20}}>
                        <Text style={{color:'#fff', fontSize:20, marginBottom:10}}>{itemDetail.raiseRequestCategoryType}</Text>
                        <Text style={{color:'#fff'}}>{itemDetail.raiseRequestCategorySubType}</Text>
                    </View>
                </View>
                <View style={{marginTop:25}}>
                    <Text style={{color:'#fff'}}>Issue Description</Text>
                    <TextInput
                            style={screeen2Style.textareaContainer}
                            underlineColorAndroid="transparent"
                            placeholder="Issue Description"
                            placeholderTextColor="#fff"
                            numberOfLines={10}
                            value={itemDetail.raiseRequestIssueDescription}
                            multiline={true}
                            editable={false}
                            defaultValue = "Issue Description"
                    />
                </View>
                <View style={{marginTop: 25}}>
                    { itemDetail.raiseRequestImages && itemDetail.raiseRequestImages.length>0 && (
                        <View>
                            <Text style={{color:'#fff',fontSize:20,marginBottom:8}}>Attachments</Text>
                            <FlatList
                                    style = {screeen2Style.imageFlatList}
                                    data={itemDetail.raiseRequestImages}
                                    renderItem={({ item }) => 
                                        <View style={screeen2Style.imageFlatListItem}> 
                                            <Image
                                            source={{
                                                uri: item.imageUrl
                                            }}
                                            style={screeen2Style.imageStyle}
                                            />
                                        </View>
                                    }
                                    keyExtractor={item => item.fileName}
                                    numColumns={3}
                                />
                        </View>
                    )}
                </View>
                <View>
                    <ActiveSection activeStagesData={activeStages} title="Action" subTitle="Tap on the stage to update the progress of the issue ticket"/>
                    <View style={{backgroundColor:'#3C313B', padding:20, borderRadius:10, marginTop:20}}>
                        <Text style={{color:'#fff'}}>
                            <Text style={{color:'#fff',fontWeight: "bold"}}>Requested:  </Text>
                            <Text style={{color:'#fff'}}>{itemDetail.requestRaisedTime}</Text>
                        </Text>
                    </View>       
                </View>
            </View>
        </ScrollView>
    )
} 

const screeen2Style = StyleSheet.create({
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
    textareaContainer:{
        backgroundColor:'#31282F',
        marginTop:12,
        height: 110,
        padding: 10,
        color:'#fff'
    }
})

export default Screen2;