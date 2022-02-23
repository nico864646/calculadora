import { ButtonHTMLAttributes, HtmlHTMLAttributes } from 'react';
import { Container } from './styles';

interface Props extends HtmlHTMLAttributes<HTMLButtonElement>{
  insideValue: string
}

function Buttons({insideValue,...rest}: Props) {
  return (
    <Container {...rest}> {insideValue} </Container>
  );
}

export default Buttons;
