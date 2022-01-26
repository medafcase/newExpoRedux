import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity, TouchableWithoutFeedback, StatusBar, KeyboardAvoidingView,
  Keyboard,
  Platform,
  SafeAreaView
} from 'react-native';
import colors from "../assets/colors/colors"

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default function SignInScreen({navigation}){
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return(
      <SafeAreaView  style={styles.container} >
           <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{flex: 1}}
                keyboardVerticalOffset={65}
            >
 
        <View style={styles.headerWrapper}>
          <Image source={{uri: "https://i.imgur.com/UFpDWQn.png"}} style={styles.logoImage} />
        </View>
        <Text style={[styles.redirectText, { marginLeft: 20 }]}>Sign In </Text>
        <View style={styles.contentWrapper}>
          <Text style={styles.contentTitle}> Email Address</Text>
          <View style={styles.inputContent}>
          <Ionicons name="mail" size={24} style={styles.inputIcon} />
            

            <TextInput style={styles. textStyle} placeholder="Your email"   value={email}
          onChangeText={text => setEmail(text)} />
          </View>
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.contentTitle}> Password </Text>
          <View style={styles.inputContent}>
            < FontAwesome name="lock" size={30} style={styles.inputIcon} />

            <TextInput style={styles. textStyle} placeholder="Your password"  value={password}
            secureTextEntry
          onChangeText={text => setPassword(text)}/>
          </View>
        </View>

        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.redirectionWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.redirectText}>Sign Up </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
            <Text style={styles.redirectText}>Forgot Password? </Text>
          </TouchableOpacity>
        </View>
    

         </KeyboardAvoidingView>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  headerWrapper: {
  
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    marginHorizontal: 85,
    marginTop: 46,
    width: 80,
    height: 80,
    resizeMode: "contain"
  },
  contentWrapper: {
    marginHorizontal: 27,
    marginTop: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    borderRadius: 10,
    backgroundColor: colors.white,
    padding: 5,
  },
  contentTitle: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'Lato_700Bold_Italic',
    marginHorizontal: 5,
    color: colors.logC,
  },
  inputContent: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 15,
    paddingBottom: 10,
    // marginBottom: 20,
  },
  inputIcon: {
    marginRight: 15,
  },

  signInButton: {
    marginTop: 40,
    marginHorizontal: 27,
    backgroundColor: "#E74131",
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
  },
  loginText: {
    fontFamily: 'Lato_700Bold',
    fontSize: 18,
    color: colors.white,
  },
  redirectionWrapper: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  redirectText: {
    fontSize: 18,
    fontFamily: 'Lato_700Bold',
    color: colors.logC,
  },
  textStyle:{
     borderColor: "transparent",
        backgroundColor: "#ECECEC",
        borderWidth: 1,
        padding: 10,
        paddingLeft: 15,
        color: "grey",
        borderRadius: 30,
        flex: 1
  },

});
