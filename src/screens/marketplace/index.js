import React,{ useState }  from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity,StyleSheet,ScrollView,FlatList,Modal } from "react-native";
import { Text } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import ServiceCards from './../../components/cards/serviceCards/index.js';
import MarketPlaceNavigator from '../../navigation/marketPlace.js';

const MarketPlace = (props) => {

    const handlePress = () => {
        props.onPress(props);
    } 

    const [maintenanceType, setMaintenanceType] = useState('');  

    const [maintenanceCategory, setMaintenanceCategory] = useState('');  

    const [maintenanceModalVisible, setMaintenanceModalVisible] = useState(false);

    const disableBackButton = () => {}

    const handleMaintenanceModalCloseCallback = () => {
        setMaintenanceModalVisible(false);
    }

    const handleMaintenanceTypeSelection = (content) => {
        setMaintenanceType(content.value);
        setMaintenanceCategory(content);
        setMaintenanceModalVisible(true);
    }

    const marketPlaceCategories = [
        {
            index:1,
            title:'Listing on portals',
            value:'Listing on portals',
            backgroundColor: '#D4E09B',
            textAlignmentVertical:'bottom',
            textAlignmentHorizontal:'left',
            agencies:[
                {
                    title:'OmniHouse',
                    bookingText:'BOOK',
                    iconType:'omnihouse',
                    iconWidth: 97,
                    iconHeight : 70
                },
                {
                    title:'Rentprofile',
                    bookingText:'BOOK',
                    iconType:'rentProfile',
                    iconWidth: 97,
                    iconHeight : 70
                },
                {
                    title:'Veri-check',
                    bookingText:'BOOK',
                    iconType:'veriCheck',
                    iconWidth: 97,
                    iconHeight : 70
                }
            ],
            agencyCategries:[
                {
                    title:'Comprehensive Check',
                    items:[
                        {
                            title: 'Omnihouse'
                        },
                        {
                            title: 'Rentprofile'
                        },
                        {
                            title: 'Veri-check'
                        }
                    ],
                    subItems:[
                        {
                            title:'Price',
                            items:[
                                {
                                    title:'£100'
                                },
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£200'
                                }
                            ]
                        },
                        {
                            title:'Affordability',
                            items:[
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£400'
                                },
                                {
                                    title:'£400'
                                }
                            ]
                        },
                        {
                            title:'Employment',
                            items:[
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£400'
                                },
                                {
                                    title:'£400'
                                }
                            ]
                        }
                    ]
                },
                {
                    title:'Speedy Check',
                    items:[
                        {
                            title: 'Omnihouse'
                        },
                        {
                            title: 'Rentprofile'
                        },
                        {
                            title: 'Veri-check'
                        }
                    ],
                    subItems:[
                        {
                            title:'Price',
                            items:[
                                {
                                    title:'£100'
                                },
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£200'
                                }
                            ]
                        },
                        {
                            title:'Affordability',
                            items:[
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£400'
                                },
                                {
                                    title:'£400'
                                }
                            ]
                        },
                        {
                            title:'Employment',
                            items:[
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£400'
                                },
                                {
                                    title:'£400'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            index:2,
            title:'Reference checks',
            value:'Reference checks',
            backgroundColor: '#B19ACE',
            textAlignmentVertical:'bottom',
            textAlignmentHorizontal:'left',
            agencies:[
                {
                    title:'OmniHouse',
                    bookingText:'BOOK',
                    iconType:'omnihouse',
                    iconWidth: 97,
                    iconHeight : 70
                },
                {
                    title:'Rentprofile',
                    bookingText:'BOOK',
                    iconType:'rentProfile',
                    iconWidth: 97,
                    iconHeight : 70
                },
                {
                    title:'Veri-check',
                    bookingText:'BOOK',
                    iconType:'veriCheck',
                    iconWidth: 97,
                    iconHeight : 70
                }
            ],
            agencyCategries:[
                {
                    title:'Comprehensive Check',
                    items:[
                        {
                            title: 'Omnihouse'
                        },
                        {
                            title: 'Rentprofile'
                        },
                        {
                            title: 'Veri-check'
                        }
                    ],
                    subItems:[
                        {
                            title:'Price',
                            items:[
                                {
                                    title:'£100'
                                },
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£200'
                                }
                            ]
                        },
                        {
                            title:'Affordability',
                            items:[
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£400'
                                },
                                {
                                    title:'£400'
                                }
                            ]
                        },
                        {
                            title:'Employment',
                            items:[
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£400'
                                },
                                {
                                    title:'£400'
                                }
                            ]
                        }
                    ]
                },
                {
                    title:'Speedy Check',
                    items:[
                        {
                            title: 'Omnihouse'
                        },
                        {
                            title: 'Rentprofile'
                        },
                        {
                            title: 'Veri-check'
                        }
                    ],
                    subItems:[
                        {
                            title:'Price',
                            items:[
                                {
                                    title:'£100'
                                },
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£200'
                                }
                            ]
                        },
                        {
                            title:'Affordability',
                            items:[
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£400'
                                },
                                {
                                    title:'£400'
                                }
                            ]
                        },
                        {
                            title:'Employment',
                            items:[
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£400'
                                },
                                {
                                    title:'£400'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            index:3,
            title:'Photography,3D scans and Floorplans',
            value:'Photography,3D scans and Floorplans',
            backgroundColor: '#BD8B8B',
            textAlignmentVertical:'bottom',
            textAlignmentHorizontal:'left',
            agencies:[
                {
                    title:'OmniHouse',
                    bookingText:'BOOK',
                    iconType:'omnihouse',
                    iconWidth: 97,
                    iconHeight : 70
                },
                {
                    title:'Rentprofile',
                    bookingText:'BOOK',
                    iconType:'rentProfile',
                    iconWidth: 97,
                    iconHeight : 70
                },
                {
                    title:'Veri-check',
                    bookingText:'BOOK',
                    iconType:'veriCheck',
                    iconWidth: 97,
                    iconHeight : 70
                }
            ],
            agencyCategries:[
                {
                    title:'Photography',
                    items:[
                        {
                            title: 'Omnihouse'
                        },
                        {
                            title: 'Rentprofile'
                        },
                        {
                            title: 'Veri-check'
                        }
                    ],
                    subItems:[
                        {
                            title:'2 Rooms',
                            items:[
                                {
                                    title:'£100'
                                },
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£200'
                                }
                            ]
                        },
                        {
                            title:'3 Rooms',
                            items:[
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£400'
                                },
                                {
                                    title:'£400'
                                }
                            ]
                        }
                    ]
                },
                {
                    title:'3D Scans',
                    items:[
                        {
                            title: 'Omnihouse'
                        },
                        {
                            title: 'Rentprofile'
                        },
                        {
                            title: 'Veri-check'
                        }
                    ],
                    subItems:[
                        {
                            title:'2 Rooms',
                            items:[
                                {
                                    title:'£100'
                                },
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£200'
                                }
                            ]
                        },
                        {
                            title:'3 Rooms',
                            items:[
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£400'
                                },
                                {
                                    title:'£400'
                                }
                            ]
                        }
                    ]
                },
                {
                    title:'Floorplans',
                    items:[
                        {
                            title: 'Omnihouse'
                        },
                        {
                            title: 'Rentprofile'
                        },
                        {
                            title: 'Veri-check'
                        }
                    ],
                    subItems:[
                        {
                            title:'2 Rooms',
                            items:[
                                {
                                    title:'£100'
                                },
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£200'
                                }
                            ]
                        },
                        {
                            title:'3 Rooms',
                            items:[
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£400'
                                },
                                {
                                    title:'£400'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            index:4,
            title:'Viewing Agents',
            value:'Viewing Agents',
            backgroundColor: '#D58A1B',
            textAlignmentVertical:'bottom',
            textAlignmentHorizontal:'left',
            agencies:[
                {
                    title:'OmniHouse',
                    bookingText:'BOOK',
                    iconType:'omnihouse',
                    iconWidth: 97,
                    iconHeight : 70
                },
                {
                    title:'Rentprofile',
                    bookingText:'BOOK',
                    iconType:'rentProfile',
                    iconWidth: 97,
                    iconHeight : 70
                },
                {
                    title:'Veri-check',
                    bookingText:'BOOK',
                    iconType:'veriCheck',
                    iconWidth: 97,
                    iconHeight : 70
                }
            ],
            agencyCategries:[
                {
                    title:'Comprehensive Check',
                    items:[
                        {
                            title: 'Omnihouse'
                        },
                        {
                            title: 'Rentprofile'
                        },
                        {
                            title: 'Veri-check'
                        }
                    ],
                    subItems:[
                        {
                            title:'Price',
                            items:[
                                {
                                    title:'£100'
                                },
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£200'
                                }
                            ]
                        },
                        {
                            title:'Affordability',
                            items:[
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£400'
                                },
                                {
                                    title:'£400'
                                }
                            ]
                        },
                        {
                            title:'Employment',
                            items:[
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£400'
                                },
                                {
                                    title:'£400'
                                }
                            ]
                        }
                    ]
                },
                {
                    title:'Speedy Check',
                    items:[
                        {
                            title: 'Omnihouse'
                        },
                        {
                            title: 'Rentprofile'
                        },
                        {
                            title: 'Veri-check'
                        }
                    ],
                    subItems:[
                        {
                            title:'Price',
                            items:[
                                {
                                    title:'£100'
                                },
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£200'
                                }
                            ]
                        },
                        {
                            title:'Affordability',
                            items:[
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£400'
                                },
                                {
                                    title:'£400'
                                }
                            ]
                        },
                        {
                            title:'Employment',
                            items:[
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£400'
                                },
                                {
                                    title:'£400'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            index:5,
            title:'Inventory Checks',
            value:'Inventory Checks',
            backgroundColor: '#D38C55',
            textAlignmentVertical:'bottom',
            textAlignmentHorizontal:'left',
            agencies:[
                {
                    title:'OmniHouse',
                    bookingText:'BOOK',
                    iconType:'omnihouse',
                    iconWidth: 97,
                    iconHeight : 70
                },
                {
                    title:'Rentprofile',
                    bookingText:'BOOK',
                    iconType:'rentProfile',
                    iconWidth: 97,
                    iconHeight : 70
                },
                {
                    title:'Veri-check',
                    bookingText:'BOOK',
                    iconType:'veriCheck',
                    iconWidth: 97,
                    iconHeight : 70
                }
            ],
            agencyCategries:[
                {
                    title:'Comprehensive Check',
                    items:[
                        {
                            title: 'Omnihouse'
                        },
                        {
                            title: 'Rentprofile'
                        },
                        {
                            title: 'Veri-check'
                        }
                    ],
                    subItems:[
                        {
                            title:'Price',
                            items:[
                                {
                                    title:'£100'
                                },
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£200'
                                }
                            ]
                        },
                        {
                            title:'Affordability',
                            items:[
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£400'
                                },
                                {
                                    title:'£400'
                                }
                            ]
                        },
                        {
                            title:'Employment',
                            items:[
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£400'
                                },
                                {
                                    title:'£400'
                                }
                            ]
                        }
                    ]
                },
                {
                    title:'Speedy Check',
                    items:[
                        {
                            title: 'Omnihouse'
                        },
                        {
                            title: 'Rentprofile'
                        },
                        {
                            title: 'Veri-check'
                        }
                    ],
                    subItems:[
                        {
                            title:'Price',
                            items:[
                                {
                                    title:'£100'
                                },
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£200'
                                }
                            ]
                        },
                        {
                            title:'Affordability',
                            items:[
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£400'
                                },
                                {
                                    title:'£400'
                                }
                            ]
                        },
                        {
                            title:'Employment',
                            items:[
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£400'
                                },
                                {
                                    title:'£400'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            index:6,
            title:'Certificate Renewal',
            value:'Certificate Renewal',
            backgroundColor: '#CA9AA5',
            textAlignmentVertical:'bottom',
            textAlignmentHorizontal:'left',
            agencies:[
                {
                    title:'OmniHouse',
                    bookingText:'BOOK',
                    iconType:'omnihouse',
                    iconWidth: 97,
                    iconHeight : 70
                },
                {
                    title:'Rentprofile',
                    bookingText:'BOOK',
                    iconType:'rentProfile',
                    iconWidth: 97,
                    iconHeight : 70
                },
                {
                    title:'Veri-check',
                    bookingText:'BOOK',
                    iconType:'veriCheck',
                    iconWidth: 97,
                    iconHeight : 70
                }
            ],
            agencyCategries:[
                {
                    title:'Comprehensive Check',
                    items:[
                        {
                            title: 'Omnihouse'
                        },
                        {
                            title: 'Rentprofile'
                        },
                        {
                            title: 'Veri-check'
                        }
                    ],
                    subItems:[
                        {
                            title:'Price',
                            items:[
                                {
                                    title:'£100'
                                },
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£200'
                                }
                            ]
                        },
                        {
                            title:'Affordability',
                            items:[
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£400'
                                },
                                {
                                    title:'£400'
                                }
                            ]
                        },
                        {
                            title:'Employment',
                            items:[
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£400'
                                },
                                {
                                    title:'£400'
                                }
                            ]
                        }
                    ]
                },
                {
                    title:'Speedy Check',
                    items:[
                        {
                            title: 'Omnihouse'
                        },
                        {
                            title: 'Rentprofile'
                        },
                        {
                            title: 'Veri-check'
                        }
                    ],
                    subItems:[
                        {
                            title:'Price',
                            items:[
                                {
                                    title:'£100'
                                },
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£200'
                                }
                            ]
                        },
                        {
                            title:'Affordability',
                            items:[
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£400'
                                },
                                {
                                    title:'£400'
                                }
                            ]
                        },
                        {
                            title:'Employment',
                            items:[
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£400'
                                },
                                {
                                    title:'£400'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            index:7,
            title:'Insurance',
            value:'Insurance',
            backgroundColor: '#D38C55',
            textAlignmentVertical:'bottom',
            textAlignmentHorizontal:'left',
            agencies:[
                {
                    title:'OmniHouse',
                    bookingText:'BOOK',
                    iconType:'omnihouse',
                    iconWidth: 97,
                    iconHeight : 70
                },
                {
                    title:'Rentprofile',
                    bookingText:'BOOK',
                    iconType:'rentProfile',
                    iconWidth: 97,
                    iconHeight : 70
                },
                {
                    title:'Veri-check',
                    bookingText:'BOOK',
                    iconType:'veriCheck',
                    iconWidth: 97,
                    iconHeight : 70
                }
            ],
            agencyCategries:[
                {
                    title:'Comprehensive Check',
                    items:[
                        {
                            title: 'Omnihouse'
                        },
                        {
                            title: 'Rentprofile'
                        },
                        {
                            title: 'Veri-check'
                        }
                    ],
                    subItems:[
                        {
                            title:'Price',
                            items:[
                                {
                                    title:'£100'
                                },
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£200'
                                }
                            ]
                        },
                        {
                            title:'Affordability',
                            items:[
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£400'
                                },
                                {
                                    title:'£400'
                                }
                            ]
                        },
                        {
                            title:'Employment',
                            items:[
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£400'
                                },
                                {
                                    title:'£400'
                                }
                            ]
                        }
                    ]
                    
                },
                {
                    title:'Speedy Check',
                    items:[
                        {
                            title: 'Omnihouse'
                        },
                        {
                            title: 'Rentprofile'
                        },
                        {
                            title: 'Veri-check'
                        }
                    ],
                    subItems:[
                        {
                            title:'Price',
                            items:[
                                {
                                    title:'£100'
                                },
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£200'
                                }
                            ]
                        },
                        {
                            title:'Affordability',
                            items:[
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£400'
                                },
                                {
                                    title:'£400'
                                }
                            ]
                        },
                        {
                            title:'Employment',
                            items:[
                                {
                                    title:'£300'
                                },
                                {
                                    title:'£400'
                                },
                                {
                                    title:'£400'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            index:8,
            title:'Cruise Control',
            value:'Insurance',
            backgroundColor: '#2E2E2E',
            fontColor:'#FFF',
            textAlignmentVertical:'bottom',
            textAlignmentHorizontal:'left',
            subTitle:'coming soon',
            agencies:[
                {
                    title:'OmniHouse',
                    bookingText:'BOOK',
                    iconType:'omnihouse',
                    iconWidth: 97,
                    iconHeight : 70
                },
                {
                    title:'Rentprofile',
                    bookingText:'BOOK',
                    iconType:'rentProfile',
                    iconWidth: 97,
                    iconHeight : 70
                },
                {
                    title:'Veri-check',
                    bookingText:'BOOK',
                    iconType:'veriCheck',
                    iconWidth: 97,
                    iconHeight : 70
                }
            ]
        },
        {
            index:9,
            title:'Home services',
            value:'Home services',
            backgroundColor: '#2E2E2E',
            fontColor:'#FFF',
            textAlignmentVertical:'bottom',
            textAlignmentHorizontal:'left',
            subTitle:'coming soon',
            agencies:[
                {
                    title:'OmniHouse',
                    bookingText:'BOOK',
                    iconType:'omnihouse',
                    iconWidth: 97,
                    iconHeight : 70
                },
                {
                    title:'Rentprofile',
                    bookingText:'BOOK',
                    iconType:'rentProfile',
                    iconWidth: 97,
                    iconHeight : 70
                },
                {
                    title:'Veri-check',
                    bookingText:'BOOK',
                    iconType:'veriCheck',
                    iconWidth: 97,
                    iconHeight : 70
                }
            ]
        }
    ];
    return(
        <ScrollView>
            <View style={[marketPlaceScreenStyle.flatListContainer,{padding:'10%', marginBottom:20, width:'100%'}]}>
                <Text h4 style={{color:"#fff",marginBottom:20}}>Marketplace</Text>
                <FlatList
                        data={marketPlaceCategories}
                        contentContainerStyle = {{flexGrow: 1, justifyContent: 'center'}}
                        renderItem={({ item,index }) => (
                            <ServiceCards title={item.title}
                                index = {index}
                                {...item}
                                count = {marketPlaceCategories.length}
                                onPress={handleMaintenanceTypeSelection}
                                {...(maintenanceType === item.value &&
                                { backgroundColor: OmniHouseTheme.palette.primary.vector})}
                            />)}
                        keyExtractor={item => item.index}
                        numColumns={2}
                        ListFooterComponent={
                            <View>
                                <Text style={{color:'#fff', marginTop:20, fontSize:20, fontWeight:'700'}}>Offers</Text>
                                <TouchableOpacity
                                    style={[marketPlaceScreenStyle.nextButton,{backgroundColor:'#24867A'}]}>
                                    <Text style={{color:'#FFF', fontSize: 16}}>10% off all purchases.</Text>
                                    <Text style={{color:'#FFF', fontSize: 12}}>Offer ends midnight on  24/05/2021.</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[marketPlaceScreenStyle.nextButton,{backgroundColor:'#2D602C'}]}>
                                    <Text style={{color:'#FFF', fontSize: 16}}>Free Omnihouse reference check.</Text>
                                    <Text style={{color:'#FFF', fontSize: 12}}>Offer can be claimed whenever.</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    />
                <View>
                    <Modal 
                        animationType="slide"
                        transparent={false}
                        visible={maintenanceModalVisible}
                        onRequestClose={disableBackButton}
                        >
                        <MarketPlaceNavigator 
                        selectedItem = {maintenanceCategory}
                        handleCallback={handleMaintenanceModalCloseCallback}/>
                    </Modal> 
                </View>
            </View>
        </ScrollView>
    )
}      

const marketPlaceScreenStyle = StyleSheet.create({
    flatListContainer:{
        alignSelf: 'center',
        marginBottom: OmniHouseTheme.spacing(0.25),
    },
    nextButton:{
        width:'100%',
        backgroundColor: "#A75DD4", 
        padding: 15,
        borderRadius:10,
        marginTop:15
    }
})

export default MarketPlace;