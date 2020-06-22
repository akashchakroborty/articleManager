import styled from "styled-components";

const darkColor = "#343a40";
const lightColor = "#f4f4f4";
const dangerColor = "#dc3545";
const successColor = "#28a745";
const primaryColor = "#17a2b8";

export const AlertContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: center;
  margin: 30px auto;
  @media screen and (max-width: 800px) {
    width: unset;
  }
  &.alert {
    padding: 0.8rem;
    opacity: 0.9;
    background: ${primaryColor};
    color: #333;
  }

  &.alert-primary {
    background: ${primaryColor};
    color: #fff;
  }

  &.alert-light {
    background: ${lightColor};
    color: #333;
  }

  .alert-dark {
    background: ${darkColor};
    color: #fff;
  }

  &.alert-danger {
    background: ${dangerColor};
    color: #fff;
  }

  &.alert-success {
    background: ${successColor};
    color: #fff;
  }

  &.alert-white {
    background: #fff;
    color: #333;
    border: #ccc solid 1px;
  }
`;

AlertContainer.displayName = "AlertContainer";
