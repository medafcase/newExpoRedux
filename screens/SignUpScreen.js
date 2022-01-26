import React from 'react';
import {
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
TouchableOpacity,  TouchableWithoutFeedback,
ScrollView,
  Button,
  Keyboard,
} from 'react-native';

import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import colors from "../assets/colors/colors"
export default function SignUpScreen({navigation}){

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView style={styles.inner}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View >
      
        <View style={styles.headerWrapper}>
          <Image source={{uri: "https://i.imgur.com/UFpDWQn.png"}} style={styles.logoImage} />
          <Text style={styles.redirectText}>Account Signup </Text>
        </View>
   <Text style={styles.contentTitle}>Full Name </Text>
        <View style={styles.contentWrapper}>
          <View style={styles.contentConte}>
            <Octicons
              name="person"
             
              size={30}
              color="#E8522D"
            />
            <TextInput
              style={styles.contentInput}
              placeholder="Your Name"
              placeholderTextColor={colors.logC}
            />
          </View>
        </View>
 <Text style={styles.contentTitle}>Email </Text>
            <View style={styles.contentWrapper}>
          <View style={styles.contentConte}>
           <Ionicons name="mail"
              size={32}
              color="#E8522D"
            />
            <TextInput
              style={styles.contentInput}
              placeholder="Your Email" 
              placeholderTextColor={colors.logC}
            />
          </View>
        </View>
        <Text style={styles.contentTitle}>Contact Phone </Text>
    <View style={styles.contentWrapper}>
          <View style={styles.contentConte}>
            <FontAwesome name="phone"
              size={32}
              color="#E8522D"
            />
            <TextInput
              style={styles.contentInput}
              placeholder="Your Phone Number" 
              placeholderTextColor={colors.logC}
            />
          </View>
        </View>
 <Text style={styles.contentTitle}>Password </Text>
        <View style={styles.contentWrapper}>
          <View style={styles.contentConte}>
            <FontAwesome name="lock" size={30}
              color="#E8522D"
            />
            <TextInput
              style={styles.contentInput}
              placeholder="Your Password" 
              placeholderTextColor={colors.logC}
            />
          </View>
        </View>
        

 <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
 <View style={styles.redirectionWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.redirectText, {color: colors.logC}]}>Already have an accout? Login </Text>
          </TouchableOpacity>
        </View>
       
        </View>
      </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    
    flex: 1,
    justifyContent: 'space-around',
  },

  headerWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    marginVertical: 20,
    marginHorizontal: 117,
    width: 80,
    height: 80,
  },
  
   contentWrapper: {
    marginHorizontal: 27,
    marginTop: 5,
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
  contentInput: {
    borderColor: 'transparent',
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 1,
    color: 'grey',
    padding: 10,
    paddingLeft: 15,
     fontSize: 16,
   
    // borderBottomColor: "black"
  },
  redirectText: {
    fontSize: 18,
    fontFamily: 'Lato_700Bold',
    color: colors.orange,
  },
  contentTitle: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: 'Lato_700Bold',
    color: colors.logC,
    marginHorizontal: 27,
  },
  signInButton: {
    marginTop: 40,
    marginHorizontal: 27,
    backgroundColor: "#E74131",
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
  },
  redirectionWrapper: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },

  loginText: {
    fontFamily: 'Lato_700Bold',
    fontSize: 18,
    color: colors.white,
  },
  contentConte: {
    marginLeft: 13,
    alignItems: 'center',
    marginTop: 5,
    flexDirection: 'row',
  },

});