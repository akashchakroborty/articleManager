import styled from "styled-components";

export const CreateOrEditPageContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: center;
  margin: 30px auto;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;
    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;

export const Back = styled.div`
  text-decoration: none;
  border: 1px solid grey;
  cursor: pointer;
  border-radius: 4px;
  padding: 4px 12px;
  width: fit-content;
  align-self: flex-end;
  color: grey;
  letter-spacing: 3px;
  font-weight: bold;
  line-height: 30px;
  @media screen and (max-width: 800px) {
    margin-right: 20px;
  }
`;

Back.displayName = "Back";
