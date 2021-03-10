import React, { useState } from 'react';
import { View, FlatList, ScrollView, Modal,SectionList } from "react-native";
import { Text, Icon, Button } from 'react-native-elements';
import styles from './maintenance.style.js';
import IconButton from './../../components/cards/iconButton/index.js';
import constants from './../../constants.js';
import OmniHouseTheme from './../../styles/theme.js';
import MaintenanceRaiseIssueNavigator from '../../navigation/maintenanceRaiseReqest.js';
import MaintenanceRaisedIssueNavigator from '../../navigation/maintenanceRaisedReqest.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

const Maintenance = (props) => {

    const [raisedRequestModalVisible, setRaisedRequestModalVisible] = useState(false);
    const [raiseRequestModalVisible, setRaiseRequestModalVisible] = useState(false);

    const handleRaisedRequestCloseCallback = () => {
        setRaisedRequestModalVisible(false);
    }
    const handleRaiseRequestCloseCallback = () => {
        setRaiseRequestModalVisible(false);
    }
    const disableBackButton = () => {}

    const user = useSelector(state => state.auth.user);
    console.log(user);

    const setModalVisibleBasedOnuserType = () => {
        if(user.userType== "Landlord"){
            setRaiseRequestModalVisible(false);
            setRaisedRequestModalVisible(true);
        }else{
            setRaisedRequestModalVisible(false);
            setRaiseRequestModalVisible(true);
        }
    }


    const maintainceTypeData = [
                {
                    index:1,
                    title: constants.Maintenance.RaiseIssue,
                    value: constants.Maintenance.RaiseIssue,
                    text:'',
                    backgroundColor: '#65395C'
                },
                {
                    index:2,
                    title: constants.Maintenance.EmergencyIssue,
                    value: constants.Maintenance.EmergencyIssue,
                    text:'',
                    backgroundColor: '#BA1515'
                }
    ];
    
    return(
        
        <ScrollView>
            <View style={[styles.flatListContainer,{padding:'10%', marginBottom:20, width:'100%'}]}>
                <Text h4 style={{color:'#fff', marginBottom: 20}}>Maintenance</Text>
                <View style={{flexDirection:'row', width:'100%',justifyContent:'space-between'}}>
                    <View style={[{backgroundColor:'#65395C',
                            height: 150,
                            borderRadius: 10,
                            marginRight: 5,
                            flex:1
                            }]}>
                            <TouchableOpacity style={{
                                width:'100%',height:'100%',padding:10,
                                justifyContent: 'flex-end' }}
                                onPress={setModalVisibleBasedOnuserType}
                            >
                            {user.userType == "Landlord" &&(
                                    <Text style={{color:'#fff'}}>Raised Requests</Text>
                            )}
                            {user.userType == "Tenant" &&(
                                    <Text style={{color:'#fff'}}>Raise Issue</Text>
                            )}
                            </TouchableOpacity>
                    </View>
                    <View style={[{backgroundColor:'#BA1515',
                                height: 150,
                                borderRadius: 10,
                                marginLeft: 5,
                                flex:1
                                }]}>
                            <TouchableOpacity style={{
                                width:'100%',height:'100%', padding:10,
                                justifyContent: 'flex-end' }}
                                onPress={() => alert('chirag')}
                            >    
                            {user.userType == "Landlord" &&(
                                    <Text style={{color:'#fff'}}>Emergency Request</Text>
                            )}
                            {user.userType == "Tenant" &&(
                                    <Text style={{color:'#fff'}}>Emergency Issue</Text>
                            )}   
                            </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Modal 
                        animationType="slide"
                        transparent={false}
                        visible={raisedRequestModalVisible}
                        onRequestClose={disableBackButton}>
                        <MaintenanceRaisedIssueNavigator handleCallback={handleRaisedRequestCloseCallback}/>
                    </Modal> 
                    <Modal 
                        animationType="slide"
                        transparent={false}
                        visible={raiseRequestModalVisible}
                        onRequestClose={disableBackButton}>
                        <MaintenanceRaiseIssueNavigator handleCallback={handleRaiseRequestCloseCallback}/>
                    </Modal>    
                </View>
            </View>
        </ScrollView>
    )   
}

export default Maintenance;