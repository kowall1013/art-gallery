import { ReactNode } from 'react';
import styled from 'styled-components';
import { COLORS } from '../constant';

type StyledButtonProps = {
  secondary?: boolean;
};

const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  padding: 24px 32px;
  background-color: ${({ secondary }) => secondary ? COLORS.primary : COLORS.secendary};
  font-size: 2rem;
  font-weight: 800;
  border: none;
  color: ${COLORS.white};
  cursor: pointer;
  transition: background-color .4s;

  &:hover {
    background-color: ${({ secondary }) => secondary ? COLORS.secendary : COLORS.primary};
  }

  &:hover span {
    background-color: ${({ secondary }) => secondary ? COLORS.primary : COLORS.secendary};
  }

  span {
    --offset: 56px;
    position: absolute;
    display: grid;
    place-items: center;
    background-color: ${({ secondary }) => secondary ? COLORS.secendary : COLORS.primary};
    top: 0;
    right: 0;
    height: 100%;
    width: var(--offset);
    transform: translateX(var(--offset));
    transition: background-color .4s;
  }
  
`;

type ButtonProps = {
  children: ReactNode;
  secondary?: boolean;
};

function Button({
  children,
  secondary = false,
  ...attributes
}: ButtonProps): JSX.Element {
  return (
    <StyledButton
      {...attributes}
      secondary={secondary}
    >
      {children}
      <span>
        { secondary ? (
           <img src="assets/icon-arrow-left.svg" alt="" />
        ) : (
          <img src="assets/icon-arrow-right.svg" alt="" />
        )}       
      </span>
    </StyledButton>
  );
}

export default Button;