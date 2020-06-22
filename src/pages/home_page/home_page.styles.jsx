import styled from "styled-components";

export const HomePageContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: center;
  margin: 30px auto;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;
    margin: 20px;
  }
`;
