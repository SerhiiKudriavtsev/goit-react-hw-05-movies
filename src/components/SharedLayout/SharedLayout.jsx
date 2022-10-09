import { Outlet } from "react-router-dom";
import { Container, Header, Logo, StyledLink } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="film-outline">
            🎬
          </span>{" "}
          Movies for you
        </Logo>
        <nav>
          <StyledLink to="/" end>Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};