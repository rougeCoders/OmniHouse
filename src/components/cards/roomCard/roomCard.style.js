import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
      padding:5,
      margin:5,
      borderRadius:10,
      flexDirection:'row',
      alignItems: 'center',
      justifyContent:'space-between',
      backgroundColor: 'grey',
    },
    text:{
      minWidth:50,
      padding:5,
      margin:5,
      borderRadius:10,
      fontSize:14,
      textAlign:'center',
      color:'white'
    },
    textLeft:{
      marginRight:0,
      borderTopRightRadius:0,
      borderBottomRightRadius:0
    },
    textRight:{
      marginLeft:0,
      borderTopLeftRadius:0,
      borderBottomLeftRadius:0
    },
    buttonsContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    }
});