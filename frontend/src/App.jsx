import HeaderComponent from './assets/header'
import FooterComponent from './assets/footer'
import LoginContainer from './assets/loginContainer'
import LoginComponent from './assets/login'
import './App.css'

function App() {
  return (
    <>
      <HeaderComponent />
      <LoginContainer>
        <LoginComponent />
      </LoginContainer>
      <FooterComponent />
    </>
  );
}

export default App
