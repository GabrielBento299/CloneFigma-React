import { Container, MunuList } from './styles';
 import LogoHero from '../../assets/logo.svg';

import Button from '../Button';

const Header = () => {
  return (
    <>
        <Container>
            <div>
                <img src={LogoHero} alt="Logo Hero Header" />
            </div>

            <MunuList>
                <a href="#"><li>Home</li></a>
                <a href="#"><li>About us</li></a>
                <a href="#"><li>How it work</li></a>
                <a href="#"><li>Services</li></a>
                <a href="#"><li>Contact</li></a>
            </MunuList>
            <Button />
        </Container>
    </>
  )
}

export default Header