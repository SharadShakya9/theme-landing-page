import React, { useState } from 'react'
import Nav from '../components/nav'
import { themeLight, themeDark} from "../theme"
import styled, { ThemeProvider } from 'styled-components'
import hero from "../assets/images/hero.png"
import ButtonFactory from '../components/button'

const Container = styled.div`
  position: relative;
  width: 100%;
  
`

const HomeWrapper = styled.div`
  position: relative;
  height: 90vh;
  display: flex;
  background-image: url(${hero});
  background-size: 70%;
  background-position: 600px -150px;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.lightColor};
`

const LeftPart = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 100px;
`

const MainText = styled.div`
  width: 659px;
  height: 252px;
  font-family: "Lexend", sans-serif;
  font-size: 64px;
  font-weight: 300;
  line-height: 80px;
  letter-spacing: -0.04em;
  color: ${props => props.theme.primaryTextColor};
  text-align: left;
`

const TextDec = styled.span`
  font-weight: 700;
  color: #FF0013;
`

const SubText = styled.div`
  width: 659px;
  font-family: "Lexend", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 32px;
  text-align: left;
  color: ${props => props.theme.primaryTextColor};
`

const RightPart = styled.div`
  padding: 0 50px 20px 0;
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`

const MessageButtonContainer = styled.div`
  position: fixed;
  z-index: 5;
  bottom: 20px;
  right: 30px;
`

function About() {
  const [isLightMode, setIsLightMode] = useState(true)

  function handleToggle() {
    setIsLightMode(!isLightMode)
  }

  return (
    <>
      <ThemeProvider theme={isLightMode ? themeLight : themeDark}>
        <Container>
          <Nav toggleLightMode={handleToggle} isLightMode={isLightMode} />
          <HomeWrapper>
            <LeftPart>
              <MainText>
                <TextDec>Lorem ipsum</TextDec> dolor sit amet, consectetur adipiscing elit.
              </MainText>
              <ul>
                <li>
                  <SubText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </SubText>
                </li>
                <li>
                  <SubText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </SubText>
                </li>
                <li>
                  <SubText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </SubText>
                </li>
                <li>
                  <SubText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </SubText>
                </li>
              </ul>
            </LeftPart>
            <RightPart>
            </RightPart>
          </HomeWrapper>
          <MessageButtonContainer><ButtonFactory type="message" /></MessageButtonContainer>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default About
