import { Container } from './styles';


type Props = {
    children: React.ReactNode;
}

const Main = ({children}: Props) => {
  return (
    <Container> 
       <h1>Teste Freont end{children}</h1>
    </Container>
  )
}

export default Main