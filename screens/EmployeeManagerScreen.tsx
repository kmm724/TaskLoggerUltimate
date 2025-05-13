import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { useAppContext, Employee } from '../contexts/AppContext';
import uuid from 'react-native-uuid';

const EmployeeManagerScreen: React.FC = () => {
  const { employees, setEmployees } = useAppContext();
  const [name, setName] = useState('');
  const [role, setRole] = useState<'Laborer' | 'Supervisor'>('Laborer');

  const addEmployee = () => {
    if (name.trim() === '') return;
    const newEmployee: Employee = {
      id: uuid.v4().toString(),
      name: name.trim(),
      role,
    };
    setEmployees([...employees, newEmployee]);
    setName('');
    setRole('Laborer');
  };

  const toggleRole = () => {
    setRole(role === 'Laborer' ? 'Supervisor' : 'Laborer');
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 18, marginBottom: 8 }}>Add New Employee</Text>
      <TextInput
        placeholder="Employee Name"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, padding: 8, marginBottom: 8 }}
      />
      <TouchableOpacity onPress={toggleRole} style={{ marginBottom: 8 }}>
        <Text>Role: {role} (Tap to toggle)</Text>
      </TouchableOpacity>
      <Button title="Add Employee" onPress={addEmployee} />

      <Text style={{ fontSize: 18, marginVertical: 16 }}>Employee List</Text>
      <FlatList
        data={employees}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 8, borderBottomWidth: 1 }}>
            <Text>{item.name} - {item.role}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default EmployeeManagerScreen;
