import {View, Image, Text, TouchableOpacity, Button} from 'react-native'
import logoPng from './assets/images.jpg'

export default function App() {
  return (
    <View
      style={{
        alignItems:'center',
        justifyContent: 'center',
        flex: 1,
      }}
    >
      <Image
        source={logoPng}
        style={{
          height:200,
          width: 200,
        }}
        resizeMode='contain'
      />
      <Text style={{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#18405A',
        textAlign: 'center',
      }}>Bem Vindo !!!</Text>

      <Text style={{
        fontSize: 15,
        fontWeight: '500',
        color: '#18405A',
        textAlign: 'center',
        }}>Nossa luta é pelos animais, juntos somos mais fortes!</Text>


        <TouchableOpacity style={{
          marginTop: 20,
          borderRadius: 20,
          backgroundColor: '#18405A',
          height: 30,
          width: '70%',
          borderColor: '#18405A',
          borderWidth: 2
        }}>
          <Text style={{
            color: 'white',
            fontSize: 18,
            fontWeight: '600',
            textAlign: 'center'
            
            }}>Acessar</Text>
        </TouchableOpacity>


         <TouchableOpacity style={{
          marginTop: 10,
          borderRadius: 20,
          height: 30,
          width: '70%',
          borderColor: '#18405A',
          borderWidth: 2
           
         }}>
          <Text style={{
            color: '#1D1D1D',
            fontSize: 18,
            fontWeight: '600',
            textAlign: 'center'
          }}>Cadastrar</Text>
        </TouchableOpacity>

    </View>
  );
}
