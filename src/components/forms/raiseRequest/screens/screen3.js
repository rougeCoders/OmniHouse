import React, { useState } from 'react';
import { View,FlatList,StyleSheet,TouchableOpacity ,TextInput} from 'react-native';
import { Text, Input, Button, Icon,Image } from 'react-native-elements';
import constants from '../../../../constants.js';
import styles from './raiseRequest.style.js';
import ServiceCards from '../../../cards/serviceCards/index.js';
import ServiceCardsWithIcon from '../../../cards/serviceCardsWithIcon/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { GasSafe,Delete,Plumber } from '../../../../images/index.js';
import { addRaiseRequestImages,addRaiseRequestIssueDescription } from '../../../../store/actions/addRaiseRequest.js';
import { ScrollView } from 'react-native-gesture-handler';

const Screen3 = (props) => {

    const dispatch = useDispatch();
    const raiseRequestTypes = useSelector(state => state.addRaiseRequest);

    const raiseRequestImages = useSelector(state => state.addRaiseRequest.raiseRequestImages);

    const [issueDescription, setIssueDescription] = useState('');

    const addRaiseRequestImageCallBack = (response) => {
        dispatch(addRaiseRequestImages(response));
    }

    const showCameraScreen = () => {
        props.navigation.navigate('Screen4',{
            onGoBack: addRaiseRequestImageCallBack,
        });
    }

    const raiseIssue = () => {
        console.log(issueDescription);
        dispatch(addRaiseRequestIssueDescription(issueDescription));
        props.navigation.navigate('Screen5');
    }

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
                <View style={{marginTop: 25}}>

                    <Text style={{color:'#fff',fontSize:20,marginBottom:8}}>Attachments</Text>
                    <Text style={{color:'#fff', marginBottom:15}}>Add clear photos and/or videos of the issue</Text>
                    
                    { raiseRequestImages && raiseRequestImages.length>0 && (

                        <FlatList
                                style = {screeen3Style.imageFlatList}
                                data={raiseRequestImages}
                                renderItem={({ item }) => 
                                <View style={screeen3Style.imageFlatListItem}> 
                                    <Image
                                    source={{
                                        uri: item.uri
                                    }}
                                    style={screeen3Style.imageStyle}
                                    />
                            </View>
                                }
                                keyExtractor={item => item.fileName}
                                numColumns={3}
                            />
                        )
                    }
                    <TouchableOpacity style={screeen3Style.dashedBorderContainer} onPress={showCameraScreen}>
                        <Icon
                            name='camera'
                            type= 'ionicon'
                            color='#517fa4'
                        />
                        <View style={screeen3Style.plusIconContainer}>
                            <Text style={screeen3Style.plusIcon}>
                                +
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:10}}>
                    <Text style={{color:'#fff',fontSize:20, marginBottom:8}}>Issue Description</Text>
                    <Text style={{color:'#fff',fontSize:16}}>Add as much detail as you can! What, when, where.</Text>
                    <TextInput
                            style={screeen3Style.textareaContainer}
                            underlineColorAndroid="transparent"
                            placeholder="Issue Description"
                            placeholderTextColor="#fff"
                            numberOfLines={10}
                            multiline={true}
                            onChangeText={text => setIssueDescription(text)}
                        />
                    <TouchableOpacity onPress={raiseIssue}
                                    style={screeen3Style.nextButton}>
                                    <Text style={{color:'#FFF', fontSize: 16}}>Report Issue</Text>
                    </TouchableOpacity>
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