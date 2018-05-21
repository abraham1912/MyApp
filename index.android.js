import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

class MyApp extends Component {
    render() {
        return (
            <Text onPress={()=>alert("123")}>Hello world!</Text>
       );
    }
}

AppRegistry.registerComponent('MyApp', () => MyApp);
