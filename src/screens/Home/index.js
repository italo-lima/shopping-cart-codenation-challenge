import React, { useEffect, useState, useCallback } from "react";

import Loading from "../../components/Loading";
import Card from "../../components/Card";
import { Container, Products, GridCatalog } from "./styles";
import api from "../../services/api";
import { convertToSlug } from "../../utils/convertSlug";

export default function Home() {
  const [catalog, setCatalog] = useState([]);
  const [loadingCatalog, setLoadingCatalog] = useState(false);
  const [countCatalog, setCountCatalog] = useState(0);

  const loadRepo = useCallback(async () => {
    setLoadingCatalog(true);
    const response = await api.get("/catalog");
    setCountCatalog(response.data.length);

    const data = response.data.map((element) => ({
      ...element,
      slug: convertToSlug(element.name),
    }));

    setCatalog(data);
    setLoadingCatalog(false);
  }, []);

  useEffect(() => {
    loadRepo();
  }, [loadRepo]);

  return (
    <>
      <Products>
        {loadingCatalog && <Loading />}

        <Container>
          <div>{countCatalog} itens</div>
          <GridCatalog>
            {catalog &&
              catalog.map((element) => (
                <Card key={element.code_color} element={element} />
              ))}
          </GridCatalog>
        </Container>
      </Products>
    </>
  );
}
