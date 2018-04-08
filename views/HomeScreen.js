import React from 'react';
import { View, Text, Button } from 'react-native';

export class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        this.props.navigation.navigate('Details', {
                            itemId: 86,
                            otherParam: 'Details', //for details screen
                            name: 'Homer J. Simpson'
                        });
                    }}
                />
            </View>
        );
    }
}