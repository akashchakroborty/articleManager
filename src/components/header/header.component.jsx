import React from "react";
import logoUrl from "../../assets/readItLogo.png";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  LogoImage,
} from "./header.styles";
import { connect } from "react-redux";
import { clearArticle } from "../../redux/articles/articles.action";
export const Header = ({ clearArticle }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <LogoImage logoUrl={logoUrl} className="logo-image" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink
          className="create-article"
          to="/createArticle"
          onClick={() => {
            clearArticle();
          }}
        >
          CREATE ARTICLE
        </OptionLink>
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default connect(null, { clearArticle })(Header);
