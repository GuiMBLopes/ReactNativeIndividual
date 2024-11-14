import { FlatList, Image, Text, View } from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./style";
import { Icon } from "react-native-elements";
import { APIData } from "../../mock/Data";
import { Card } from "../../components/Card";
import reddit from "../../mock/imagens/reddit.png";
export const Home = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.containerRow}>
          <Text style={styles.textRow}>Hot</Text>
          <Icon
            name="chevron-down"
            type="font-awesome"
            size={15}
            color={"#00000040"}
          />
          <Text style={styles.textRow}>
            Canada
          </Text>
            <Icon
              name="chevron-down"
              type="font-awesome"
              size={15}
              color={"#00000040"}
            />
          <View style={styles.line} />
          <View style={styles.bar}>
            <Icon name="database" type="font-awesome" size={20} color={"#00000040"} />
            <Icon
              name="chevron-down"
              type="font-awesome"
              size={15}
              color={"#00000040"}
            />
          </View>
        </View>
        <FlatList
          scrollEnabled={true}
          data={APIData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              nome={item.nome}
              hrPostado={item.hrPostado}
              titulo={item.titulo}
              qtdLikes={item.qtdLikes}
              qtdComentarios={item.qtdComentarios}
              anuncio={item.anuncio}
              subTitulo={item.subtitulo}
              avatar={item.avatar}
              imagem={item.imagem}
            />
          )}
        />
      </View>
    </>
  );
};
