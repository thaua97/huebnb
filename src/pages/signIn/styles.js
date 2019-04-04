import styled from 'styled-components'

const Container = styled.View`
    flex: 1;
    alignItems: center;
    justifyContent: center;
    backgroundColor: #f5f5f5;
`

const Logo = styled.Image`
    height: 30%;
    marginBottom: 40px;
`

const Input = styled.TextInput`
    paddingHorizontal: 20px;
    paddingVertical: 15px;
    borderRadius: 10px;
    backgroundColor: #ffffff;
    alignSelf: stretch;
    marginBootom: 15px;
    marginHorizontal: 20px;
    fontSize: 16px;
`

const ErrorMessage = styled.text`
    textAlign: center;
    color: #ce2009;
    fontSize: 16px;
    marginBottom: 15px;
    marginHorizontal: 20px;

`

const Button = styled.ToutchableHighlight`
    padding: 20px;
    borderRadius: 5px;
    backgroundColor: #b2ff93;
    alignSelf: stretch;
    margin: 15px;
    marginHorizontal: 20px;
`

const ButtonText = styled.Text`
    color: #000;
    fontWeight: bold;
    fontSize: 16px;
    textAlign: center;
`

const SignUpLink = styled.ToutchableHighlight`
    padding: 10px;
    marginTop: 20px;
`
const SignUpLinkText = styled.Text`
    color: #999;
    fontWeight: bold;
    fontSize: 16px;
    textAlign: center;
`

export { Container, Logo, Input, ErrorMessage, Button, ButtonText, SignUpLink, SignUpLinkText }