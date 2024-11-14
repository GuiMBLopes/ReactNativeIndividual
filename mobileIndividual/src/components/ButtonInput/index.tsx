import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

interface PropsButton {
  title: string;
  PropsColor?: string;
  PropsTextColor?: string;
  PropsNavigate?: () => void;
}

export const ButtonInput = ({
  title,
  PropsColor,
  PropsTextColor,
  PropsNavigate,
}: PropsButton) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: PropsColor ? PropsColor : "blue" },
      ]}
      onPress={PropsNavigate}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
