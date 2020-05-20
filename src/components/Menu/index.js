import React from "react"

import { Container, ModalOpacity } from "./styles"

export default function Menu({style, toggle, children}){
    return (
        <>
        <Container style={style}>
            {children}
        </Container>
        {toggle && <ModalOpacity />}
        </>
    )
}