import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 10rem;

  display: flex;
  justify-content: center;
  align-items: end;

  padding-bottom: ${(props) => props.theme.spacings.spacingSmall}};
`;
