import React, {useState} from 'react'
import Nav from '../components/nav'
import { themeLight, themeDark} from "../theme"
import styled, { ThemeProvider } from 'styled-components'
import ButtonFactory from '../components/button'
import Telephone from "../assets/images/telephone.png"
import Email from "../assets/icons/email.png"
import Phone from "../assets/icons/phone.png"
import Address from "../assets/icons/location_on.png"

const Container = styled.div`
  position: relative;
  width: 100%;
`

const ContactWrapper = styled.section`
  width: 100%;
  height: 895px;
  display: flex;
  padding: 30px;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.contactWrapperColor};
`

const LeftPart = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  margin: 15px;
  text-align: left;
`

const FormWrapper = styled.div`
  width: 690px;
  height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  background-color: ${(props) => props.theme.lightColor};
  box-shadow: 0px 8px 8px -4px #10192808;
  box-shadow: 0px 24px 32px -4px #10192814;
`

const TitleContainer = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Lexend", sans-serif;
  font-weight: 400;
  color: ${props => props.theme.primaryTextColor};
`

const GetInTouchWrapper = styled.p`
  font-size: 18px;
  line-height: 23.4px;
`

const SubText = styled.p`
  font-size: 16px;
  line-height: 20.8px;
`

const TextDec = styled.span`
  color: #FF0013;
`

const Label = styled.label`
  font-family: "Lexend", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20.8px;
  text-align: left;
  color: ${props => props.theme.primaryTextColor};
`

const Input = styled.input`
  margin-top: 5px;
  display: flex;
  align-items: center;
  padding: 10px 30px;
  width: 100%;
  height: 41px;
  border: 1px solid #B2BBC0;
  border-radius: 10px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  background: transparent;
  color: ${props => props.theme.primaryTextColor};
`

const DescInput = styled.input`
  width: 100%;
  height: 219px;
  margin-top: 5px;
  padding: 15px 30px 15px 30px;
  border-radius: 10px;
  border: 1px solid #B2BBC0;
  display: flex;
  background: transparent;
  
  &::placeholder {
    position: absolute;
    top: 15px;
  }
`

const RightPart = styled.div`
  width: 50%;
  height: 100%;
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const PhoneWrapper = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.lightColor};
  box-shadow: 0px 8px 8px -4px #10192808;
  box-shadow: 0px 24px 32px -4px #10192814;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContactDetailsWrapper = styled.div`
  height: 400px;
  width: 100%;
  padding-left: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.lightColor};
  box-shadow: 0px 8px 8px -4px #10192808;
  box-shadow: 0px 24px 32px -4px #10192814;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Contacts = styled.div`
  display: flex;
  width: 60%;
  padding: 7px;
  background-color: ${props => props.theme.contactDetailsColor};
  border-radius: 5px;
  display: flex;
  gap: 15px;
`

const IconContainer = styled.div`
  width: 74px;
  height: 74px;
  border-radius: 50%;
  border: 1px solid #5B5B5B1A;
  background-color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContactTextContainer = styled.div`
  font-family: "Lexend", sans-serif;
  font-weight: 500;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ContactText = styled.p`
  font-size: 18px;
  line-height: 25.2px;
  color: ${props => props.theme.contactText};
`

const ContactSubText = styled.p`
  font-size: 16px;
  line-height: 20.8px;
  color: #919191;
`

const MessageButtonContainer = styled.div`
  position: fixed;
  z-index: 5;
  bottom: 20px;
  right: 30px;
`

function Contact() {
  const [isLightMode, setIsLightMode] = useState(true)

  function handleToggle() {
    setIsLightMode(!isLightMode)
  }

  return (
    <>
      <ThemeProvider theme={isLightMode ? themeLight : themeDark}>
        <Container>
          <Nav toggleLightMode={handleToggle} isLightMode={isLightMode} />
          <ContactWrapper>
            <LeftPart>
              <FormWrapper>
                <TitleContainer>
                  <GetInTouchWrapper>Get in touch</GetInTouchWrapper>
                  <SubText>Ready to Work Together? <TextDec>Build a project with us!</TextDec></SubText>
                </TitleContainer>
                <div>
                  <Label htmlFor="Name">Name & Company</Label>
                  <Input type="text" id="Name" placeholder='Enter your name' required />
                </div>
                <div>
                <Label htmlFor="Email">Email</Label>
                <Input type="email" id="Email" placeholder='Enter your email address' required />
                </div>
                <div>
                <Label htmlFor="Phone">Phone no.</Label>
                <Input type="tel" id="Phone" placeholder='Enter your phone number' required />
                </div>
                <div>
                <Label htmlFor='Description'>Project Description</Label>
                <DescInput id="Description" placeholder='Enter your message' required />
                </div>
                <br />
                <br />
                <ButtonFactory type="submit" />
              </FormWrapper>
            </LeftPart>
            <RightPart>
              <PhoneWrapper>
                <img src={Telephone} alt="telephone" />
              </PhoneWrapper>
              <ContactDetailsWrapper>
                <Contacts>
                  <IconContainer><img src={Email} alt="email" /></IconContainer>
                  <ContactTextContainer>
                    <ContactText>Email</ContactText>
                    <ContactSubText>info@vrittechnologies.com</ContactSubText>
                  </ContactTextContainer>
                </Contacts>
                <Contacts>
                  <IconContainer><img src={Phone} alt="phone" /></IconContainer>
                  <ContactTextContainer>
                    <ContactText>Phone</ContactText>
                    <ContactSubText>+977 9861601174</ContactSubText>
                  </ContactTextContainer>
                </Contacts>
                <Contacts>
                  <IconContainer><img src={Address} alt="address" /></IconContainer>
                  <ContactTextContainer>
                    <ContactText>Address</ContactText>
                    <ContactSubText>Sankhamul, Kathmandu</ContactSubText>
                  </ContactTextContainer>
                </Contacts>
              </ContactDetailsWrapper>
            </RightPart>
          </ContactWrapper>
          <MessageButtonContainer>
            <ButtonFactory type="message" />
          </MessageButtonContainer>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default Contact
