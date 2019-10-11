import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';

export default function ProfileScreen() {
  const [usernameValue, onChangeUsername] = React.useState('Username');
  const [emailValue, onChangeEmail] = React.useState('Email');
  const [passwordValue, onChangePassword] = React.useState('Password');
  const [cpasswordValue, onChangeCPassword] = React.useState('Password');

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/profile.png')
                : require('../assets/images/profile.png')
            }
            style={styles.welcomeImage}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 5}}>
          <TextInput
            style={{ width: '80%', padding: 5, height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeUsername(text)}
            value={usernameValue}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 15}}>
          <TextInput
            style={{ width: '80%', padding: 5, height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeEmail(text)}
            value={emailValue}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 15}}>
          <TextInput
            style={{ width: '80%', padding: 5, height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangePassword(text)}
            secureTextEntry={true}
            value={passwordValue}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 15}}>
          <TextInput
            style={{ width: '80%', padding: 5, height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeCPassword(text)}
            secureTextEntry={true}
            value={cpasswordValue}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 15}}>
          <TouchableOpacity
             style={{ border: '1px solid black', backgroundColor: '#6495ED', width: '80%', height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center'}}
          >
            <Text 
              style={{ color: 'white'}}
              onPress={() => Alert.alert('Successfully saved !')}
            >
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

ProfileScreen.navigationOptions = {
  title: 'Profile Screen',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 0,
    marginLeft: -10,
  },
});
