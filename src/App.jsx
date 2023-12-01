import {
  Bio,
  Button,
  Container,
  Footer,
  Form,
  Header,
  HeaderInfo,
  Informacoes,
  Input,
  Main,
  MainInfo,
  Photo,
} from './style';
import { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";

const App = () => {
  const [user, setUser] = useState("");
  const [avatar, setAvatar ] = useState(<Photo></Photo>)
  const [bio, setBio] = useState("Biografia");
  const [userName, setUserName] = useState("Nome");
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [repos, setRepos] = useState(0);
  const [dataCreate, setDataCreate] = useState("00-00-0000");
  const [local, setLocation] = useState('Localização')

  async function searchUser(e) {
    try {
      e.preventDefault();
      const url = `https://api.github.com/users/${user}`;
      const data = await fetch(url);
      const response = await data.json();
      if(data.status === 404){
        alert("Usuario nao existente!")
      }else{
        setBio(response.bio);
        setUserName(response.name);
        setFollowers(response.followers)
        setFollowing(response.following)
        setRepos(response.public_repos)
        setAvatar(response.avatar_url)
        setDataCreate(response.created_at)
        setLocation(response.location)
      
      }  
    } catch (error) {
      console.log(error)
    }
  }

  let data_americana = dataCreate.slice(0,-10);
  let data_brasil = data_americana.split('-').reverse().join('/')

  return (
    <Container>
      <Main>
        <Header>
          <h2>Localizador de Dev´s</h2>
        </Header>
        <Form>
          <Input type="text" placeholder="Search github username" onChange={e => setUser(e.target.value)} />
          <Button onClick={searchUser}>Pesquisar</Button>
        </Form>

        <Informacoes>
          <Photo style={{backgroundImage: `url(${avatar})`, backgroundSize: `cover`}}></Photo>
          <MainInfo>
            <HeaderInfo>
              <h2>{userName}</h2>
              <p><strong>Ingressou</strong>: {data_brasil}</p>
            </HeaderInfo>
            <Bio>{bio}</Bio>

            <div className="repos_followers_following">
              <div className="flex_col">
                <small>Repositorios</small>
                <h3>{repos}</h3>
              </div>
              <div className="flex_col">
                <small>Seguidores</small>
                <h3>{followers}</h3>
              </div>
              <div className="flex_col">
                <small>Seguindo</small>
                <h3>{following}</h3>
              </div>
            </div>
            <h3><FaLocationDot /> {local}</h3>
          </MainInfo>
        </Informacoes>
      </Main>
      <Footer>
        <h2>Desenvolvido por Eduardo de Oliveira</h2>
      </Footer>
    </Container>
  );
};

export default App;
