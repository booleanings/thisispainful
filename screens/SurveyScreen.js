import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;
const Gender = t.enums({
    M: 'Male',
    F: 'Female'
  });
  
const User = t.struct({
  name: t.String,
  zipCode: t.Number,
  age: t.Number,
  protection: t.Boolean,
  sexualPartners: t.Number,
  gender: Gender
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {
  },
  stylesheet: formStyles,
};

export default class SurveyScreen extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
    this.props.navigation.navigate('HomeScreen');
  }
  
  render() {
    return (
      <View style={styles.container}>
       <Button
          title="Sign Up!"
          onPress={this.handleSubmit}
        />
        <Form 
          ref={c => this._form = c}
          type={User} 
          options={options}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
