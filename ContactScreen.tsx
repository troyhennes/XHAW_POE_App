 import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, Button } from 'react-native';

export default function ContactScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Contact Empowering the Nation</Text>

      <Text style={styles.sectionTitle}>📞 Phone & Email</Text>
      <Text style={styles.item}>Phone: 011 123 4567</Text>
      <Text style={styles.item}>Email: info@empoweringthenation.co.za</Text>
      <Text style={styles.item}>Website: www.empoweringthenation.co.za</Text>

      <Text style={styles.sectionTitle}>🕒 Operating Hours</Text>
      <Text style={styles.item}>Monday - Friday: 08:00 - 17:00</Text>
      <Text style={styles.item}>Saturday: 09:00 - 13:00</Text>
      <Text style={styles.item}>Sunday & Public Holidays: Closed</Text>

      <Text style={styles.sectionTitle}>🏫 Training Venues in Johannesburg</Text>
      <Text style={styles.item}>1. Sandton Campus - 123 Main Rd</Text>
      <Text style={styles.item}>2. Soweto Campus - 45 Vilakazi St</Text>
      <Text style={styles.item}>3. Randburg Campus - 78 Malibongwe Dr</Text>

      <Text style={styles.sectionTitle}>🌍 Social Media</Text>
      <Text style={styles.link} onPress={() => Linking.openURL('https://facebook.com')}>
        Facebook: @EmpoweringTheNation
      </Text>
      <Text style={styles.link} onPress={() => Linking.openURL('https://instagram.com')}>
        Instagram: @Empowering_The_Nation
      </Text>
      <Text style={styles.link} onPress={() => Linking.openURL('https://twitter.com')}>
        X (Twitter): @ETN_SA
      </Text>

      <View style={styles.mapButton}>
        <Button
          title="View our Locations on Google Maps"
          onPress={() => Linking.openURL('https://www.google.com/maps')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#FAFAFA' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  sectionTitle: { marginTop: 20, fontSize: 18, fontWeight: '600', color: '#333' },
  item: { marginTop: 5, fontSize: 15, color: '#555' },
  link: { marginTop: 5, fontSize: 15, color: '#1E90FF', textDecorationLine: 'underline' },
  mapButton: { marginTop: 25 },
});
