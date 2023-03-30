import companyLogo from "../images/logo.png";
import {Container,Wrapper,Title,FORM,Input,Button,NavLink,Image} from "../styles/Login-Styles.jsx";

function Login(){
  
  const handleLogin = () => {
    
  };

  return (
    <Container>

        <Wrapper>
            <Image src={companyLogo}/><Title>SIGN IN</Title>
            
            <FORM>
                <Input placeholder='username'/>
                <Input placeholder='password'/>
              
                <Button onClick={handleLogin}>LOGIN</Button>
                <NavLink>DO NOT REMEMBER THE PASSWORD?</NavLink>
                <NavLink to="../pages/Register">CREATE A NEW ACCOUNT</NavLink>
            </FORM>
          
      </Wrapper>
    </Container>
  );
}

export default Login;
