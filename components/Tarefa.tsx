import {Button, Text, View, StyleSheet} from "react-native"
import _tarefa from "../types/_tarefa"

type TarefaProp = {
    dados: _tarefa
    handleDeletePress: any
}

export default function Tarefa(props:TarefaProp){
    return <View style={styles.tarefas}>
        <Text>{props.dados.texto}</Text>
        <Button  color={'maroon'} title="Excluir"
            onPress={() => {props.handleDeletePress(props.dados.id)}}/>
    </View>;
}

const styles = StyleSheet.create({
    div:{
        borderWidth: 1,
    },
    tarefas:{
        margin: 10,
        flexDirection: 'row',
    }
})