import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;

  padding: ${(props) => props.theme.spacings.spacingSmall};

  border: ${(props) => props.theme.borders.border};
  border-radius: ${(props) => props.theme.borderRadiusses.borderRadiusMedium};
`;

export const Label = styled.label`
  font-size: ${(props) => props.theme.fontSizes.fontSizeMedium};
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 1.25rem;
  aspect-ratio: 1/1;
`;



