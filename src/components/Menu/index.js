import React from "react"

import { Container, ModalOpacity } from "./styles"

export default function Menu({style, toggle, children}){
    return (
        <>
        <Container style={style} toggle={toggle}>
            {children}
        </Container>
        {toggle && <ModalOpacity />}
        </>
    )
}