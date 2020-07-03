import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableWithoutFeedback, Button } from 'react-native';

function BoasVindas(props) {
        const [sobrenome, setSobrenome] = useState('');
        const [nome, setNome] = useState(setNome);
        const [mensagem, setMensagem] = useState('Seja bem-vindo(a)!');
        const [mostraMensagem, setMostraMensagem] = useState(false);

  const _apresentaMensagem = () => {
     if(!nome == '' && !sobrenome == ''){
         setMostraMensagem(true);
     } else {
         alert(
             'Prenchimento obrigatório',
             'Informe o nome e o sobrenome!',
             [
                 {text:'OK'},
             ],
         );
     }
  }

  const _limpar = () =>{
      setSobrenome('');
      setNome('');
      setMostraMensagem(false);
  }
  return (
    <View style={styles.container}>
        <TextInput
        style={styles.campo}
        placeholder="Digite seu nome"
        onChangeText ={nome => setNome(nome)}
        value={nome}

        />


        <TextInput
        style={styles.campo}
        placeholder="Digite seu nome"
        onChangeText ={sobrenome => setSobrenome(sobrenome)}
        value={sobrenome}

        />

        {mostraMensagem && (
        <View>
      <Text style={styles.texto}>Olá,{nome} {sobrenome}! {props.saudacao}</Text>
      <Text style={styles.texto}>{mensagem}</Text>
        </View>

    )}

        <View style={styles.botaoContainer}>
            <Button 
            onPress={_limpar}
            title='Limpar'/>
        </View>


        <View style={styles.botaoContainer}>
            <Button 
            onPress={_apresentaMensagem}

            title='ok'/>
        </View>

    
    
     

    </View>

    
  )
}
const styles = StyleSheet.create({
  container: {
     backgroundColor: '#081a31',
     width: 300,
     borderRadius: 5,
     padding: 10,
     margin: 10
  },
  texto: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: "center",
  },
  campo:{
    backgroundColor:'#dcedff',
    borderRadius: 5,
    marginBottom:5,
    marginTop:5,
    height:35,
    fontSize:14,

    
  },

  botaoContainer:{
        marginTop:10,
        marginBottom:10,
        borderRadius:10,
    },

});

export default BoasVindas;
