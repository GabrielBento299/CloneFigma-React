import styled from "styled-components";

export const Container = styled.header`
    margin-top: 30px;
    height: 42px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const MunuList = styled.ul`

    margin-left: auto;

   li {
        display: inline-block;
        margin-right: 15px;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        
        &:hover {
            color: #17a4d0;
            font-size: 16px;
        }

        a {
            color: #1E255E;
        }
   }
`;