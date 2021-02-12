import React, { useState } from 'react';
import { View,FlatList,ScrollView,TouchableOpacity,Dimensions,StyleSheet } from 'react-native';
import { Text, Button,Icon } from 'react-native-elements';
import IconButton from './../../../cards/iconButton/index.js';
import constants from './../../../../constants.js';
import styles from './forms.Style.js';
import CalendarPicker from 'react-native-calendar-picker';
import { useDispatch } from 'react-redux';
import { isPropertyNotOccupied } from '../../../../store/actions/addPropertyAction.js';
import OmniHouseTheme from '../../../../styles/theme.js';
import TenantsHeader  from '../../../cards/tenantsHeader/index.js';
import TenantsFooter  from '../../../cards/tenantsFooter/index.js';

const Screen4 = (props) => {

    const [isNotOccupied, setIsNotOccupied] = useState(false);
    const [isTenants, setIsTenants] = useState('')
    

    const dispatch = useDispatch();

    const handleTenantSelection = (content) => {
        setIsTenants(content);
        if(content == constants.Labels.Yes){
            setIsNotOccupied(false);
        }else{
            setIsNotOccupied(true);
        }
    }

    const handleSubmit = () => {
        dispatch(isPropertyNotOccupied(isNotOccupied))
        props.navigation.navigate('Screen5');
    }

   
    const propertyTypeData = [
        {
            index:1,
            title: constants.Labels.Yes,
            value: constants.Labels.Yes,
            text:'I’m here for Omnihouse’s awsome property management tools',
        },
        {
            index:2,
            title: constants.Labels.No,
            value: constants.Labels.No,
            text:'Find me superior tenants',
        }
    ];

    return (
        <FlatList
            ListHeaderComponent={
                <TenantsHeader styles={styles}></TenantsHeader>
            }
            style={[styles.flatListContainer,{padding:'10%', marginBottom:20}]}
            data={propertyTypeData}
            contentContainerStyle = {{flexGrow: 1, justifyContent: 'center'}}
            renderItem={({ item }) => (
                <IconButton title={item.title}
                    {...item}
                    onPress={handleTenantSelection}
                    {...(isTenants === item.value &&
                    { backgroundColor: OmniHouseTheme.palette.primary.vector})}
                />)}
            keyExtractor={item => item.index}
            ListFooterComponent={
                <TenantsFooter styles={styles} isNotOccupied={isNotOccupied} onHandleSubmit={handleSubmit}></TenantsFooter>
            }
            numColumns={2}
        />
    )
}

const isTenantScreen = StyleSheet.create({
    containerStyle:{
        justifyContent:'center', 
        flexGrow:1
    },
    containerChildStyle:{
        padding: '10%',
        marginBottom:25 
    }
});
 


export default Screen4;