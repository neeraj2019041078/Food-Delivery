import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductsCard from "../components/cards/ProductsCard";
import { getFavourite } from "../api";
import { CircularProgress } from "@mui/material";

const Container = styled.div`
  padding: 20px 30px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 768px) {
    padding: 20px 12px;
  }
  background: ${({ theme }) => theme.bg};
`;
const Section = styled.div`
  max-width: 1400px;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;
const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  display: flex;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  align-items: center;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
  @media (max-width: 760px) {
    gap: 16px;
  }
`;

const EmptyMessage = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Favourites = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    setLoading(true);
    const token = localStorage.getItem("foodeli-app-token");
    await getFavourite(token).then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getProducts();
  }, []); 

  return (
    <>
      <Container>
        <Section>
          <Title>Your Favourites</Title>
          <CardWrapper>
            {loading ? (
              <CircularProgress />
            ) : products.length === 0 ? (
              <EmptyMessage>Your favourites list is empty.</EmptyMessage>
            ) : (
              <>
                {products.map((product) => (
                  <ProductsCard key={product.id} product={product} />
                ))}
              </>
            )}
          </CardWrapper>
        </Section>
      </Container>
    </>
  );
};

export default Favourites;
