import React from "react"

import { Container, ModalOpacity } from "./styles"

export default function Menu({toggle,children}){
    return (
        <>
        <Container toggle={toggle}>
            {children}
        </Container>
        <ModalOpacity />
        </>
    )
}