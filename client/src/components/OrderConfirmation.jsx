import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.bg};
`;

const Section = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.primary};
`;

const DetailBox = styled.div`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Detail = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.textPrimary};
`;

const ProductList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ProductItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  padding-bottom: 10px;
  font-size: 16px;
`;

const OrderConfirmation = () => {
  const orders = useSelector((state) => state.order.orders);

  // Get the last three orders
  const lastThreeOrders = orders.slice(-3);

  if (lastThreeOrders.length === 0) {
    return (
      <Container>
        <Section>
          <Title>No Orders Found</Title>
          <DetailBox>
            <Detail>Please place an order to see the details here.</Detail>
          </DetailBox>
        </Section>
      </Container>
    );
  }

  return (
    <Container>
      <Section>
        <Title>Order Confirmation</Title>
        {lastThreeOrders.map(order => (
          <DetailBox key={order._id}>
            <Detail>
              <strong>Order ID:</strong> {order._id}
            </Detail>
            <Detail>
              <strong>Status:</strong> {order.status}
            </Detail>
            <Detail>
              <strong>Total Amount:</strong> ₹{order.total_amount}
            </Detail>
            <Detail>
              <strong>Address:</strong> {order.address}
            </Detail>
          </DetailBox>
        ))}
      </Section>
    </Container>
  );
};

export default OrderConfirmation;
