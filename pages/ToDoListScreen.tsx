import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import  _tarefa  from '../types/_tarefa';
import Tarefa from '../components/Tarefa';

export default function ToDoListScreen() {
  const [novaTarefa, setNovaTarefa] = useState<string>('');
  const [tarefas, setTarefas] = useState<_tarefa[]>([]);

  function adicionarTarefa(){
    if(!novaTarefa?.trim()){
      alert("Insira uma texto!");
      return;
    }

    const tarefa: _tarefa = {
      id: tarefas.length +1,
      texto: novaTarefa,
    };

    setTarefas([...tarefas, tarefa]);
    setNovaTarefa('');
  }


  function mostrarTarefas(){
    return tarefas.map(t => <Tarefa key={t.id} dados={t} handleDeletePress={excluir}/>);
  }

  function excluir(id:number){
    const f = tarefas.filter(t => t.id != id);
    setTarefas(f);
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={novaTarefa} onChangeText={setNovaTarefa}/>
      <Button color='purple' title='Adicionar tarefa' onPress={adicionarTarefa} />
      {mostrarTarefas()}
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
    padding: 24,
  },
  input:{
    borderWidth: 1,
    margin: 10,
  }
});
