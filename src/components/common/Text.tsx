import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

type TextProps = PropsWithChildren<{
  size?: 'small' | 'medium' | 'large';
  weight?: 'normal' | 'bold';
}>;

type StyledTextProps = {
  $size: NonNullable<TextProps['size']>;
  $weight: NonNullable<TextProps['weight']>;
};

const fontSizes: Record<StyledTextProps['$size'], string> = {
  small: '12px',
  medium: '14px',
  large: '16px',
};

const fontWeights: Record<StyledTextProps['$weight'], number> = {
  normal: 500,
  bold: 700,
};

export const StyledText = styled.div<StyledTextProps>`
  font-size: ${(props) => fontSizes[props.$size]};
  font-weight: ${(props) => fontWeights[props.$weight]};
`;

export const Text = (props: TextProps) => {
  const { size = 'medium', weight = 'normal', children } = props;

  return (
    <StyledText $size={size} $weight={weight}>
      {children}
    </StyledText>
  );
};
