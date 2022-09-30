import { Container, Chart } from './styles';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import { useCallback } from 'react';

const CardChart = () => {

  const ampuntBars = Array.from(Array(12).keys());

  const fillZero = useCallback((value: number) => {
    const number = (value + 1).toString();

     return number.padStart(2,'0');
  },[]);


  return (
    <Container>
        <div>
            <FaArrowLeft /> 
            <strong>Stats</strong>
            <FaArrowRight />
        </div>

        <Chart>
           {ampuntBars.map((bar) =>  (
                <div key={bar}>
                    <div>
                        <span></span>
                    </div>
                    <small>{fillZero(bar)}</small>
                </div>
            ))}
        </Chart>
    </Container>
  )
}

export default CardChart