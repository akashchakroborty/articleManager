import React from "react";
import notFound from "../../assets/notFound.svg";
import {
  ActionContainer,
  ActionImage,
} from "../article-pannel/article-pannel.styles";
import { NotFoundContainer, NotFoundText } from "./notfound.styles";

const NotFound = ({ history }) => {
  return (
    <React.Fragment>
      <NotFoundContainer onClick={() => history.push("/")}>
        <ActionContainer>
          <ActionImage actionUrl={notFound} />
        </ActionContainer>
        <NotFoundText>Page Not Found</NotFoundText>
      </NotFoundContainer>
      <p>Sorry, this page does not exist.</p>
    </React.Fragment>
  );
};

export default NotFound;
