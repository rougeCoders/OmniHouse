import React from 'react';
import { View, ScrollView,FlatList,StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { useSelector } from 'react-redux';
import styles from './home.style.js';
import HomeHeader from '../../components/home/homeHeader.js';
import HomeNavigation from '../../components/home/homeNavigation.js';
import StackWithIcon from './../../components/cards/stackWithIcon/index.js';
import StackWithoutIcon from './../../components/cards/stackWithoutIcon/index.js';

const HomeScreen = (props) => {
    
    const user = useSelector(state => state.auth.user);
    const homeCategories = [
        {
            title:'Live Properties',
            subTitle:'LIVE',
            description:'',
            dateText:'',
            iconType:'',
            iconWidth:'',
            iconHeight:'',
            backgroundColor:'#981C45',
            backgroundIconColor:'#C11853',
            variationType:'stack'
        },
        {
            title:'Calendar',
            subTitle:'19 Arthur Road',
            description:'Viewing Request Accepted',
            dateText:'Date confirmed: 16:00 07/03/2021',
            iconType:'calendar',
            iconWidth:'36',
            iconHeight:'40',
            fillColor:'#F2F0F0',
            backgroundColor:'#3B637D',
            backgroundIconColor:'#457B9D',
            variationType:'stackwithicon'
        },
        {
            title:'Inventory',
            subTitle:'25 Wolsey Road',
            description:'John has confirmed...',
            dateText:'Signed date: 13:12 09/01/2021',
            iconType:'inventory',
            iconWidth:'40',
            iconHeight:'32',
            fillColor:'#F2F0F0',
            backgroundColor:'#B1764A',
            backgroundIconColor:'#D38C55',
            variationType:'stackwithicon'
        },
        {
            title:'Messages',
            subTitle:'25 Wolsey Road',
            description:'John has confirmed...',
            dateText:'Date confirmed: 16:00 07/03/2021',
            iconType:'messages',
            iconWidth:'40',
            iconHeight:'40',
            fillColor:'#F2F0F0',
            backgroundColor:'#36394F',
            backgroundIconColor:'#3D405B',
            variationType:'stackwithicon'
        },
        {
            title:'Maintenance',
            subTitle:'19 Arthur Road',
            description:'Viewing Request Accepted',
            dateText:'Date confirmed: 16:00 07/03/2021',
            iconType:'maintenance',
            iconWidth:'41',
            iconHeight:'43',
            fillColor:'#F2F0F0',
            backgroundColor:'#894FAD',
            backgroundIconColor:'#A75DD4',
            variationType:'stackwithicon'
        },
        {
            title:'Marketplace',
            subTitle:'19 Arthur Road',
            description:'Viewing Request Accepted',
            dateText:'Date confirmed: 16:00 07/03/2021',
            iconType:'marketplace',
            iconWidth:'40',
            iconHeight:'37',
            fillColor:'#F2F0F0',
            backgroundColor:'#278277',
            backgroundIconColor:'#2A9D8F',
            variationType:'stackwithicon'
        },
        {
            title:'Documents',
            subTitle:'19 Arthur Road',
            description:'Viewing Request Accepted',
            dateText:'Date confirmed: 16:00 07/03/2021',
            iconType:'inventory',
            iconWidth:'42',
            iconHeight:'30',
            fillColor:'#F2F0F0',
            backgroundColor:'#1B943D',
            backgroundIconColor:'#1CB145',
            variationType:'stackwithicon'
        },
        {
            title:'Wallet',
            subTitle:'19 Arthur Road',
            description:'Viewing Request Accepted',
            dateText:'Date confirmed: 16:00 07/03/2021',
            iconType:'wallet',
            iconWidth:'38',
            iconHeight:'36',
            fillColor:'#F2F0F0',
            backgroundColor:'#B13377',
            backgroundIconColor:'#C33682',
            variationType:'stackwithicon'
        }
    ]
    const handleCategoryTypeSelection = (content) => {
    }
    return(
        <>
            <HomeHeader />
            <ScrollView style={styles.container}>
                <View>
                    <Text h4 style={styles.welcomeText}>Hey {user.name},</Text>
                </View>
                <HomeNavigation {...props} />
                <FlatList
                    data={homeCategories}
                    style={{margin:8}}
                    contentContainerStyle = {{flexGrow: 1, justifyContent: 'center'}}
                    renderItem={({ item,index }) => (
                        { ...item.variationType == "stack"?
                            <StackWithoutIcon
                                index = {index}
                                {...item}
                                onPress={handleCategoryTypeSelection}
                            />
                            : 
                            <StackWithIcon 
                                index = {index}
                                {...item}
                                onPress={handleCategoryTypeSelection}
                            />
                        }  
                    )}
                    keyExtractor={item => item.index}
                    numColumns={1}
                />
            </ScrollView>
        </>
    )
}

export default HomeScreen;