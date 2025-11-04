import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

type CourseDetailsRouteProp = RouteProp<RootStackParamList, 'CourseDetails'>;

const courseDetails: Record<string, any> = {
  '1': { name: 'First Aid', purpose: 'Provide first aid awareness and support', fee: 1500 },
  '2': { name: 'Sewing', purpose: 'Provide tailoring and garment design skills', fee: 1500 },
  '3': { name: 'Landscaping', purpose: 'Provide garden layout and design services', fee: 1500 },
  '4': { name: 'Life Skills', purpose: 'Provide essential soft skills', fee: 1500 },
  '5': { name: 'Child Minding', purpose: 'Care and safety for children', fee: 750 },
  '6': { name: 'Cooking', purpose: 'Basic and advanced cooking techniques', fee: 750 },
  '7': { name: 'Garden Maintenance', purpose: 'Maintain garden health', fee: 750 },
};

export default function CourseDetailsScreen() {
  const route = useRoute<CourseDetailsRouteProp>();
  const { courseId } = route.params;
  const course = courseDetails[courseId];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.name}</Text>
      <Text>Purpose: {course.purpose}</Text>
      <Text>Fee: R{course.fee}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
});
