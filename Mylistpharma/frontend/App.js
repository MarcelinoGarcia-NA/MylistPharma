import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button} from "react-native";
import { NativeRouter, Route, Link} from "react-router-native";
//import api from "../api";
import axios from 'axios';

const api =axios.create({
    baseURL:'http://192.168.0.108:3333',
});

function Cadastrar() {

  const [nome,setNome]=useState("");
  const [info,setInfo]=useState("");
  const [img,setImg]=useState("");
 
  async function cadastro(event){
    event.preventDefault();
    try{
        const response = await api.post('/medicamento',{
        nome, info, img});
        alert("Medicamento Cadastrado com sucesso!");
    }catch{
      alert("Erro ao Cadastar");
    }
    
  }
  return <View style={styles.container}>
              <Text style={styles.header}>CADASTRAR MEDICAMENTO</Text>
              <Text>NOME:</Text>
              <TextInput style={styles.input} onChangeText={nome=>setNome(nome)} value={nome}></TextInput>
              <Text>PATOLOGIA:</Text>
              <TextInput style={styles.input} onChangeText={info=>setInfo(info)} value={info}></TextInput>
              <Text>HORÁRIO DE TOMAR:</Text>
              <TextInput style={styles.input} onChangeText={img=>setImg(img)} value={img}></TextInput>
              <Button style={styles.Button} onPress={cadastro} title="CADASTRAR"></Button>
         </View>;
}
function Menu() {
  
  return  <View>
              <Text style={styles.titulo1}>FARMACIAS ASSOCIADAS</Text>
              <Text style={styles.titulo2}>LISTA DO SEUS MEDICAMENTOS</Text>
          </View>;
}
function Listar() {
  const [list,setList]=useState([]);
  useEffect(()=>{
    async function loadList(){
      const response=await api.get("/medicamento");
      setList(response.data);
    }
    loadList();
  },[list]);

  return <View>
            <Text style={styles.titulolista}>Lista do seus medicamentos </Text>
            {list && list.map(l=>(
            <Text style={styles.item}>{l.nome}      {l.info}     {l.img}
            </Text>
            ))}
        </View>;
}


export default function App() {
  return (
    <NativeRouter>
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>INICIO</Text>
        </Link>
        <Link to="/cadastrar" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>CADASTRAR</Text>
        </Link>
        <Link to="/listar" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>LISTAR</Text>
        </Link>
      </View>

      <Route exact path="/" component={Menu} />
      <Route path="/cadastrar" component={Cadastrar} />
      <Route path="/listar" component={Listar} />
    </View>
  </NativeRouter>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  },
  menu:{
    marginTop:100,
    marginLeft:"45%",
  },
  titulo1:{
    marginTop:100,
    fontSize:25,
    marginLeft:27,
    color:"green",
  },
  titulo2:{
    marginTop:100,
    marginLeft:"21%",
  },
  input:{
    borderWidth:1,
    marginBottom:20,
  },
  tabela:{
    color:"green",
    marginLeft:"50%",
  },
  titulolista:{
    color:"green",
    marginTop:30,
    alignItems:"center",
    marginBottom:40,
    marginLeft:"23%",
  },
  item:{
    marginRight:40,
  }
});

