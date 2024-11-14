import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { Icon } from "react-native-elements";

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.linha1}>
        <Icon name="bars" type="font-awesome" size={25} style={styles.bars} />
        <Icon name="reddit" type="font-awsome" size={40} color={"#fd4600"} />
      </View>
      <Text style={styles.pipe}>|</Text>
      <View style={styles.linha2}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.useApp}>Use App</Text>
        </TouchableOpacity>
        <Icon name="search" size={35} style={styles.search}/>
        <Icon name="ellipsis-horizontal-outline" type='ionicon' style={styles.points}/>
        </View>
    </View>
  );
};
