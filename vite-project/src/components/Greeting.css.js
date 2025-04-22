import styled from "styled-components";

export const Title = styled.h1`
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors.white};

  font-size: ${(props) => props.theme.fontSizes.fontSizeLarge};
  text-align: center;
  line-height: ${(props) => props.theme.lineHeights.lineHeight140};
`;

export const Span = styled.span`
  font-size: ${(props) => props.theme.fontSizes.fontSizeMedium};
  color: ${(props) => props.theme.colors.colorTextDimmed};
`;

