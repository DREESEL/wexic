import React, { useEffect, useState }  from 'react';
import { View, Text, ImageBackground, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { COLORS } from '../../constants/theme';
import { auth } from '../firebase';


const SignUpScreen = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () => {
        auth 
        .createUserWithEmailAndPassword(email,password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registro de :',user.email);
        })
        .catch(error => alert(error.message))
      }

    return( 
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/background.png')}
                style={{
                    flex: 1
                }}
                resizeMode= "cover"
            >
                <ScrollView>
                    <View style={styles.topContainer}>
                        <Text style={styles.title}>Let's go, imberbe</Text>
                        <Text style={styles.subtitle}>Registrate para continuar</Text>
                    </View>
                    <View style={styles.dataContainer}>
                        <TextInput placeholder='Correo' value={email} onChangeText={text => setEmail(text)} style={styles.textinput} placeholderTextColor={COLORS.white} />
                        <TextInput placeholder='Teléfono' style={styles.textinput} placeholderTextColor={COLORS.white} />
                        <TextInput placeholder='Contraseña' value={password} onChangeText={text => setPassword(text)} style={styles.textinput} placeholderTextColor={COLORS.white}/>
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={handleSignUp}>
                            <View style={styles.button1}>
                                <Text style={styles.btnText}>Registrate</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {}}>
                            <View style={styles.button2}>
                                <View style={styles.logo}>
                                    <Image source={require('../../assets/facebook.png')} 
                                        resizeMode="contain"   
                                        style={{
                                            width: 30,
                                            height: 30,
                                        }}
                                    />
                                </View>
                                <Text style={styles.btnText}>Registrarse con facebook</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('signin')}>
                            <Text style={styles.text}>Ya tienes una cuenta? | Inicia Sesion</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default SignUpScreen;
