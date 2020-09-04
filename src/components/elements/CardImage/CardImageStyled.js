import styled from 'vue-styled-components';

export const CardWrapper = styled.div`
  position: relative;
  max-width: 300px;
  width: 100%;
  max-height: 200px;
  height: 100%;
`;

export const SImage = styled.img`
  width: 300px;
  height: 100%;
  border-radius: 5px;
`;

export const ImageAuthor = styled.p`
  position: absolute;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px 0px 0px 10px;
  color: transparent;
  border-radius: 5px;
  transition: background-color .2s ease-in-out, color .3s ease-in-out;
  &:hover{
    background-color: rgba(0,0,0,0.4);
    color: white;
  }
`;
export default SImage;