import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
// import firebase from 'react-native-firebase';
import * as appActions from '../../actions/index';

class Login extends Component {
    /** Changes the root value of the app to be 'after-login', changing it to tab view */
    onLoginPress() {
        this.props.dispatch(appActions.login());
    }

    render() {
        return (
            <View>
                <Button large onPress={() => this.onLoginPress()} title="Continue">
                    <Text>Continue</Text>
                </Button>
            </View>
        );
    }
}

/* It does not modify the component class passed to it;
instead, it returns a new, connected component class for you to use. */
export default connect()(Login);
