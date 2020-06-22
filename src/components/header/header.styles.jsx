import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  box-shadow: 3px 3px 5px 3px #ccc;
  @media screen and (max-width: 800px) {
    height: 55px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 250px;
  padding-left: 25px;
  @media screen and (max-width: 800px) {
    width: 125px;
    height: 35px;
    padding: 10px;
  }
`;

export const LogoImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ logoUrl }) => `url(${logoUrl})`};
`;

LogoImage.displayName = "LogoImage";

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 800px) {
    width: 50%;
    padding-right: 10px;
  }
`;

export const OptionLink = styled(Link)`
  text-decoration: none;
  border: 1px solid blue;
  cursor: pointer;
  border-radius: 4px;
  padding: 4px 12px;
  letter-spacing: 3px;
  font-weight: bold;
  line-height: 30px;
  @media screen and (max-width: 800px) {
    padding: 0px 4px;
    letter-spacing: 1px;
    line-height: 24px;
  }
`;
LogoImage.displayName = "LogoImage";
OptionLink.displayName = "OptionLink";
