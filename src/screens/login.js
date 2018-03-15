import React from 'react';
import { Button, Text, View } from 'react-native';
LoginScreen EmailForm from '../components/login/form/email-form';

const LoginScreen = ({ navigation }) => (
    <View style={{ flex: 1, flexDirection: 'column', padding: 20 }}>
        <EmailForm onSubmit={value => Alert.alert('Submitted!', value.email)} />

        <Button large onPress={() => navigation.dispatch({ type: 'Login' })} title="Continue">
            <Text>Continue</Text>
        </Button>
    </View>);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

LoginScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
    title: 'Log In',
};

export default LoginScreen;
