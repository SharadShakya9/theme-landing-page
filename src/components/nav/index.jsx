import React from 'react'
import styled from 'styled-components'
import sun from "../../assets/icons/sun.png"
import moon from "../../assets/icons/moon.png"
import NavMid from './NavMid'
import Logos from '../logo'
import ButtonFactory from '../button'

const Wrapper = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.lightColor};
    padding: 0 50px;
`

const NavLast = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-left: auto;
`

const Icon = styled.img`
  width: 29px;
  height: 29px;
`

function Nav({toggleLightMode, isLightMode}) {
  return (
    <Wrapper>
      <div style={{marginRight: 'auto'}}><Logos/></div>
        <NavMid/>
        <NavLast>
          { isLightMode ? <Icon onClick={toggleLightMode} src={sun} /> : <Icon onClick={toggleLightMode} src={moon} /> }
          <ButtonFactory type="getintouch" />
        </NavLast>
    </Wrapper>
  )
}

export default Nav
