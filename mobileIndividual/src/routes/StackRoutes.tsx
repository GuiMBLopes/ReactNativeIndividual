import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { Home } from "../screens/Home";

const Stack = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="home" component={Home}/>
    </Stack.Navigator>
  );
};
