import React from 'react';
import { TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './email-text-input.style';

/**
 * to be wrapped with redux-form Field component
 */
export default function EmailTextInput(props) {
    const { input, meta, ...inputProps } = props;

    // Do not display warning if the field has not been touched or if it's currently being edited
    const validationStyles = meta.touched && !meta.active
        ? meta.valid ? styles.valid : styles.invalid : null;

    return (
        <View style={[styles.inputContainer, validationStyles]}>
            <TextInput
                {...inputProps}
                onChangeText={input.onChange}
                onBlur={input.onBlur}
                onFocus={input.onFocus}
                value={input.value}
                style={styles.input}
            />
        </View>
    );
}

EmailTextInput.propTypes = {
    input: PropTypes.shape({
        onBlur: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        onFocus: PropTypes.func.isRequired,
        value: PropTypes.any.isRequired
    }).isRequired,
    meta: PropTypes.shape({
        active: PropTypes.bool.isRequired,
        error: PropTypes.string,
        invalid: PropTypes.bool.isRequired,
        pristine: PropTypes.bool.isRequired,
        visited: PropTypes.bool.isRequired
    }).isRequired
};
