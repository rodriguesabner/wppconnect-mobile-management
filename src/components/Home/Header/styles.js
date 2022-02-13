import styled from 'styled-components/native';

export const Layout = styled.View`
  flex-direction: column;
  background: #000000;
  padding: 24px;
`;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 26px;
  color: #fff;
`;

export const Greetings = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: 500;
  margin-top: 10px;
`;

export const SearchWrapper = styled.View`
  background: #edeff3;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  padding: 0 10px;
  margin-bottom: 36px;
`;

export const SearchInput = styled.TextInput`
  background: transparent;
  padding: 10px;
  min-height: 48px;
  color: #000;
  width: 100%;
`;
