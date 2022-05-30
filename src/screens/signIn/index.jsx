import React, { useEffect, useState }  from 'react';
import { View, Text, ImageBackground, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { COLORS } from '../../constants/theme';
import { auth } from '../firebase';


const SignInScreen = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('main')
      }
    })

    return unsubscribe
  }, [])
  
  const handleLogin = () => {
    auth 
      .signInWithEmailAndPassword(email,password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Inicio de :', user.email);
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
                        <Text style={styles.title}>Bienvenido</Text>
                        <Text style={styles.subtitle}>Inicia Sesión para continuar</Text>
                </View>
                <View style={styles.dataContainer}>
                        <TextInput placeholder='Usuario' value={email} onChangeText={text => setEmail(text)} style={styles.textinput} placeholderTextColor={COLORS.white} />
                        <TextInput placeholder='Contraseña' value={password} onChangeText={text => setPassword(text)} style={styles.textinput} placeholderTextColor={COLORS.white} secureTextEntry/>
                </View>
                <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={handleLogin /*=> navigation.navigate('main')*/}>
                            <View style={styles.button1}>
                                <Text style={styles.btnText}>Iniciar Sesión</Text>
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
                                <Text style={styles.btnText}> Continua con facebook</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('forgotpwd')}>
                            <Text style={styles.text}>¿Olvidaste tu contraseña? | Click Aqui</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                            <Text style={styles.text}>¿No tienes una cuenta? | Registrate</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>

        </View>
    )
} 


export default SignInScreen;

