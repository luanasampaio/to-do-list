import { StatusBar } from 'expo-status-bar';
import { ReactElement } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen({ navigation  }) {
  function toDoList() {
    navigation.navigate('to-do-list');
  }

  function buscaCep() {
    navigation.navigate('busca-cep');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo!</Text>

      <TouchableOpacity style={styles.button} onPress={toDoList}>
        <Text style={styles.buttonText}>To-Do List</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={buscaCep}>
        <Text style={styles.buttonText}>Busca CEP</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lavender',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 40,
  },
  button: {
    backgroundColor: 'purple',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
