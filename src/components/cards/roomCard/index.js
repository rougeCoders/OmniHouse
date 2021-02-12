import React, { useState } from 'react';
import { View, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';
import { Icon, Text } from 'react-native-elements';
import constants from '../../../constants.js';
import styles from './roomCard.style.js';

const RoomCard = (props) => {

    const roomData = props.roomData;
    const singleBedroom = constants.RoomAttributes.Bedroom.Single;
    const doubleBedroom = constants.RoomAttributes.Bedroom.Double;

    const [title,setTitle] = useState(roomData.title);
    const [bedroomType, setBedroomType] = useState(roomData.bedroomType);
    const [isBedroomEnsuite, setIsBedroomEnsuite] = useState(roomData.isBedroomEnsuite);
    const [hasShower, setHasShower] = useState(roomData.hasShower);
    const [hasBath, setHasBath] = useState(roomData.hasBath);
    const [hasOpenPlanKitchen, setHasOpenPlanKitchen] = useState(roomData.hasOpenPlanKitchen);

    const addRoom = () => {
        const roomType = roomData.roomType;
        {
            switch(roomType) {
                case constants.RoomType.Bedroom:
                    roomData.bedroomType = bedroomType;
                    roomData.isBedroomEnsuite = isBedroomEnsuite;
                    break;
                case constants.RoomType.Bathroom:
                    roomData.hasShower = hasShower;
                    roomData.hasBath = hasBath;
                    break;
                case constants.RoomType.Livingroom:
                    roomData.hasOpenPlanKitchen = hasOpenPlanKitchen;
                    break;
            }
        }
        props.addSelectedRoom(roomData);
    }

    const deleteRoom = () => {
        console.log(props.index);
        props.deleteSelectedRoom(props.value);
    }

    const handleBedroomTypeSelection = () => {
        if(props.Editable === true)
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
        const roomType = roomData.roomType;
        {
            switch(roomType) {
            case constants.RoomType.Bedroom:
                return (<View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={{flexDirection:'row'}} onPress={handleBedroomTypeSelection}>
                            <Text style={[styles.text, styles.textLeft,{...(bedroomType === singleBedroom && { backgroundColor: 'green'})}]}>{singleBedroom}</Text>
                            <Text style={[styles.text, styles.textRight,{...(bedroomType === doubleBedroom && { backgroundColor: 'green'})}]}>{doubleBedroom}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> props.Editable === true && setIsBedroomEnsuite(!isBedroomEnsuite)}>
                            <Text style={[styles.text,{...(isBedroomEnsuite && { backgroundColor: 'green'})}]}>{constants.RoomAttributes.Bedroom.Ensuite}</Text>
                        </TouchableOpacity>
                        </View>);

            case constants.RoomType.Bathroom:
                return (<View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=> props.Editable === true && setHasShower(!hasShower)}>
                            <Text style={[styles.text,{...(hasShower && { backgroundColor: 'green'})}]}>{constants.RoomAttributes.Bathroom.Shower}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> props.Editable === true && setHasBath(!hasBath)}>
                            <Text style={[styles.text,{...(hasBath && { backgroundColor: 'green'})}]}>{constants.RoomAttributes.Bathroom.Bath}</Text>
                        </TouchableOpacity>
                        </View>);

            case constants.RoomType.Livingroom:
                return (<View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=> props.Editable === true && setHasOpenPlanKitchen(!hasOpenPlanKitchen)}>
                            <Text style={[styles.text,{...(hasOpenPlanKitchen && { backgroundColor: 'green'})}]}>{constants.RoomAttributes.Livingroom.OpenPlanKitchen}</Text>
                        </TouchableOpacity>
                        </View>);
            }
        }
    }
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.headText}>{title}</Text>
            </View>
            <View style={styles.buttonsContainer}>
            {
                roomAttributes()
            }
            {
                props.Editable === true?
                (<Icon
                    name='add'
                    type='ionicons'
                    color='white'
                    onPress={addRoom}
                    />)
                :(<Icon
                    name='delete'
                    type='materialicons'
                    color='white'
                    onPress={deleteRoom}
                    />)
                }
            </View>
        </View>
    )
}

RoomCard.propTypes = {
    /**
     * Data about room
     */
    roomData: {
        /**
         * Title of the room
         */
        title: PropTypes.string,
        /**
         * Type of the room
         */
        roomType: PropTypes.string,
        /**
         * Type of the bedroom
         */
        bedroomType: PropTypes.string,
        /**
         * Whether bedroo is ensuite or not
         */
        isBedroomEnsuite: PropTypes.bool,
        /**
         * Whether bathroom has shower
         */
        hasShower: PropTypes.bool,
        /**
         * Whether bathroom has bathtub
         */
        hasBath: PropTypes.bool,
        /**
         * Whether living room has open plan kitchen
         */
        hasOpenPlanKitchen: PropTypes.bool,
    },
    /**
    * Whether card is editable
    */
    Editable: PropTypes.bool,
  };

export default RoomCard;