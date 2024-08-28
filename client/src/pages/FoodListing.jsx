import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductsCard from "../components/cards/ProductsCard";
import { filter } from "../utils/data";
import { CircularProgress, Slider } from "@mui/material";
import { getAllProducts } from "../api";

const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start; /* Align items at the top */
  gap: 30px;
  background: ${({ theme }) => theme.bg};

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 20px 12px;
  }
`;

const Filters = styled.div`
  flex: 0 0 300px; /* Fixed width for the filter box */
  padding: 0; /* Remove padding to ensure it starts at the top */
  max-width: 300px;

  @media (max-width: 700px) {
    max-width: 100%; /* Full width on smaller screens */
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px; /* Increased gap for better spacing */
`;

const Products = styled.div`
  flex: 1;
  padding: 20px 0;
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

const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Selectableitem = styled.div`
  cursor: pointer;
  display: flex;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  color: ${({ theme }) => theme.text_secondary + 90};
  border-radius: 8px;
  padding: 2px 8px;
  font-size: 16px;
  width: fit-content;

  ${({ selected, theme }) =>
    selected &&
    `
      border: 1px solid ${theme.text_primary};
      color: ${theme.text_primary};
      background: ${theme.text_primary + 30};
      font-weight: 500;
    `}
`;

const FoodListing = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const getFilteredProductsData = async () => {
    setLoading(true);
    try {
      const res = await getAllProducts(
        selectedCategories.length > 0
          ? `minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}&categories=${selectedCategories.join(",")}`
          : `minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}`
      );
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFilteredProductsData();
  }, [priceRange, selectedCategories]);

  return (
    <Container>
      <Filters>
        <Menu>
          {filter.map((filters) => (
            <FilterSection key={filters.name}>
              <Title>{filters.name}</Title>
              {filters.value === "price" ? (
                <Slider
                  aria-label="Price"
                  value={priceRange}
                  min={0}
                  max={1000}
                  valueLabelDisplay="auto"
                  marks={[
                    { value: 0, label: "₹0" },
                    { value: 1000, label: "₹1000" },
                  ]}
                  onChange={(e, newValue) => setPriceRange(newValue)}
                />
              ) : filters.value === "category" ? (
                <Item>
                  {filters.items.map((item) => (
                    <Selectableitem
                      key={item}
                      selected={selectedCategories.includes(item)}
                      onClick={() =>
                        setSelectedCategories((prevCategories) =>
                          prevCategories.includes(item)
                            ? prevCategories.filter(
                                (category) => category !== item
                              )
                            : [...prevCategories, item]
                        )
                      }
                    >
                      {item}
                    </Selectableitem>
                  ))}
                </Item>
              ) : null}
            </FilterSection>
          ))}
        </Menu>
      </Filters>
      <Products>
        <CardWrapper>
          {loading ? (
            <CircularProgress />
          ) : (
            products.map((product) => (
              <ProductsCard key={product._id} product={product} />
            ))
          )}
        </CardWrapper>
      </Products>
    </Container>
  );
};

export default FoodListing;
