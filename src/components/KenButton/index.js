import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

export const KenButtonDefault = styled(Button)`
  border-radius: 3px;
  min-height: 36px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  padding: 8px 12px;
  text-transform: none;
`;

const KenButtonSecondary = styled(KenButtonDefault)`
  border: 1px solid ;
`;
 
export default function KenButton(props) {
  const {
    variant,
    icon,
    label,
    children,
    buttonClass,
    disabled,
    style,
    type,
    form,
  } = props;
  const propsCopy = Object.assign({}, props);
  if (icon) {
    propsCopy.startIcon = <img src={icon} alt="icon" />;
  }

  switch (variant) {
    case 'primary':
      return (
        <KenButtonDefault
          data-testid="button"
          type={type}
          form={form}
          {...propsCopy}
          color='primary'
          variant="contained"
          disableElevation
         
          className={buttonClass}
        >
          {label || children}
        </KenButtonDefault>
      );
    case 'secondary':
      return (
        <KenButtonSecondary
          data-testid="button"
          variant="outlined"
          color="primary"
          className={buttonClass}
          type={type}
          form={form}
        >
          {label || children}
        </KenButtonSecondary>
      );
   

    default:
      return (
        <KenButtonDefault
          data-testid="button"
          type={type}
          form={form}
          {...propsCopy}
          color="primary"
           
        >
          {label || children}
        </KenButtonDefault>
      );
  }
}
