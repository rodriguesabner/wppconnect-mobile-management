import styled from 'styled-components/native';

export const Layout = styled.View`
  flex: 1;
  background-color: #000;
`;

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  color: #ccc;
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

export const WrapperStats = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const StatsItem = styled.View`
  background: #121319;
  width: 48%;
  border-radius: 4px;
  padding: 20px;
`;

export const WrapperApiKey = styled.View`
  background: #4f00cb;
  padding: 20px;
  margin-top: 20px;
`;

export const Section = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  margin-right: 20px;
`;

export const ItemSection = styled.View`
  background: #121319;
  border-radius: 500px;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
`;

export const ItemText = styled.Text`
  font-size: 16px;
  color: #fff;
`;
