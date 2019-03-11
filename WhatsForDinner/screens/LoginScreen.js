import React from 'react';

import {StyleSheet, Text, TextInput, View, Button, R} from 'react-native';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };


    render() {
        return(
            <View style={styles.pageContainer} >
                <Text>Welcome!</Text>
                <View style={styles.inputGroupContainer}>
                    <Text>User Name:</Text>
                    <TextInput style={styles.textInput}>Placeholder for password</TextInput>
                </View>
                <View style={styles.inputGroupContainer}>
                    <Text>Password:</Text>
                    <TextInput style={styles.textInput}>Placeholder for password</TextInput>
                </View>
                <Button onPress={()=>{console.log('Navigate to the home page')}} title={'Submit'}/>
                <Text style={styles.hyperLink}>Forgot Password</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputGroupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
    hyperLink: {
        color: 'blue'
    }
});