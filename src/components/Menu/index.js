import React from "react"

import { Container, ModalOpacity } from "./styles"

export default function Menu({children}){
    return (
        <>
        <Container>
            {children}
        </Container>
        <ModalOpacity />
        </>
    )
}