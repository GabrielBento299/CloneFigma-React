import Header from '../Header';
import { Container } from './styles';


type Props = {
    children: React.ReactNode;
}

const Main = ({children}: Props) => {
  return (
    <>
      <Container> 
        <Header />
        
        <main>
          {children}
        </main>
      </Container>
    </>

  )
}

export default Main