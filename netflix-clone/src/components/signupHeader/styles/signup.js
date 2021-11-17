import styled from 'styled-components/macro'

export const Container = styled.div`
    background: white;
    height: 100%;
    max-height: 91px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;

`

export const Nav = styled.a`
    margin: 20px 40px 20px 0;

    font-size: 17px;
    color: #333;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
`

export const Logo = styled.img`
    width: 145px;
    height: 35px;
    margin: 20px 20px 20px 20px;

`