import React from 'react'
import { StyleSheet, View,Button,TextInput} from 'react-native'


class Search extends React.Component {

    render(){
        return (
            <View style={styles.main_container}>
                <TextInput placeholder="Titre du film" style={styles.TextInput}></TextInput>
                <Button title="Rechercher" onPress={() => {}}></Button>
            </View>

        )
    }
}
const styles = StyleSheet.create({

    main_container : {
        flex:1,
        marginTop:50
    },


    TextInput: {marginLeft: 5, 
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5 
    
    }

})

    

export default Search;