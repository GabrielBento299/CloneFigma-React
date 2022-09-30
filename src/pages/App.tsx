import { Container, ColumnImage } from './styles';
import HeroHeaderImage from '../assets/hero-header.png';


import Main from '../components/Main';
import ButtonContact from '../components/ButtonContact';
import CardActivity from '../components/CardActivity';
 
function App() {

  return (
      <>
        <Main>
          <Container>
            <div>
              <h1>Design driven development of your web product</h1>
              <p>We are a full service digital agency that builds immesive user experience.</p>
              <ButtonContact />
            </div>

            <ColumnImage>
              <CardActivity />
              
              <img src={HeroHeaderImage} alt="Uma mulher fazendo uma pesquisa" />
            </ColumnImage>
          </Container>
        </Main>

      </>
  )
}

export default App
