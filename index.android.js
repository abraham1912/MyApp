import React, { Component } from 'react';
import { AppRegistry, StyleSheet,Text ,View,NativeModules} from 'react-native';

class MyApp extends Component {
    render() {
        return (
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style = {{fontSize:18}}
                onPress={()=>{
                NativeModules.MyNativeModule.tryCallBack("wangchong",'123',(errorCallback)=>{
                    alert(errorCallback)
                },(successCallback)=>{
                    alert(successCallback)
                })
            }}>tryCallBack</Text>

                <Text style = {{fontSize:18,marginTop:30}}
                      onPress={()=>{
                          NativeModules.MyNativeModule.getResult("wangchong",(errorCallback)=>{
                              alert(errorCallback)
                          })
                      }}></Text>
            </View>
       );
    }
}

AppRegistry.registerComponent('MyApp', () => MyApp);
