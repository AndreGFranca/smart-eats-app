import React from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import logo from '../../assets/logo.png';
import InputLogin from './components/InputLogin';
import ButtonLogin from './components/ButtonLogin';

function Login(): React.JSX.Element {
  return (
    <LinearGradient colors={['#FFF7F4', '#FED6CA']} style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 30,
          }}
        >
          <Image source={logo} style={{ height: 150, width: 150 }} />
        </View>

        <InputLogin textLabel='Usuário' stylesDivInput={styles.divInput} styleslabel={styles.label} stylesInput={styles.input} />
        <InputLogin textLabel='Senha' stylesDivInput={styles.divInput} styleslabel={styles.label} stylesInput={styles.input} inputConfig={{ secureTextEntry: true }} />
        <ButtonLogin textLabel='Entrar' styleBotao={styleBotaoEntrar.button} styleDivBotao={styleBotaoEntrar.divButton} styleTextoBotao={styleBotaoEntrar.textButton} />
        <ButtonLogin textLabel='Esqueci minha Senha' styleDivBotao={styleBotaoEsqueciSenha.divButton} styleTextoBotao={styleBotaoEsqueciSenha.textButton} styleBotao={styleBotaoEsqueciSenha.button} />
      </View>
    </LinearGradient>
  );
}

const styleBotaoEsqueciSenha = StyleSheet.create({
  divButton: {
    justifyContent: 'center',
    width: '100%',
    marginBottom: 15,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 60,
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  textButton: {
    fontFamily: 'Roboto-Medium',
    color: '#FE3D12',
    fontSize: 18,
  },

});

const styleBotaoEntrar = StyleSheet.create({

  divButton: {
    justifyContent: 'center',
    width: '100%',
    marginTop: 45,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FE3D12',
    width: '80%',
    height: 60,
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  textButton: {
    fontFamily: 'Roboto-Black',
    color: '#FFF',
    fontSize: 20,
  },
});

const styles = StyleSheet.create({
  divInput: {
    justifyContent: 'center',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 15,
    marginBottom: 15,
  },
  label: {
    fontFamily: 'Roboto-Medium',
    color: '#FE3D12',
    fontSize: 18,
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 5,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFF',
    width: '80%',
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '5%',
  }
});

export default Login;
