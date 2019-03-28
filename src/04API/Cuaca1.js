import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput} from 'react-native';

export default class Cuaca1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {city: '',forecast: {main: '',description: '',temp: '',}
        };
      }
    getWeather= () => {
      let url = 'http://api.openweathermap.org/data/2.5/weather?q='+ this.state.city + '&appid=258a2fa03af254553bd8b35e3f814885&units=metric';
      fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          forecast : {
            main: responseJson.weather[0].main,
            description: responseJson.weather[0].description,
            temp: responseJson.main.temp,
          }
        });
      }
      );
    }
  render() {
    return (
    <View style={styles.containerMain}>
      <View style={styles.box1}>
        <Text style={{fontSize: 25, textAlign: 'center', padding: 30, color: 'white'}}> 
        Prakiraan Cuaca </Text>
      </View> 
      <View style={styles.box2}>  
        <Text style={{fontSize: 20, textAlign: 'center',paddingTop: 30, color: 'white'}}> Masukan Nama Kota </Text>  
        <View style={styles.textInput}>
        <TextInput style={{textAlign: 'center', color: 'black'}} placeholder=" Masukan Nama kota " onChangeText={(city) => this.setState({ city })}/></View>
        <TouchableHighlight onPress={() => this.getWeather()}>
            <Text style={{paddingTop: 10, color: '#fff'}}>Lihat</Text>
        </TouchableHighlight>      
      </View>
      <View style={styles.box3}>
      <Text style={{padding: 10,fontSize: 18,color: 'white'}}>Suhu : { this.state.forecast.temp}</Text>
      <Text style={{padding: 10,fontSize: 18,color: 'white'}}>Cuaca : { this.state.forecast.main}</Text>
      <Text style={{padding: 10,fontSize: 18,color: 'white'}}>Deskripsi : { this.state.forecast.description}</Text>
      </View>
      <View style={styles.box4}>
        <Text style={{fontSize: 15, textAlign: 'center', padding: 40, color: 'white'}}> 
        copyright@widyantidwiputri</Text>
      </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
containerMain: {
    backgroundColor: '#B9F6CA',
    flex: 1,
    flexDirection: 'column',
},
box1: {
    flex: 0.3,
    backgroundColor: '#006400',
    marginTop : 20,
    marginBottom : 20,
},
box2: {
    flex: 0.5,
    backgroundColor: '#006400',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 8,
    marginRight: 8,
}, 
box3: {
    flex: 1,
    backgroundColor: '#81C784',
    flexDirection: 'column',
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
},
box4: {
    flex: 0.2,
    backgroundColor: '#006400',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 40,
},
textInput: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    height: 35,
    width: 160,
    marginTop: 18,
    borderRadius: 5,
},
});