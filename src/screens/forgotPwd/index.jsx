import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

const ForgotPwdScreen = () => {
    return(
        
        <View style={styles.container}>
            <Text style={styles.title}>Has olvidado tu contraseña?</Text>
            <Text style={styles.subtitle}>Ingrese su dirección de correo electrónico a continuación y le enviaremos un correo electrónico con instrucciones sobre cómo cambiar su contraseña.</Text>
            <View>
                <TextInput placeholder='Ingrese su correo' style={styles.textinput} />
            </View>
            <TouchableOpacity onPress={() => {}}>
                <View style={styles.button}>
                    <Text style={styles.buttonTxt}>Enviar</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ForgotPwdScreen;

