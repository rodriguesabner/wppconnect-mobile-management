import styled from 'styled-components/native';

export const Layout = styled.View`
  padding: 20px;
  flex: 1;
`;

export const Label = styled.Text`
  color: #000;
  font-size: 26px;
  font-weight: 500;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: rgba(204, 204, 204, 0.2);
  color: #000;
  padding: 10px 0;
  font-size: 26px;
`;

export const Button = styled.TouchableOpacity`
  background: #3e5dce;
  height: 50px;
  width: 50px;
  border-radius: 500px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 26px;
  right: 26px;
`;
