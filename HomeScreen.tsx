import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Logo Placeholder */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo.png')} 
          style={styles.logo}
        />
      </View>

      <Text style={styles.title}>Empowering the Nation</Text>

      <Text style={styles.description}>
        Empowering the Nation provides **practical, affordable, and accessible skills training**
        aimed at uplifting domestic workers, gardeners, and community members. We believe in
        growing confidence, building independence, and creating new opportunities for employment
        and entrepreneurship.
      </Text>

      <Text style={styles.description}>
        Join us in improving livelihoods and strengthening communities through education and
        training.
      </Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <Button title="View Courses" onPress={() => navigation.navigate('Courses' as never)} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Calculate Fees" onPress={() => navigation.navigate('CalculateFees' as never)} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Contact Us" onPress={() => navigation.navigate('Contact' as never)} />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#f4f4f9',
  },
  logoContainer: {
    marginBottom: 20,
    backgroundColor: '#d9d9d9',
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2e7d32',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  },
});