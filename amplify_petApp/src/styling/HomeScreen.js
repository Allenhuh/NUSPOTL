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
    subtext: {
        marginTop: 15,
        fontSize: 20,
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
      inputContainer: {
        alignItems:'center',
        color:'#CBE7ED',
        justifyContent: 'center',
        paddingTop: '5%',
      }
})

export default styles