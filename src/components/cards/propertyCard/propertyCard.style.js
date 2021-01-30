import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container:{
      padding:5,
      paddingRight:10,
      flexDirection:'row',
    },
    buttonContainer: {
      padding:5,
      marginBottom:20,
      alignItems: 'center',
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor:'#554050',
      borderRadius:10,
      width:'100%'
    },
    progrssBarContainer:{
      width:180,
      height:5,
      borderRadius:20,
      backgroundColor:'#E6C3E0'
    },
    progressBar:{
      height:5,
      borderRadius:20,
      backgroundColor:'#93227F'
    },
    progressText:{},
    badge:{
      width:0
    }
});