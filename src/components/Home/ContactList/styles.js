import styled from 'styled-components/native';

export const Layout = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 500px;
`;

export const ContactName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
  color: #000;
`;

export const ContactPhone = styled.Text`
  font-size: 14px;
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.4);
`;
