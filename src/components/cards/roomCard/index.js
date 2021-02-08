import React, { useState } from 'react';
import { View, TouchableOpacity } from "react-native";
import { Icon, Image, Input, Text } from 'react-native-elements';
import constants from '../../../constants.js';
import styles from './roomCard.style.js';

const RoomCard = (props) => {

    const singleBedroom = constants.RoomAttributes.Bedroom.Single;
    const doubleBedroom = constants.RoomAttributes.Bedroom.Double;

    const [title,setTitle] = useState(props.title);
    const [bedroomType, setBedroomType] = useState(props.bedroomType);
    const [isBedroomEnsuite, setIsBedroomEnsuite] = useState(props.isBedroomEnsuite);
    const [hasShower, setHasShower] = useState(props.hasShower);
    const [hasBath, setHasBath] = useState(props.hasBath);
    const [hasOpenPlanKitchen, setHasOpenPlanKitchen] = useState(props.hasOpenPlanKitchen);

    const addRoom = () => {
        props.addSelectedRoom(props.value);
    }

    const deleteRoom = () => {
        props.deleteSelectedRoom(props.value);
    }

    const handleBedroomTypeSelection = () => {
        if(props.Editable)
        {
            if(bedroomType === singleBedroom)
            {
                setBedroomType(doubleBedroom);
            }
            else
            {
                setBedroomType(singleBedroom)
            }
        }
    };

    const roomAttributes = () => {
    const roomType = props.roomType;
        {
            switch(roomType) {
            case constants.RoomType.Bedroom:
                return (<View>
                        <TouchableOpacity onPress={handleBedroomTypeSelection}>
                            <Text style={{...(bedroomType === singleBedroom && { backgroundColor: 'purple'})}}>{singleBedroom}</Text>
                            <Text style={{...(bedroomType === doubleBedroom && { backgroundColor: 'purple'})}}>{doubleBedroom}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> props.Editable !== undefined && setIsBedroomEnsuite(!isBedroomEnsuite)}>
                            <Text style={{...(isBedroomEnsuite && { backgroundColor: 'purple'})}}>{constants.RoomAttributes.Bedroom.Ensuite}</Text>
                        </TouchableOpacity>
                        </View>);

            case constants.RoomType.Bathroom:
                return (<View>
                        <TouchableOpacity onPress={()=> props.Editable !== undefined && setHasShower(!hasShower)}>
                        <Text style={{...(hasShower && { backgroundColor: 'purple'})}}>{constants.RoomAttributes.Bathroom.Shower}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> props.Editable !== undefined && setHasBath(!hasBath)}>
                            <Text style={{...(hasBath && { backgroundColor: 'purple'})}}>{constants.RoomAttributes.Bathroom.Bath}</Text>
                        </TouchableOpacity>
                        </View>);

            case constants.RoomType.Livingroom:
                return (<View>
                        <TouchableOpacity onPress={()=> props.Editable !== undefined && setHasOpenPlanKitchen(!hasOpenPlanKitchen)}>
                            <Text style={{...(hasOpenPlanKitchen && { backgroundColor: 'purple'})}}>{constants.RoomAttributes.Livingroom.OpenPlanKitchen}</Text>
                        </TouchableOpacity>
                        </View>);
            }
        }
    }
    return(
        <View style={{flexDirection:'row'}}>
            <View>
            {
                props.Editable !== undefined?
                (
                <Input
                    onChangeText={(text) => setTitle(text)}
                    value={title} />
                ):
                (<Text>{title}</Text>)
            }
            </View>
            {
                roomAttributes()
            }
            {
                props.Editable !== undefined?
                (<Icon
                    name='add'
                    type='ionicons'
                    color='white'
                    onPress={addRoom}
                    />)
                :(<Icon
                    name='delete_forever'
                    type='materialicons'
                    color='white'
                    onPress={deleteRoom}
                    />)
            }
        </View>
    )

}

export default RoomCard;