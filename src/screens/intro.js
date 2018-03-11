import React, { Component } from 'react';
import { Alert, Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as appActions from '../actions/index';
import EmailForm from '../components/login/form/email-form';

class Intro extends Component {

    /** Changes the root value of the app to be 'after-login', changing it to tab view */
    onLoginPress() {
        this.props.dispatch(appActions.login());
    }

    handleSubmit(values) {
        console.log(values);
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', padding: 20 }}>
                <EmailForm onSubmit={value => Alert.alert('Submitted!', value.email)} />
                <Button large onPress={() => this.onLoginPress()} title="Continue">
                    <Text>Continue</Text>
                </Button>
            </View>
        );
    }
}

/* It does not modify the component class passed to it;
instead, it returns a new, connected component class for you to use. */
export default connect()(Intro);
