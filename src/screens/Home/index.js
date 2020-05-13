import React, {useEffect, useState} from "react"

import Header from "../../components/Header"
import Loading from "../../components/Loading"
import Card from "../../components/Card"
import {
  Container, 
  Products, 
  GridCatalog, 
} from "./styles"
import api from "../../services/api"
import {convertToSlug} from "../../utils/convertSlug"

export default function Home(){

  const [catalog, setCatalog] = useState({data:[], loading: false})
  const [countCatalog, setCountCatalog] = useState(0)

  async function loadRepo(){
    setCatalog({...catalog, loading: true})
    const response = await api.get('/catalog')
    setCountCatalog(response.data.length)

    const data = response.data.map(element => ({
        ...element,
        slug: convertToSlug(element.name),
    }));

    setCatalog({data, loading: false})
  }

  useEffect(() => {
    loadRepo()
  }, [])

  return(
    <>
      <Products>
        {catalog.loading && <Loading />}
        <Container>
          <div>{countCatalog} itens</div>
          <GridCatalog>
            {catalog.data && catalog.data.map(element => (
              <Card 
                key={element.code_color}
                element={element}
              />
            ))}
          </GridCatalog>
        </Container>
      </Products>
      </>
  )
}