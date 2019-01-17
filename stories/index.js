import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import '@storybook/addon-actions';

import { withSmartKnobs } from 'storybook-addon-smart-knobs'

const Button = ({ children, onClick }) => (
    <button onClick={ onClick }>{ children }</button>
)

Button.propTypes = {
  /**
    Label for the button.
  */
  children: PropTypes.string,

  /**
    Triggered when clicked on the button.
  */
  onClick: PropTypes.func,
};

storiesOf('Button')
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .add('simple', () => <Button>Smart knobed button</Button>)
