import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TextInput } from 'react-native';

const courses = [
  { id: '1', name: 'First Aid', fee: 1500 },
  { id: '2', name: 'Sewing', fee: 1500 },
  { id: '3', name: 'Landscaping', fee: 1500 },
  { id: '4', name: 'Life Skills', fee: 1500 },
  { id: '5', name: 'Child Minding', fee: 750 },
  { id: '6', name: 'Cooking', fee: 750 },
  { id: '7', name: 'Garden Maintenance', fee: 750 },
];

export default function CalculateFeesScreen() {
  const [selected, setSelected] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [total, setTotal] = useState<number | null>(null);

  const toggleCourse = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const calculateTotal = () => {
    const subtotal = selected.reduce((acc, id) => acc + (courses.find((c) => c.id === id)?.fee || 0), 0);
    let discount = 0;
    if (selected.length === 2) discount = 0.05;
    else if (selected.length === 3) discount = 0.1;
    else if (selected.length > 3) discount = 0.15;
    const discounted = subtotal * (1 - discount);
    const totalWithVat = discounted * 1.15;
    setTotal(totalWithVat);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Course Fee Calculator</Text>
      <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Phone" value={phone} onChangeText={setPhone} style={styles.input} />

      {courses.map((c) => (
        <Button key={c.id} title={`${selected.includes(c.id) ? '✓ ' : ''}${c.name} - R${c.fee}`} onPress={() => toggleCourse(c.id)} />
      ))}

      <Button title="Calculate Total" onPress={calculateTotal} />

      {total !== null && <Text style={styles.total}>Total (incl. VAT): R{total.toFixed(2)}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 8, marginBottom: 10 },
  total: { fontSize: 18, fontWeight: 'bold', marginTop: 20 },
});
 