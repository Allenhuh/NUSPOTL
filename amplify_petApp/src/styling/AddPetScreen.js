import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    title:{
        fontSize: 30,
        alignItems:'center',
        justifyContent:'center',
        fontWeight:'bold',
        marginTop: 20,
        color:'#121431'
    },
    titleContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#ccd1d8',
      },
      roundImage: {
        backgroundColor: '#CBE7ED',
        width:200,
        height:200,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
      },
      roundImageText:{
        justifyContent:'center',
        fontSize: 18,
        marginTop: 20,
        color: "#E16428",
        fontWeight:'bold'
      },
      contentsContainer: {
        height: '100%',
        alignItems:'center',
        marginTop: 20,
      }
})

export default styles