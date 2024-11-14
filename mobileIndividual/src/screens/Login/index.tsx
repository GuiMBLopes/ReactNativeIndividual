import {
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { ButtonInput } from "../../components/ButtonInput";
import { InputComponent } from "../../components/InputComponent";
import { styles } from "./style";

export const Login = () => {
//  const navigate = useNavigation();

//   const navigateToHome = () => {
//     navigate.navigate("home");
//   };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.logoTexto}>
          <Icon
            name="reddit"
            color={"#fd4600"}
            style={styles.logo}
            size={100}
          />
          <Text style={styles.text}>Log in to Reddit</Text>
        </View>
        <View style={styles.forms}>
          <InputComponent PropsPlaceHolder="Username" />
          <View style={[{ paddingBottom: 25 }]} />
          <InputComponent PropsPlaceHolder="Password" PropsTypeInput={true} PropsTypeIcon="password"/>
          <Text style={styles.text2}>FORGOT PASSWORD</Text>
        </View>
        <ButtonInput
          title="LOG IN"
          PropsColor="#0080ff50"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
