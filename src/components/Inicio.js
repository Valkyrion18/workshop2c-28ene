import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/Logo.png'
import { DivPadre } from '../container/Container';


const url = 'https://workshop-dailybits.herokuapp.com/usuarios'



const SuperDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const LogoE = styled.img`
  width: 20%;
  height: 80px;
  margin: 15% 40% 5% 40%;
`

const H1 = styled.h1`
 color: white;
 font-family: 'Inter';
 text-align: center;
`
const Button = styled.button`
  background-color: rgba(239, 69, 101, 1);
  width: 90%;
  color: white;
  margin-left: 5%;
  font-size: 16px;
  font-family: 'Inter';
  padding: 13px 0;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Hr = styled.hr`
  width: 90%;
  background-color: #94A1B2;
  border: none;
  height: 1px;
  margin-top: 20px;
`
const Input = styled.input`
 width: 86%;
 height: 40px;
 margin-left: 5%;
 border-radius: 3px;
 border: none;
 padding-left: 10px;
 font-size: 20px;
`

const Label = styled.label`
  color: white;
  margin-top: 10px;
  margin-left: 8%;
  margin-bottom: 4%;
  font-family: 'Inter';
`

const RecPass = styled.a`
  color: rgba(44, 182, 125, 1);
  margin-top: 10%;
  text-align: center;
  font-family: 'Inter';
`

const Span = styled.span`
  color: white;
  text-align: center;
  margin-top: 10%;
`

const ButtonI = styled.button`
  background-color: rgba(44, 182, 125, 1);
  color: white;
  cursor: pointer;
  width: 90%;
  margin-left: 5%;
  font-size: 16px;
  font-family: 'Inter';
  padding: 13px 0;
  font-weight: 600;
  border-radius: 5px;
  margin-top: 10px;
  border-radius: 10px;
  border: none;
`





export const Inicio = () => {
  

  const navegar = useNavigate();


  const [correos, setCorreos] = useState ([])
  /* const [actual, setActual] = useState ('')

  const hola = (e) => {
    console.log(e.target.value);
  } */

  

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    axios.get(url)
    .then(response =>{
      setCorreos(response.data)
      console.log(response.data)
    })
    .catch(error => {
      console.log(error);
    })
  }

  const buscarCorreo = () => {
    let correoA = document.getElementById('email').value
    const validator = correos.find(reg =>reg.correo === correoA)
    console.log(validator);
    if(validator === undefined) {
      alert('no registrado')
    } else {
      navegar(`/dos`)
    }
  }


    return (
      <DivPadre>
          <SuperDiv>
              <LogoE src={Logo} alt=""/>
              <H1>Iniciar sesión</H1>
              <Button><i className="fa-brands fa-google tamaño1-2"></i> &nbsp; Continuar con Google</Button>
              <Hr/>
              <form>
                <SuperDiv>
                  <Label htmlFor="correo">Correo electrónico</Label>
                  <Input type="email" id="email" name="user_mail" placeholder='Ingrese su correo electrónico' className='Input'></Input>
                </SuperDiv>    
                <ButtonI type='button' onClick={() => buscarCorreo()}>Continuar</ButtonI>    
              </form>
              <SuperDiv>
                <RecPass href='/'>¿Se te olvidó la contraseña?</RecPass>
                <Span>¿Aún no tienes una cuenta? <a href='/registro'  style={{color: 'rgba(44, 182, 125, 1)', textDecoration: 'none'}}>Inscribirse</a></Span>
              </SuperDiv>
          </SuperDiv>
        </DivPadre>
    );
}
