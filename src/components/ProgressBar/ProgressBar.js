/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 8,
    padding: 0,
  },
  medium: {
    height: 12,
    padding: 0,
  },
  large: {
    height: 16,
    padding: 4,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error('Unknown size passed to progress bar.');
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow="20"
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        "--padding": styles.padding + "px",
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <Bar
        style={{
          "--width": value + "%",
          "--height": styles.height + "px",
        }}
      />
    </Wrapper>
  );

};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 4px;
  overflow: hidden;
  padding: var(--padding);
`;

const Bar = styled.div`
  width: 100;
  height: var(--height);
  background: -webkit-linear-gradient(left, ${COLORS.primary} 0%, ${COLORS.primary} var(--width), transparent var(--width), transparent 100%);
  border-radius: 4px;
`;

export default ProgressBar;
