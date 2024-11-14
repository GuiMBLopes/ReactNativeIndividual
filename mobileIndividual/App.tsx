import { StatusBar, View } from "react-native";
import { Home } from "./src/screens/Home";
import { Login } from "./src/screens/Login";
import { Routers } from "./src/routes";

export default function App() {
  return (
    <View>
      <StatusBar barStyle={"default"} />
    <Login/>
    </View>
  );
}
