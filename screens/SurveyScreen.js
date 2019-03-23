import React, { Component } from 'react';
import {Text} from 'native-base';
import { View, StyleSheet, Button, ScrollView } from 'react-native';

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
  constructor() {
    super();
    this.state = { printText: false };
  }

  showText = () => {
    this.setState({ printText: true });
  }

  static navigationOptions = {
    title: 'Survey',
  };
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
    const { navigate } = this.props.navigation;
    navigate('Home');
  }

  render() {
    return (
<<<<<<< HEAD
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
         <Button
      onPress={() => this.showText() } 
      title="Search!"
      color="#841584" />
=======
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
>>>>>>> 2e690ce5723112da2d80623b1b44a6b00074b41e
        <Form
          ref={c => this._form = c}
          type={User}
          options={options}
        />
<<<<<<< HEAD
       
     
</ScrollView>
      
=======
        <Button
          onPress={() => this.showText()}
          title="Search!"
          color="#841584" />
        {this.state.printText && <Text>  </Text>}
      </ScrollView>

>>>>>>> 2e690ce5723112da2d80623b1b44a6b00074b41e
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
    padding: 20
  },
});
