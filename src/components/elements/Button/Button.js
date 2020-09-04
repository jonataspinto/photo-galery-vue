import styled from 'vue-styled-components';

const Props = {
  type: String,
  loading: Boolean,
};

const SButton = styled('button', Props)`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: solid 2px;
  height: 48px;
`;

export default SButton;
