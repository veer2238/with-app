import React, { useState } from 'react';
import { View, Text, FlatList,TextInput } from 'react-native';
var data =require('./Card.json')





export default function App() {
  const [datap,setDatap] = useState([data]);
  const [search,setSearch] = useState('');

  const onSearch = text =>{

    if (text ==''){
      setDatap('')
    }else{
    let tempList = data.filter(item => {
      return item.title.toLocaleLowerCase().indexOf(text.toLocaleLowerCase()) >-1;
    })
    setDatap(tempList)
  }
}

  




   
    return (
      <View>

      <Text style={{fontSize:30,marginTop:20}}>Flat list with api</Text>
      <TextInput
     
       
        placeholder="search item here..."
        style={{width:'76%',height:50}}
        value={search}
        onChangeText={txt => {
          onSearch(txt)
          setSearch(txt);
        }}
   
      />

      {
        data.length?
        <FlatList
        data={datap}
        renderItem={({item})=><View style={{borderBottomColor:"orange",borderBottomWidth:1,padding:10}}>

        <Text style={{fontSize:18,backgroundColor:"grey"}}>{item.title}</Text>
     
        </View>}
        />:null


      }
      
    
    
      

      </View>
    
      
    )
  
}



