import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import constants from '../../../../constants.js';
import styles from './forms.Style.js';
import { useDispatch, useSelector } from 'react-redux';
import { addRoomsDetails } from '../../../../store/actions/addPropertyAction.js';
import RoomCard from '../../../cards/roomCard/index.js';
import { ScrollView } from 'react-native-gesture-handler';
import OmniHouseTheme from '../../../../styles/theme.js';

const Screen10 = (props) => {

    const dispatch = useDispatch();
    const rooms = useSelector(state => state.addProperty.roomsDetails);
    const [roomsList, setRoomsList] = useState(rooms);

    const handleRoomAddition = (content) => {
        content.uniqueKey = content.roomType + Math.random().toString(16).substring(4, 8) + Math.random().toString(16).substring(4, 8);
        roomsList.push(content);
        setRoomsList(roomsList);
    }
    const handleRoomDeletion = (index) => {
        roomsList.splice(index, 1);
        //setRoomsList(roomsList);
    }

    const handleSubmit = () => {
        dispatch(addRoomsDetails(roomsList))
        props.navigation.navigate('Screen11');
    }

    const roomTypesData = [
        {
            title:constants.RoomType.Bedroom,
            roomType:constants.RoomType.Bedroom,
            bedroomType:constants.RoomAttributes.Bedroom.Double,
            isBedroomEnsuite:false,
        },
        {
            title:constants.RoomType.Bathroom,
            roomType:constants.RoomType.Bathroom,
            hasShower: false,
            hasBath: false,
        },
        {
            title:constants.RoomType.Livingroom,
            roomType:constants.RoomType.Livingroom,
            hasOpenPlanKitchen: false,
        }
    ];

    return (
        <View  style={styles.formContainer}>
        <View style={{padding:'10%'}}>
            <Text h4 style={styles.headText}>Please add the rooms within the property by pressing the plus icon</Text>

            {
                roomTypesData.map((item, index) => (
                    <RoomCard key={index} roomData={item}
                        addSelectedRoom={handleRoomAddition}
                        Editable={true}
                        //{...(billsList.indexOf(item.value) >= 0 && { backgroundColor: 'purple'})}
                    />))
            }
            <ScrollView>
            {
                roomsList.map((item, index) => (
                    <RoomCard key={index} index={index} roomData={item}
                        deleteSelectedRoom={handleRoomDeletion}
                    />))
            }
            </ScrollView>

                <View style={styles.buttonContainer}>
                    <Button
                        icon={
                            <Icon
                                name='navigate-next'
                                type='materialicons'
                                size={OmniHouseTheme.spacing(4)}
                                color={OmniHouseTheme.palette.primary.font}
                            />
                        }
                    iconRight
                    type="clear"
                    titleStyle={styles.nextButtonTitle}
                    buttonStyle={styles.nextButton}
                    title="Next"
                    onPress={handleSubmit}/>
                </View>
        </View>
        </View>
    )
}

export default Screen10;