import styled from 'vue-styled-components';
import { transparentize } from 'polished';

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${transparentize(0.25, '#000')};
  position: absolute;
  z-index: 3;
  display: flex;
  justify-content: center;
`;

export const CloseButton = styled.p`
  font-size: 24px;
  color: #fff;
  position: absolute;
  right: 0;
  margin: 10px;
  cursor: pointer;
`;