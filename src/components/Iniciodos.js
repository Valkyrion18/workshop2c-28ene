import { DivPadre } from '../container/Container';
import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  color: white;
`

export const Iniciodos = () => {
  
      return (
        <DivPadre>
            <form  method="post" target="_blank">
              <Label><input type="radio" checked id="respuesta1" name="check" />Main</Label>
              <Label><input type="radio" id="respuesta2" name="check" />Section</Label>
              <Label><input type="radio" id="respuesta3" name="check" />Header</Label>
              <p type='submit'>comprobar</p>
            </form>
        </DivPadre>
      );
  }
  