import React, {useState} from 'react';
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
export default function ForgotPass({navigation}){
  return(
    <View style={styles.container}>
     <View style={styles.headerWrapper}>
          <Image source={{uri: "https://i.imgur.com/UFpDWQn.png"}} style={styles.logoImage} />
        </View>
         <Text style={[styles.redirectText, {marginLeft: 20}]}>Forgot password </Text>
         <View style={styles.boxWrapper}>
         <Text style={styles.titleText}>Email Address</Text>
          <View style={styles.inputContent}>
             <View style={styles.inputContener}>
            <TextInput  placeholder="Your email " />
            </View>
          </View>
         </View>
           <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.loginText}>Submit</Text>
        </TouchableOpacity>
           <TouchableOpacity style={styles.backto}
         onPress={()=> navigation.navigate("Login")} >
        <Text style={styles.redirectText}>Back to LogIn </Text>
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  backto: {marginHorizontal: 90, marginTop: 20},
  titleText: {
    marginLeft: 20,
      fontSize: 16,
  fontFamily: "Lato_700Bold",
  color: colors.logC
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
  inputContener:{   borderWidth: 1,
 
    padding: 5,
     flex: 1,
    borderRadius: 10,},
 
  inputContent: {
    flexDirection: "row",
    // marginLeft: 20,
    marginHorizontal: 10,
    marginTop: 10,
  },
container: {
  flex: 1,
  backgroundColor: colors.bg
},
 headerWrapper: {
    // marginHorizontal: 85,
    // marginTop: 46
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    marginHorizontal: 85,
    marginTop: 46,
    marginBottom: 20,
    width: 80,
    height: 80,
  },
  boxWrapper: {
    paddingVertical: 25,
    marginTop: 20,
    marginHorizontal: 27,
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
  },
 
redirectText: {
  fontSize: 24,
  fontFamily: "Lato_700Bold",
  color: colors.logC
},
})