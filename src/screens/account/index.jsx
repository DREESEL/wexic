import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import styles from './styles';
import { auth } from '../firebase';

const AccountScreen = ({ navigation }) => {

    const handleSignOut = () => {
        auth
          .signOut()
          .then(() =>  {
            navigation.navigate('auth')
          })
          .catch(error => alert(error.message))
      }
      
    return(
        <View style={styles.container}>
        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity
          onPress={handleSignOut}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign Out </Text>
        </TouchableOpacity>
      </View>
    )
}

export default AccountScreen;

