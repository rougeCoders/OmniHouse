import React, { useState } from 'react';
import { View, FlatList, ScrollView, Modal,SectionList } from "react-native";
import { Text, Icon, Button } from 'react-native-elements';
import styles from './maintenance.style.js';
import IconButton from './../../components/cards/iconButton/index.js';
import constants from './../../constants.js';
import OmniHouseTheme from './../../styles/theme.js';
import MaintenanceNavigator from '../../navigation/maintenanceRaiseReqest.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Maintenance = (props) => {

    const [raiseRequestModalVisible, setRaiseRequestModalVisible] = useState(false);

    const handleRaiseRequestCloseCallback = () => {
        setRaiseRequestModalVisible(false);
    }
    const disableBackButton = () => {}

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
                                onPress={() => setRaiseRequestModalVisible(true)}
                            >
                                <Text style={{color:'#fff'}}>Raise Issue</Text>
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
                                <Text style={{color:'#fff'}}>Emergency Request</Text>
                            </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Modal 
                        animationType="slide"
                        transparent={false}
                        visible={raiseRequestModalVisible}
                        onRequestClose={disableBackButton}>
                        <MaintenanceNavigator handleCallback={handleRaiseRequestCloseCallback}/>
                    </Modal>    
                </View>
            </View>
        </ScrollView>
    )   
}

export default Maintenance;