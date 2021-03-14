import React,{ useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity,StyleSheet,ActivityIndicator,FlatList,TouchableWithoutFeedback } from "react-native";
import { Image, Text,Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import {firebase} from '../../../../firebase/firebase.js';
import OmniHouseIcon from '../../../../images/OmniHouseIcon.js';
import  ActiveSection  from '../../../cards/activeSection/index.js';
import { GasSafe,Delete,OmniHouse } from '../../../../images/index.js';
import Accordion from 'react-native-collapsible/Accordion';

const Screen1 = (props) => {

    const [raisedMaintainenceRequest ,setRaisedMaintainenceRequest] = useState();
    const [isLoading ,setIsLoading] = useState(true);

    const [selectedMarketPlaceAccordion, setSelectedMarketPlaceAccordion] =  useState([0]);

    

    const addAmenitiesHandler = (section,isActive) => {
    }

    const renderAccHeader = (section,_, isActive) => {
        return (
            <View style={screeen1Style.accordionItemHeaderStyle}>
                    <Text style={screeen1Style.accordionItemHeaderTextStyle}>{section.title}</Text>
                    <Icon 
                        name={isActive?'keyboard-arrow-up':'keyboard-arrow-down'} 
                        size={30}
                        type = 'materialicons'
                        color = '#fff'
                    />
            </View>
        )
    }

    const renderAccContent = (section,_, isActive) => {
        return ( 
            <View>
                <FlatList
                    data={section.items}
                    contentContainerStyle = {{flexGrow: 1, justifyContent: 'center', marginBottom:10}}
                    renderItem={({ item,index }) => (
                        <View style={{flex:1,alignItems:'center'}}>
                            <Text style={{color:'#FFF'}}>{item.title}</Text>
                        </View>
                    )}
                    keyExtractor={item => item.index}
                    numColumns={3}
                />
                <FlatList
                    data={section.subItems}
                    contentContainerStyle = {{flexGrow: 1, justifyContent: 'center', marginBottom:30}}
                    renderItem={({ item,index }) => (
                        <View style={{marginBottom:20}}>
                            <Text style={{color:'#FFF', textAlign:'center', marginBottom:10}}>{item.title}</Text>
                            <FlatList
                                data={item.items}
                                renderItem={({ item,index }) => (
                                    <View style={{flex:1}}>
                                        <Text style={{color:'#FFF', textAlign:'center'}}>{item.title}</Text>
                                    </View>
                                )}
                                keyExtractor={item => item.index}
                                numColumns={3}
                                listKey={item => item.index}
                            />
                        </View>
                        
                    )}
                    keyExtractor={item => item.index}
                    numColumns={1}
                />
            </View>
        )
    }

    const onChangeAccordionItem = (section) => {
        setSelectedMarketPlaceAccordion(section);
    }


    

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
                        contentContainerStyle = {{flexGrow: 1, justifyContent: 'center', marginBottom:30}}
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
                 <Accordion
                        sections={selectedMarketPlaceCategory.agencyCategries}
                        activeSections={selectedMarketPlaceAccordion}
                        renderHeader={renderAccHeader}
                        renderContent={renderAccContent}
                        onChange = {onChangeAccordionItem}
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
    },
    accordionItemHeaderStyle:{
        flexDirection:'row',
        padding:10,
        backgroundColor:'#5C4B58',
        borderRadius:5,
        marginBottom:25
    },
    accordionItemHeaderTextStyle:{
        color:'#fff', 
        fontSize:20, 
        flexGrow:1,
        textAlign:'center'
    }
})
export default Screen1;