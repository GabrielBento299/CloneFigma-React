import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    width: 210px;
    height: 210px;
    left: 30px;

    background: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    padding: 20px;

    opacity: 0;
    bottom: -50px;

    animation: showOnpage 1.50s linear forwards;


    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg {
            font-size: 11px;
            color: #121212;
            font-weight: 400;
        }

        strong {
            font-size: 18px;
        }
    }

    @keyframes showOnpage {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
            bottom: 0;
        }
    }
`;

function genereteBars() {
    const ampuntBars = [... Array(12).keys()];
    let stylesSpan: any = [];

    ampuntBars.forEach(bar => {
        stylesSpan.push( `
        div: nth-child(${bar + 1}) {
            display: flex;
            align-items: center; 
            justify-content: center;
            flex-direction: column;

          div {
            background-color: #EFF3FE;
            width: 2.1px;
            height: 91px;
            border-radius: 5px;
            display: flex;
            justify-content: flex-end;
    
        span {
            width: 3.5px;
            height: 0;
            max-height: ${Math.ceil(Math.random() * 100)}px;
            display: block;
            background-color: #5236FF;
            border-radius: 5px;

            animation: animationHeigth 1s linear forwards;
               
        }  
        }
        small {
            color: #BACCFD;
            font-size: 10px;
            margin-top: 10px;
        }
    }
    `);
    });

    return stylesSpan.join("");

}

export const Chart = styled.div`
    margin-top: 28px;

    ${genereteBars()}

    @keyframes animationHeigth {
        from {
            height: 0;
        }

        to {
            height: 91px;
        }
    }
`;