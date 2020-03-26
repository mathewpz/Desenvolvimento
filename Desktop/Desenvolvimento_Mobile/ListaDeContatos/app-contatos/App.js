import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView,FlatList} from 'react-native';

export default function App() {
  const[id, setId]= useState(10);
  const[nome, setNome]=useState('');
  const[numero, setNumero]=useState('');
  const [contatos, setContatos] = useState ([]);
  const[contadorContatos, setContadorContatos] = useState(0);

  //captura o texto digitado
  const capturaNome=(nome)=>{
    setNome(nome)
  };
  const capturaNumero=(numero)=>{
    setNumero(numero)
  };
  contato=(id, nome, numero);
  //para add oque foi digitado
  const adicionarContato=()=>{
    setContatos((contatos)=>{
      console.log(contatos);
      setId(id+2);
      setContadorContatos(contadorContatos+1);
      return[...contatos,{key:contadorContatos.toString(),value:contato=(id),value2:
      contato=(nome),value3:contato=(numero)}];
    });
  }
  return (
    <View style={styles.telaPrincipalView}>
      <View style={{padding:12,backgroundColor:'#ccd9ff',borderColor:'#000',borderRadius:6}}><Text>Contatos</Text></View>
      <View style={styles.contatosView}>
        {/*usuario insere o contato*/}
        <TextInput placeholder="nome"style={styles.contatosInputText} onChangeText={capturaNome} value={nome}/>
        <TextInput placeholder="numero"style={styles.contatosInputText} onChangeText={capturaNumero} value={numero}/>
        <Button title="Add"onPress={adicionarContato} />
      </View>
      <FlatList
      data={contatos}/*colecao de contatos*/
      renderItem={/*mapeamento*/
      contato => (/*dado um contato gera uma view*/
      <View style={styles.itemNaLista}>
      <Text>({contato.item.value})Nome: {contato.item.value2}</Text>
      <Text>       Telefone: {contato.item.value3}</Text>
      </View>
      )}/>
    </View>
  );
}
const styles = StyleSheet.create({
  telaPrincipalView:{
    padding:50
  },
  contatosView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center"
  },
  contatosInputText:{
    width:'50%',
    borderBottomColor:'black',
    borderBottomWidth:1,
    padding:2,
    borderRadius:5
  },
  itemNaLista:{
    padding:5,
    backgroundColor:'#CCC',
    borderColor:'#000',
    borderWidth:1,
    marginBottom:8,
    borderRadius:5
  }
});