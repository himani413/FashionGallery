import companyLogo from "../images/logo.png";
import {Container,Wrapper,Title,FORM,Input,Button,Link,Image} from "../styles/Login-Styles.jsx";

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
          <Link>DO NOT REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </FORM>
          
      </Wrapper>
    </Container>
  );
}

export default Login;
