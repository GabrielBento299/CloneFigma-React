import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    > div {
        width: 50%;
    }

    h1 {
        color: #1E255E;
        font-size: 56px;
        font-weight: bold;
    }

    p {
        font-size: 16px;
        color: rgba(30, 37, 94, 0.7);
        padding-right: 150px;
        margin-top: 20px;
    }
`;

export const ColumnImage = styled.div`
    text-align: right;
    position: relative;

    img {
        margin-right: -55px;
    }
`;