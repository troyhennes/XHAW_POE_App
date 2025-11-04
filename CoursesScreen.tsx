import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

type CoursesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Courses'
>;

const courses = [
  { id: '1', name: 'First Aid', duration: '6 months', fee: 1500 },
  { id: '2', name: 'Sewing', duration: '6 months', fee: 1500 },
  { id: '3', name: 'Landscaping', duration: '6 months', fee: 1500 },
  { id: '4', name: 'Life Skills', duration: '6 months', fee: 1500 },
  { id: '5', name: 'Child Minding', duration: '6 weeks', fee: 750 },
  { id: '6', name: 'Cooking', duration: '6 weeks', fee: 750 },
  { id: '7', name: 'Garden Maintenance', duration: '6 weeks', fee: 750 },
];

export default function CoursesScreen() {
  const navigation = useNavigation<CoursesScreenNavigationProp>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Available Courses</Text>
      {courses.map((course) => (
        <View key={course.id} style={styles.card}>
          <Text style={styles.name}>{course.name}</Text>
          <Text>Duration: {course.duration}</Text>
          <Text>Fee: R{course.fee}</Text>
          <Button
            title="View Details"
            onPress={() =>
              navigation.navigate('CourseDetails', { courseId: course.id })
            }
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  card: {
    backgroundColor: '#e8f5e9',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },
  name: { fontSize: 18, fontWeight: '600' },
});
