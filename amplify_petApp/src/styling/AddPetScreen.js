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
      dogImageContainer:{
        flexDirection: "column", 
        alignItems:'center', 
        justifyContent:'center',
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
      image: {
        resizeMode: "stretch",
        height: 200,
        width: 200,
        borderRadius: 100,
        alignItems:'center',
        justifyContent:'center',
      },
      contentsContainer: {
        height: '100%',
        alignItems:'center',
        marginTop: 20,
      },
      input: {
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#E16428',
        marginVertical: 1,
        fontSize: 15,
        width: 250,
        
      },
      buttonContainer: {
        backgroundColor: '#E16428',
        marginVertical: 20,
        padding: 6,
        borderRadius: 5,
        alignItems: 'center',
        width: 250
      },
      buttonText: {
        color: '#fff',
        fontSize: 24,
      }
})

export default styles