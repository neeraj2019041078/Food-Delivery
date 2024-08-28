import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { category } from "../utils/data";
import HeaderImage from "../utils/Images/Header.png";
import ProductCategoryCard from '../components/cards/ProductCategoryCard';
import ProductsCard from '../components/cards/ProductsCard';
import { getAllProducts } from "../api/index.js";
import { CircularProgress } from '@mui/material';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px 30px;
  
  overflow-y: auto;
  background: ${({ theme }) => theme.bg};

  @media (max-width: 768px) {
    padding: 20px 12px;
  }
`;

const Section = styled.div`
  max-width: 1400px;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Img = styled.img`
  width: 100%;
  max-width: 1200px;
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

const Footer = styled.footer`
  background-color: red;
  color: white;
  width: 100%;
  padding: 3rem 0;
  text-align: center;
  margin-top: auto;
`;

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    setLoading(true);
    try {
      const res = await getAllProducts();
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Container>
        <Section>
          <Img src={HeaderImage} alt="Header" />
        </Section>
        <Section>
          <Title>Food Categories</Title>
          <CardWrapper>
            {category.map((cat) => (
              <ProductCategoryCard key={cat.id} category={cat} />
            ))}
          </CardWrapper>
        </Section>
        <Section>
          <Title>Most Popular</Title>
          {loading ? (
            <CircularProgress />
          ) : (
            <CardWrapper>
              {products.map((product) => (
                <ProductsCard key={product.id} product={product} />
              ))}
            </CardWrapper>
          )}
        </Section>
        <Footer>
          <div style={{ marginBottom: "0.5rem" }}>
            <a
              href="https://www.linkedin.com/in/neeraj2000/"
              style={{ color: "white", margin: "0 1rem" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/neerajv_21/"
              style={{ color: "white", margin: "0 1rem" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100021791541044"
              style={{ color: "white", margin: "0 1rem" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} />
            </a>
          </div>
          <p style={{ margin: 0 }}>Foodlie India Pvt. Ltd. @ Delights</p>
        </Footer>
      </Container>
    </>
  );
};

export default Home;
