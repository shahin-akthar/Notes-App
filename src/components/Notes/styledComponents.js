// Style your elements here

import styled from 'styled-components'

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  overflow-y: hidden;
  height: 100vh;
  padding: 10px;
`

export const Heading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 40px;
  font-weight: 600;
  color: #4c63b6;
`

export const Container = styled.form`
  background-color: white;
  width: 70%;
  height: 30%;
  box-shadow: 5px 5px 10px #aab8c8;
  margin: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`

export const Title = styled.input`
  margin: 10px;
  font-family: 'Roboto';
  padding: 10px;
  border: none;
  font-size: 17px;
  font-weight: 600;
  outline: none;
  color: #475569;
`

export const NotesInput = styled.textarea`
  margin: 10px;
  font-family: 'Roboto';
  padding: 10px;
  border: none;
  font-size: 15px;
  font-weight: 500;
  outline: none;
  color: #475569;
`

export const Button = styled.button`
  background-color: #4c63b6;
  padding: 15px;
  color: white;
  border: none;
  border-radius: 10px;
  align-self: flex-end;
  margin-right: 35px;
  margin-bottom: 20px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
`

export const UnorderedList = styled.ul`
  display: flex;
  flex-direction: row;
`

export const Image = styled.img`
  height: 130px;
  margin-top: 20px;
`

export const NoNotes = styled.h1`
  color: #475569;
  font-size: 20px;
  font-weight: 700;
`

export const WillAppear = styled.p`
  color: #475569;
  font-size: 17px;
  font-weight: 600;
`
