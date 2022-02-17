import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { COLORS, QUERIES } from '../constant';

type StyledButtonProps = {
  secondary?: boolean;
};

const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  ${({ secondary }) =>
    secondary &&
    css`
      margin-left: 56px;
    `}
  padding: 24px 32px;
  background-color: ${({ secondary }) =>
    secondary ? COLORS.secendary : COLORS.primary};
  font-size: 2rem;
  font-weight: 800;
  border: none;
  color: ${COLORS.white};
  cursor: pointer;
  transition: background-color 0.4s;

  a {
    color: ${COLORS.white};
    text-decoration: none;
  }

  @media ${QUERIES.laptopAndUp} {
    &:hover {
      background-color: ${({ secondary }) =>
        secondary ? COLORS.secendary : COLORS.primary};
    }

    &:hover span {
      background-color: ${({ secondary }) =>
        secondary ? COLORS.primary : COLORS.secendary};
    }
  }

  span {
    position: absolute;
    display: grid;
    place-items: center;
    background-color: ${({ secondary }) =>
      secondary ? COLORS.primary : COLORS.secendary};
    top: 0;
    right: ${({ secondary }) => (secondary ? 'auto' : 0)};
    left: ${({ secondary }) => (secondary ? 0 : 'auto')};
    height: 100%;
    width: 56px;
    transform: ${({ secondary }) =>
      secondary ? 'translateX(-56px)' : 'translateX(56px)'};
    transition: background-color 0.4s;
  }
`;

type ButtonProps = {
  children: ReactNode;
  secondary?: boolean;
  path: string;
};

function Button({
  children,
  secondary = false,
  path,
  ...attributes
}: ButtonProps): JSX.Element {
  return (
    <StyledButton {...attributes} secondary={secondary}>
      <Link to={path}>{children}</Link>
      <span>
        {secondary ? (
          <img src="assets/icon-arrow-left.svg" alt="" />
        ) : (
          <img src="assets/icon-arrow-right.svg" alt="" />
        )}
      </span>
    </StyledButton>
  );
}

export default Button;
