import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1110px;
    height: 100%;
    margin: 0 auto;
    padding: 0 30px;

    display: flex;
    flex-direction: column;

    main {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;