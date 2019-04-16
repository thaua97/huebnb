import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { StatusBar, AsyncStorage } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'

import api from '../../services/api'

import {
    Container,
    Logo,
    Input,
    ErrorMessage,
    Button,
    ButtonText,
    SignUpLink,
    SignUpLinkText
} from './styles'


export default class SignIn extends Component {
    static navigationOptions = {
        header: null,
    }
    
    static propTypes= {
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
            dispatch: PropTypes.func
        }).isRequired 
    }

    state = {
        email: '',
        passwoerd: '',
        error: ''
    }

    handleEmailChange = (email) => {
        this.setState({ email })
    }

    handlePasswordChange = (password) => {
        this.setState({ password })
    }

    handlePegaAvizaozinha = () => {
        this.props.navigation.navigate(('SignUp'))
    }

    handlePiaBrota = async () => {
        if(this.state.email.lenght === 0 || this.state.password.length === 0) {
            this.setState({ error: 'Colé padrin coloca o nome de usuário e a senha comedia'})
        } else {
            try {
                const response  = await api.post('sessions', {
                    email: this.state.email,
                    password: this.state.password
                })

                await AsyncStorage.setItem('@HuebnbApp:token', response.data.token)

                const restAction = StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Main' }),
                    ]
                })
                this.props.navigation.dispatch(resetAction)
            } catch(_err) {
                this.setSate({ error: 'Deu ruim padrin, tu deu o papo errado, olha teu usuario e tua senha que aqui ninguém é otario!'})
            }
        }
    }


    render () {
        return (
            <Container>
                <StatusBar hidden />
                <Logo source={require('../../images/hue.png')} resizeMode="contain" />
                <Input
                    placeholder="Endereço de e-mail"
                    value={this.state.email}
                    onChangeText={this.handleEmailChange}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Input 
                    placeholder="Senha"
                    value={this.state.password}
                    onChangeText={this.handlePasswordChange}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                />
                {this.state.error.length !== 0 && <ErrorMessage>{this.state.error}</ErrorMessage>}

                <Button onPress={this.handlePiaBrota}>
                    <ButtonText>Pia Brota</ButtonText>
                </Button>

                <SignUpLink onPress={this.handlePegaAvizaozinha}>
                    <SignUpLinkText>Pega a vizãozinha</SignUpLinkText>
                </SignUpLink>

            </Container>
        )
    }
}