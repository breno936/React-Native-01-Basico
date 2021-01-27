import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';

function BoasVindas(props){

    const[nome, setNome] = useState('');
    const[mensagem, setMensagem] = useState('Seja bem-vindo(a)!');
    const[sobrenome, setSobrenome] = useState('');
    const[mostraMensagem, setMostraMensagem] = useState(false);

    const _apresentarMensagem = () => {
        if(!nome == '' && !sobrenome == ''){
            setMostraMensagem(true)
        }else{
            Alert.alert(
                'Preenchimento Obrigatório',
                'Informe o nome e sobrenome!',
                [
                    {text: 'OK'},
                ],
            );
        }
    }

    const _limpar = () =>{
        setNome('');
        setSobrenome('');
        setMostraMensagem('');
    }
    return(
        <View style={Styles.container}>
<Text style={styles.titulo}>Identifique-se</Text>

          <TextInput
            style={styles.campo}
            placeholder="digite seu nome"
            onChangeText={nome => setNome(nome)}
            value={nome}
            />

            
          <TextInput
            style={styles.campo}
            placeholder="digite seu Sobrenome"
            onChangeText={nome => setSobreNome(nome)}
            value={sobrenome}
            />

            <View style={styles.botaoContainer}>
                <Button
                onPress = {_apresentarMensagem}
                title = 'Ok'/>
            </View>

            {mostraMensagem &&(
                <View>
                    <Text style={styles.texto}>Olá, {nome} {sobrenome}! {props.saudacao}</Text>
                    <Text style={styles.texto}>{mensagem}</Text>
                </View>
          )}

          <View style={styles.botaoContainer}>
              <Button
              onPress={_limpar}
              title="Limpar"/>
          </View>

            <Text style={styles.texto}>Ola {props.saudacao}</Text>
            <Text style={styles.texto}>Ola {mensagem}</Text>
        </View>

    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor : '#081a31',
        width: 300,
        borderRadius: 5,
        padding: 10,
        margin: 10
    },
    texto:{
        fontSize : 14,
        color: '#FFFFFF',
        textAlign: 'center'
    },
    campo:{
    backgroundColor: '#dcedff',
    fontSize: 14,
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 5,
    height: 35    
    },
    titulo:{
        fontSize: 16,
        color: '#FFFFFFF',
        fontWeight: 'bold',
        textAlign: "center",
    },
    botaoContainer:{
        marginBottom: 5,
        marginTop: 5,
        borderRadius: 5,
    },
});

export default BoasVindas;
