import styled from 'vue-styled-components';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  box-shadow: 0px 2px 10px -6px rgba(0, 0, 0, 0.2);
  background-color: #fefefe;
  z-index: 1;
`;

export const Title = styled.h1`
  color: var(--gray-text-color);
`;

export const Description = styled.p`
  color: var(--gray-text-color);
  text-transform: uppercase;
`;