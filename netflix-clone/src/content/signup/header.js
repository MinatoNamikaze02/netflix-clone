import React from "react"
import logo from '../../logo.svg'
import { SignUpHeader } from "../../components"


export default function Header() {
    return(
        <SignUpHeader>
            <SignUpHeader.logo src = {logo} alt="Netflix"/>
            <SignUpHeader.Nav href="/signin" style={{fontWeight: "bold"}}>Sign In</SignUpHeader.Nav>
        </SignUpHeader>
    )
}