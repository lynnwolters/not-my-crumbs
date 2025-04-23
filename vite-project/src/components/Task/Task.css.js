import styled from "styled-components";

export const ListItem = styled.li`
  padding: ${(props) => props.theme.spacings.spacingSmall};

  border: ${(props) => props.theme.borders.border};
  border-radius: ${(props) => props.theme.borderRadiusses.borderRadiusMedium};
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;

  font-size: ${(props) => props.theme.fontSizes.fontSizeMedium};
`;

export const CheckboxContainer = styled.div`
  width: 1.25rem;
  aspect-ratio: 1/1;

  position: relative;

  border-radius: ${(props) => props.theme.borderRadiusses.borderRadiusSmall};

  background-color: ${(props) => props.theme.colors.colorCheckbox};
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  opacity: 0;
`;
