import React,{ useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity,StyleSheet,ActivityIndicator,FlatList } from "react-native";
import { Image, Text,Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import {firebase} from '../../../../firebase/firebase.js';
import OmniHouseIcon from '../../../../images/OmniHouseIcon.js';
import  ActiveSection  from '../../../cards/activeSection/index.js';
import { GasSafe,Delete,OmniHouse } from '../../../../images/index.js';

const Screen1 = (props) => {

    const [raisedMaintainenceRequest ,setRaisedMaintainenceRequest] = useState();
    const [isLoading ,setIsLoading] = useState(true);

    const expandRaisedIssueDetail = (itemDetail)  => {
        console.log(itemDetail);
        props.navigation.navigate('Screen2',{
            response: itemDetail
        });
    }
    console.log("Chirag2");
    console.log(props);

    let selectedMarketPlaceCategory = props.route.params.selectedItem;
    
    return(
        <ScrollView>
            <View style={{padding:'10%', marginBottom:20, width:'100%'}}>
              <Text h4 style={{color:'#fff', marginBottom:15}}>{selectedMarketPlaceCategory.title}</Text>

              <FlatList
                        data={selectedMarketPlaceCategory.agencies}
                        contentContainerStyle = {{flexGrow: 1, justifyContent: 'center'}}
                        renderItem={({ item,index }) => (
                            <View style={{flex:1,alignItems:'center'}}>
                                <OmniHouseIcon name={item.iconType} width={item.iconWidth} height={item.iconHeight}  />
                               <Text style={{color:'#FFF'}}>{item.title}</Text>
                               <TouchableOpacity
                                style={screeen1Style.bookButton}>
                                    <Text style={{color:'#FFF', fontSize: 16}}>{item.bookingText}</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        keyExtractor={item => item.index}
                        numColumns={3}
                    />
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
    },
    bookButton:{
        width:'80%',
        backgroundColor: "#D41553", 
        padding: 8,
        borderRadius:20,
        alignItems:'center',
        marginTop: 25
    }
})
export default Screen1;