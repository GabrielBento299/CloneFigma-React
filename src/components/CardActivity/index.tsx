import { Container } from './styles';

import { FiArrowUp } from 'react-icons/fi'

const CardActivity = () => {
  return (
    <Container>
        <small>Activity</small>
        <div>
          <span>18</span>
          <FiArrowUp  size={22} /> 
        </div>

        <i className="circle1"></i>
        <i className="circle2"></i>
        <i className="circle3"></i>
    </Container>
  )
}

export default CardActivity