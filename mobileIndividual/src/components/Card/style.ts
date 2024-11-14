import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  containerCard: {
    width: "100%",
    marginTop: 25,
    borderBottomColor: "#00000030",
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
  },
  linha1: {
    flexDirection: "row",
  },
  avatar: {
    top:4,
    height:20,
    width:20
  },
  linha2: {
    padding: 5,
    left: 160,
    flexDirection: "row",
    gap: 10,
  },

  nome: {
    paddingRight: 5,
  },

  nome2: {
    marginTop: 6,
    fontSize: 9,
  },

  buttonJoin: {
    backgroundColor: "#0000ff80",
    borderRadius: 20,
    width: 50,
    height: 30,
  },

  join: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 10,
    color: "#fff",
  },

  principal: { display: "flex" },

  titulo: {
    width: 300,
    fontSize: 15,
    marginBottom: 5,
    marginTop: 5,
    fontWeight: "bold",
  },
  containerImage:{
    position:"absolute",
    left:300,
    top:10
  },
  
  imagem:{
    width:90,
    height:80,
    borderRadius:20
  },

  buttons: { flexDirection: "row", marginTop: 40, marginBottom: 10 },

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 100,
    height: 40,
    backgroundColor: "#00000030",
    borderRadius: 21,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 10,
    marginTop: 5,
  },
  textButtonLike: {
    fontSize: 12,
  },
  textButtonShare: {
    fontSize: 12,
  },
  buttonComment: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 40,
    backgroundColor: "#00000030",
    borderRadius: 21,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 10,
    marginTop: 5,
    gap: 5,
  },
  buttonShare: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 40,
    backgroundColor: "#00000030",
    borderRadius: 21,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5,
    gap: 5,
  },
  containerSingUp: {
    width: 60,
    left: 170,
    flexDirection: "column",
  },

  linhaSingUp: {
    flexDirection: "row",
    marginBottom: 15,
    marginTop: 40,
    justifyContent: "space-between",
  },

  buttonSingUp: {
    borderColor: "#000",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 20,
    width: 80,
    marginRight: 10,
  },

  singUp: {
    fontSize: 11,
    paddingLeft: 10,
  },

  subTitulo: {
    marginBottom: 10,
    fontSize: 11,
  },

  buttonAnuncio: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 110,
    height: 40,
    backgroundColor: "#00000030",
    borderRadius: 21,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 10,
    marginTop: 5,
  },
});
