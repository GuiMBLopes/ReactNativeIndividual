import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { useState } from "react";
import { Icon } from "react-native-elements";
interface PropsInput {
  PropsPlaceHolder: string;
  PropsTypeInput?: boolean;
  PropsTypeIcon?:string
}
export const InputComponent = ({
  PropsPlaceHolder,
  PropsTypeInput,
  PropsTypeIcon
}: PropsInput) => {

  const [viewPassword, setViewPassword] = useState<boolean>(false)

  return (
    <View style={styles.container}>
    <TextInput
      placeholder={PropsPlaceHolder}
      placeholderTextColor={"#00000040"}
      secureTextEntry={PropsTypeIcon === 'password' ? viewPassword : PropsTypeInput}
      style={styles.input}
    />
    <View style={styles.boxIcon}>
    {PropsTypeIcon === 'password' && 
          <TouchableOpacity onPress={() => setViewPassword(!viewPassword)}>
            {viewPassword ? (
              <Icon name="eye" type="font-awesome-5" size={24} color="#00000030" />
            ) : (
              <Icon name="eye-slash" type="font-awesome-5" size={24} color="#00000030" />
            )}
          </TouchableOpacity>
        }
    </View>
    </View>
  );
};
