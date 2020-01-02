import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  padding: 0.7rem 1rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff !important;
  background: rgba(172, 61, 170, 0.9) !important;

  &:focus {
    outline: none;
  }

  &:hover {
    font-weight: normal !important;
    background: rgba(172, 61, 170, 1);
    box-shadow: 2px 2px 8px -2px #000;
  }

  &:disabled {
    background: gray;
  }

  ${({ secondary }) =>
    secondary &&
    `
		background: #001F3F;
	`}
`;
