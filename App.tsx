import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ToDoScreen from "./pages/ToDoListScreen";
import BuscaCepScreen from "./pages/BuscaCepScreen";
import HomeScreen from "./pages/HomeScreen";

const Stack = createNativeStackNavigator();
export default function App(){
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name = "Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name = "to-do-list"
        component={ToDoScreen}
      />
      <Stack.Screen
        name="busca-cep"
        component={BuscaCepScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
}