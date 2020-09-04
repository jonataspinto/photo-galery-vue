import styled, { css } from 'vue-styled-components';

const props = {
  repeat: Number,
  gap: Number
}

export const BreakPoints = css`
  @media(min-width: 640px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media(min-width: 994px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media(min-width: 1200px){
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Grid = styled('div', props)`
  display: grid;
  gap: ${(props)=> props.gap ? props.gap : '15'}px;
  ${BreakPoints}
`;


export default Grid;