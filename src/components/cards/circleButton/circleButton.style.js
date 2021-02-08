import { StyleSheet } from 'react-native';

const styles = (props) => StyleSheet.create({

    buttonContainer: {
      padding:5,
      margin:5,
      borderRadius:props.circleDiameter !== undefined? props.circleDiameter/2 : 20,
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor: 'purple',
      height: props.circleDiameter !== undefined? props.circleDiameter : 40,
      width:props.circleDiameter !== undefined? props.circleDiameter : 40,
    },
    disabled:{
      backgroundColor:'#b19cd9',
    },
});

export default styles;