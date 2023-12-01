import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.main`
  width: 700px;
`;

export const Form = styled.form`
  position: relative;
`;

export const Input = styled.input`
  padding: 1rem;
  width: 100%;
  font-size: 1rem;
  color: #fff;
  margin-top: 10px;
  outline: none;
  border: none;
  border-radius: 4px;
  background: #1f2a48;
`;

export const Informacoes = styled.div`
  margin-top: 10px;
  background-color: #1f2a48 ;
  padding: 40px;
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  gap: 30px;
`;

export const Photo = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #fff;
`;

export const MainInfo = styled.main `
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex: 1;
  gap: 30px;
`

export const Bio = styled.p `
  font-family: serif;
  font-size: 1.2rem;
  color: #e2e2e2;
`

export const HeaderInfo = styled.header `
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`

export const Button = styled.button`
  position: absolute;
  padding: 0.6rem;
  cursor: pointer;
  right: 10px;
  top: 17px;
  border: none;
  background-color: #0d77ef;
  color: #fff;
  border-radius: 4px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Footer = styled.footer `
  position: absolute;
  bottom: 20px;
  text-align: center;
  color: #fff;
`
