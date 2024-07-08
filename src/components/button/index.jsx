import React from 'react'
import { GetInTouch, KnowMe, Message, Submit } from './styleButton'
import message from "../../assets/icons/message-text.png"

function ButtonFactory({type}) {
  switch (type) {
    case "getintouch":
        return (
            <GetInTouch>Get in touch</GetInTouch>
        )
    case "knowme":
        return (
            <KnowMe>Know Me</KnowMe>
        )
    case "message":
        return (
            <Message><img src={message} alt="" /></Message>
        )
    case "submit":
        return (
            <Submit>Submit</Submit>
        )
    default:
        return (
            <Submit>Submit</Submit>
        )
  }
}

export default ButtonFactory
