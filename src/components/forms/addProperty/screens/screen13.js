import React, { useState } from 'react';
import { View, FlatList,StyleSheet, TouchableOpacity,Image } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import IconButton from '../../../cards/iconButton/index.js';
import CircleButton from '../../../cards/circleButton/index.js';
import constants from '../../../../constants.js';
import styles from './forms.Style.js';
import { useDispatch, useSelector } from 'react-redux';

import {propertyCertificateData} from '../../../../data/propertyCertificates.js';

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../../selection.json';
import { addPropertyCertificateDetails } from '../../../../store/actions/addPropertyAction.js';
import { GasSafe,Delete } from '../../../../images/index.js';

const CustomIcon = createIconSetFromIcoMoon(
  icoMoonConfig
);

const Screen13 = (props) => {
    const dispatch = useDispatch();


    const [selectedPropertyCerticate, setSelectedPropertyCerticate] = useState();
    const addPropertyCertificateCallBack = (response) => {
        dispatch(addPropertyCertificateDetails(response));
    }

    const propertyCertificates = useSelector(state => state.addProperty.propertyCertificates);
    
    const handlePropertyCertificateSelection = (content) => {
        setSelectedPropertyCerticate(content);
        const selectedPropertyCert = propertyCertificateData.find(x => x.value ==  content);
        props.navigation.navigate('Screen12',{
            onGoBack: addPropertyCertificateCallBack,
            additionalParams:selectedPropertyCert
        });
    }

    const handleSubmit = () => {
        props.navigation.navigate('Screen14');
    }

    return (
                <FlatList
                ListHeaderComponent={
                    <Text h4 style={styles.headText}>Upload the property's certificate</Text>
                }
                style={{marginBottom:25}}
                contentContainerStyle = {uploadedCertificateScreenStyles.propertyCertificateContainer}
                data={propertyCertificateData}
                renderItem={({ item }) => 
                    <IconButton title={item.title}
                        value={item.value}  
                        icon={item.icon}
                        onPress={handlePropertyCertificateSelection}
                        {...(selectedPropertyCerticate === item.value && { backgroundColor: 'purple'})}
                    />
                }
                ListFooterComponent={
                    <View>
                        <TouchableOpacity
                            style={uploadedCertificateScreenStyles.bookCertificateCheck}>
                            <CustomIcon
                                name='Certificate'
                                size={20}
                                color="white"
                                style={{marginLeft:5}}
                                />
                                <Text style={uploadedCertificateScreenStyles.bookCertificateCheckBtn}>Book a certificate check</Text>
                        </TouchableOpacity>
                        { propertyCertificates && propertyCertificates.length > 0 && (
                            <FlatList
                                ListHeaderComponent = {
                                    <Text style={uploadedCertificateScreenStyles.uploadedCertificateHeader}>Uploaded Certificates</Text>
                                }
                                    style={uploadedCertificateScreenStyles.uploadedCertificateList}
                                    data={propertyCertificates}
                                    contentContainerStyle={{width:'100%'}}
                                    renderItem={({ item }) => 
                                    <View style={uploadedCertificateScreenStyles.imageFlatListItem}> 
                                        <Image 
                                            source={GasSafe}
                                        />
                                        <View style={uploadedCertificateScreenStyles.uploadedCertificateBody}>
                                            <Text style={uploadedCertificateScreenStyles.uploadedCertificateBodyText}>{item.uploadedText}</Text>
                                            <Text style={{color:'#fff'}}>Expiry Date</Text>
                                        </View>
                                        <Image  
                                        source={Delete}
                                        style = {{marginRight:5}}
                                        />
                                    </View>
                                    }
                                    keyExtractor={item => item.fileName}
                                    numColumns={1}
                                />
                            )
                        }
                        <View style={styles.buttonContainer}>
                                            <Button
                                                icon={
                                                    <Icon
                                                        name='navigate-next'
                                                        type='materialicons'
                                                        size={30}
                                                        color="white"
                                                    />
                                                }
                                            iconRight
                                            type="clear"
                                            titleStyle={{color:'white'}}
                                            buttonStyle={styles.nextButton}
                                            title="Next"
                                            onPress={handleSubmit}/>
                                        </View>
                    </View>
                }
                keyExtractor={item => item.index}
                numColumns={2}
                />
    )
}
const uploadedCertificateScreenStyles = StyleSheet.create({
    uploadedCertificateList:{
        marginTop : 20,
        marginBottom : 20
    },
    imageFlatListItem:{
        flexDirection:'row',
        backgroundColor:'darkgreen',
        borderRadius:15,
        padding:15,
        marginBottom: 15,
        alignItems: 'center',
    },
    propertyCertificateContainer:{
        flexGrow: 1, 
        justifyContent: 'center',
        alignItems:'center'
    },
    bookCertificateCheck:{
        width:'100%',
        backgroundColor: "#93227F", 
        padding: 15,
        marginTop:15,
        marginBottom: 20, 
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:20
    },
    bookCertificateCheckBtn:{
        color:'#fff', 
        fontSize:16, 
        marginLeft: 10
    },
    uploadedCertificateHeader:{
        color:'#fff',
        fontSize:16, 
        marginBottom:20
    },
    uploadedCertificateBody:{
        flexDirection:'column',
        marginLeft:10,
        flexGrow:1
    },
    uploadedCertificateBodyText:{
        color:'#fff', 
        fontSize:18
    }
});

export default Screen13;