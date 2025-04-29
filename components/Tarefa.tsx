import {TouchableOpacity, Text, View, StyleSheet} from "react-native"
import _tarefa from "../types/_tarefa"

type TarefaProp = {
    dados: _tarefa
    handleDeletePress: (id: number) => void;
}

export default function Tarefa(props:TarefaProp){
    return <View style={styles.tarefas}>
        <Text>{props.dados.texto}</Text>
        <TouchableOpacity
            style={styles.excluir}
            onPress={() => props.handleDeletePress(props.dados.id)}
        >
        <Text style={styles.textoBotao}>Excluir</Text>
      </TouchableOpacity>
    </View>;
}

const styles = StyleSheet.create({
    tarefas:{
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 16,
        marginVertical: 8,
        width: '100%',
    },
    excluir: {
        backgroundColor: 'maroon',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    textoBotao: {
        color: 'white',
        fontWeight: 'bold',
    },
})