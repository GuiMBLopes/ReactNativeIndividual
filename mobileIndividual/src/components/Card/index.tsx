import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { style } from "./style";

interface PropsCard {
  avatar?: ImageSourcePropType | any;
  nome: string;
  hrPostado: number;
  titulo: string;
  imagem?: ImageSourcePropType | any;
  qtdLikes: number;
  qtdComentarios: number;
  anuncio?: boolean
  subTitulo?: string
}

export const Card = ({
  nome,
  hrPostado,
  titulo,
  qtdLikes,
  qtdComentarios,
  avatar,
  imagem,
  anuncio,
  subTitulo
}: PropsCard) => {
  return (
    <View style={style.containerCard}>
      {anuncio? 
      <>
      <View style={style.linha1}>
        <Image source={avatar} style={style.avatar}/>
        <Text style={style.nome}>u/{nome}</Text>
        <Text style={style.nome2}>Promoted</Text>
        <View style={style.containerSingUp}>
          <Icon name="ellipsis-horizontal-outline" type="ionicon" size={20} />
        </View>
      </View>
      <View style={style.principal}>
        <Text style={style.titulo}>{titulo}</Text>
        <Text style={style.subTitulo}>{subTitulo}</Text>
        <View style={style.containerImage}>
        <Image source={imagem} style={style.imagem}/>
        </View>
        <View style={style.linhaSingUp}>
          <Text>primevideo.com</Text>
          <TouchableOpacity style={style.buttonSingUp}>
            <Text style={style.singUp}>Sing Up</Text>
          </TouchableOpacity>
          </View>
        <View style={style.buttons}>
          <TouchableOpacity style={style.buttonAnuncio}>
            <Icon name="arrow-up-bold-outline" type="material-community" />
            <Text>Vote</Text>
            <Icon name="arrow-down-bold-outline" type="material-community"  />
          </TouchableOpacity>
          <TouchableOpacity style={style.buttonComment}>
            <Icon name="comment-alt" type="font-awesome-5" />
            <Text>{qtdComentarios}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.buttonShare}>
            <Icon name="share-outline" type="ionicon" size={20} />
            <Text>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
      </>
      : <>
      <View style={style.linha1}>
        <Image source={avatar} style={style.avatar}/>
        <Text style={style.nome}>r/{nome}</Text>
        <Text style={style.nome2}>{hrPostado}h ago</Text>
        <View style={style.linha2}>
          <TouchableOpacity style={style.buttonJoin}>
            <Text style={style.join}>Join</Text>
          </TouchableOpacity>
          <Icon name="ellipsis-horizontal-outline" type="ionicon" size={20} />
        </View>
      </View>
      <View style={style.principal}>
        <Text style={style.titulo}>{titulo}</Text>
        <View style={style.containerImage}>
        <Image source={imagem} style={style.imagem}/>
        </View>
        <View style={style.buttons}>
          <TouchableOpacity style={style.button}>
            <Icon name="arrow-up-bold-outline" type="material-community" size={24}/>
            <Text style={style.textButtonLike}>{qtdLikes}</Text>
            <Icon name="arrow-down-bold-outline" type="material-community" size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={style.buttonComment}>
            <Icon name="comment-alt" type="font-awesome-5" />
            <Text>{qtdComentarios}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.buttonShare}>
            <Icon name="share-outline" type="ionicon" size={20} />
            <Text style={style.textButtonShare}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
      </> }
      
    </View>
  );
};
