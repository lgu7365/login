import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { fbaseauth } from "../fbase";

const Button = styled.span`
  cursor: pointer;
  margin-top: 10px
`;

const Logo = styled.img`
  height: 25px;
`;

const GithubButton = () => {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(fbaseauth, provider);
      navigate("/");
    } catch(error) {
      console.log(error)
    }
  }
  return (
    <Button onClick={onClick}>
      <Logo src="/github-logo.svg" />
    </Button>
  )
}

export default GithubButton;