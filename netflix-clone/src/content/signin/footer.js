import React from "react"
import { Footer } from "../../components"

export default function footer() {
    return(
        <Footer>
        <Footer.Title>Questions? Contact Us</Footer.Title>
        <Footer.Break />
        <Footer.Row>
            <Footer.Column>
                <Footer.Link href="#">FAQ</Footer.Link>
                <Footer.Link href="#">Cookie Preferences</Footer.Link>
                
            </Footer.Column>
            <Footer.Column>
                <Footer.Link href="#">Help Centre</Footer.Link>
                <Footer.Link href="#">Corporate Information</Footer.Link>
            </Footer.Column>
            <Footer.Column>
                <Footer.Link href="#">Terms of Use</Footer.Link>
            </Footer.Column>
            <Footer.Column>
                <Footer.Link href="#">Privacy(is a myth ;))</Footer.Link>
            </Footer.Column>
        </Footer.Row>
      </Footer> 
    )
}