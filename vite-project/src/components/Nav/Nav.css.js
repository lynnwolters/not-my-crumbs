import styled from "styled-components";

export const NavContainer = styled.nav`
  position: fixed;
  left: 0;
  bottom: ${(props) => props.theme.spacings.spacingSmall};
  right: 0;
  z-index: 1000;

  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  display: flex;

  padding: ${(props) => props.theme.spacings.spacingExtraExtraSmall};

  border: ${(props) => props.theme.borders.border};
  border-radius: ${(props) => props.theme.borderRadiusses.borderRadiusLarge};
`;

export const Link = styled.a`
  padding: ${(props) => props.theme.spacings.spacingSmall};

  display: flex;
  align-items: center;

  border-radius: ${(props) => props.theme.borderRadiusses.borderRadiusLarge};

  background-color: ${(props) => props.theme.colors.colorPurple};
`;

export const IconContainer = styled.div`
  width: 1.25rem;
  aspect-ratio: 1/1;

  margin-right: ${(props) => props.theme.spacings.spacingExtraSmall};
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  display: block;
`;
