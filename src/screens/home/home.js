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
            backgroundColorGradient:[
                '#E74C3C',
                'rgba(231,76,60,0.3)'
            ],
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
            backgroundColorGradient:[
                '#457B9D',
                'rgba(69,123,157,0.6)'
            ],
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
            backgroundColorGradient:[
                '#C88552',
                'rgba(211,140,85,0.6)'
            ],
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
            backgroundColorGradient:[
                '#3D405B',
                'rgba(61,64,91,0.6)'
            ],
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
            backgroundColorGradient:[
                '#A75DD4',
                'rgba(167,93,212,0.6)'
            ],
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
            backgroundColorGradient:[
                '#2A9D8F',
                'rgba(42,157,143,0.6)'
            ],
            backgroundIconColor:'#2A9D8F',
            variationType:'stackwithicon'
        },
        {
            title:'Documents',
            subTitle:'19 Arthur Road',
            description:'Viewing Request Accepted',
            dateText:'Date confirmed: 16:00 07/03/2021',
            iconType:'documents',
            iconWidth:'43',
            iconHeight:'32',
            fillColor:'#F2F0F0',
            backgroundColorGradient:[
                '#1CB145',
                'rgba(28,177,69,0.6)'
            ],
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
            backgroundColorGradient:[
                '#C33682',
                'rgba(195,54,130,0.6)'
            ],
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
                <View style={{marginLeft:8}}>
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