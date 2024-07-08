import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import './nav.css'

const Wrapper = styled.div`
    width: 246px;
    height: 16px;
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme.primaryTextColor};
    font-family: "Lexend Deca", sans-serif;
    font-size: 14.4px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.01em;
    text-align: center;

    a {
        text-decoration: none;
        color: ${props => props.theme.primaryTextColor};
    }
`

function NavMid() {
    let location = useLocation()
  return (
    <Wrapper>
        <a href='/' className={location.pathname === '/' ? 'active' : ''}>Home</a>
        <a href="/about" className={location.pathname === '/about' ? 'active' : ''}>About us</a>
        <a href="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact us</a>
    </Wrapper>
  )
}

export default NavMid
