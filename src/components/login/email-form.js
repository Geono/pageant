import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { ScrollView, Text, TouchableOpacity } from 'react-native';

import EmailTextInput from './email-text-input';
import styles from '../../styles/login/email-form.style';

function EmailForm(props) {
    return (
        <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
            <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Email Address</Text>
            <Field
                name="email"
                component={EmailTextInput}
                placeholder="someone@somewhere.com"
            />
            <TouchableOpacity onPress={props.handleSubmit}>
                <Text style={styles.formSubmit}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const validate = emailAddress =>
    (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailAddress)) ? 'Invalid email address' : null;

export default reduxForm({
    form: 'email-login',
    validate,
})(EmailForm);
