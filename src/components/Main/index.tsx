import Header from '../Header';
import { Container } from './styles';


type Props = {
    children: React.ReactNode;
}

const Main = ({children}: Props) => {
  return (
    <>
      <Container> 
        <Header></Header>
      </Container>
    </>

  )
}

export default Main