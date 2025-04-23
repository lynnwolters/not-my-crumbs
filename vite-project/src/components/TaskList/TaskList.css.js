import styled from "styled-components";

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.fontSizeLarge};

  display: flex;
  justify-content: space-between;

  margin-bottom: ${(props) => props.theme.spacings.spacingSmall};
`;

export const List = styled.ul`
  li:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacings.spacingExtraSmall};
  }
`;
