import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/logo.png')} // Replace with your logo file
        style={styles.logo}
      />

      <Text style={styles.heading}>About Empowering the Nation</Text>

      <Text style={styles.paragraph}>
        Empowering the Nation is an initiative started by Precious Radebe to provide
        training and skills development for domestic workers and gardeners.
      </Text>

      <Text style={styles.paragraph}>
        The goal is to create opportunities for upskilling, personal growth, and improved
        employment prospects for individuals who were previously denied the chance to learn
        and expand their abilities.
      </Text>

      <Text style={styles.paragraph}>
        Our training programs focus on practical, real-life skills that can be applied in the
        home, garden, and broader service environments. We believe that empowerment starts
        with access to knowledge — and we are committed to making that knowledge accessible.
      </Text>

      <View style={styles.section}>
        <Text style={styles.subheading}>Our Vision</Text>
        <Text style={styles.paragraph}>
          To uplift and empower communities by building confidence, skills, and independence.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Our Values</Text>
        <Text style={styles.paragraph}>🌿 Dignity</Text>
        <Text style={styles.paragraph}>🌿 Growth</Text>
        <Text style={styles.paragraph}>🌿 Community</Text>
      </View>
    </ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F8F9FA',
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 60,
  },
  heading: {
    fontSize: 24,
    color: '#1B4332', // deep forest green
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  subheading: {
    fontSize: 18,
    color: '#2D6A4F',
    fontWeight: '600',
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    color: '#333',
    marginBottom: 12,
  },
  section: {
    marginTop: 20,
  },
});
