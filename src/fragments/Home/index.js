import React, {useEffect, useState} from 'react';
import {
  Container,
  ItemSection,
  ItemText,
  Layout,
  Section,
  StatsItem,
  SubTitle,
  Title,
  WrapperApiKey,
  WrapperStats,
} from './styles';
import {ScrollView, Text} from 'react-native';
import Contacts from 'react-native-contacts';
import ModalRegisterUser from '../../components/ModalRegisterUser';
import {useDispatch, useSelector} from 'react-redux';
import {closeModalAddUser} from '../../store/actions/page';
import {
  Activity,
  Message,
  Send,
  Setting,
  Swap,
  User,
} from 'react-native-iconly';

const Home = () => {
  const dispatch = useDispatch();

  const [contacts, setContacts] = useState([]);
  const appSelector = useSelector(state => state.app);

  useEffect(() => {
    async function getAllContacts() {
      const contactsList = await Contacts.getAll();

      setContacts(contactsList);
    }

    getAllContacts();

    return () => {
      setContacts([]);
    };
  }, []);

  const handleCloseModal = () => {
    dispatch(closeModalAddUser());
  };

  return (
    <Layout>
      <ModalRegisterUser open={appSelector.open} onClose={handleCloseModal} />

      <ScrollView nestedScrollEnabled={true}>
        <Container>
          <WrapperStats>
            <StatsItem>
              <User set={'bulk'} color="#925cee" />

              <SubTitle>Total de Contatos</SubTitle>
              <Title>{contacts.length}</Title>
            </StatsItem>

            <StatsItem>
              <Activity set={'bulk'} color="#925cee" />

              <SubTitle>Requisições Realizadas</SubTitle>
              <Title>{contacts.length}</Title>
            </StatsItem>
          </WrapperStats>

          <WrapperApiKey>
            <Text>API Key: Wr58GA-fsWQRJKnb-Wr58GA-fsWQRJKnb</Text>
          </WrapperApiKey>

          <WrapperStats style={{marginTop: 20}}>
            <StatsItem>
              <Send set={'bulk'} color="#925cee" />

              <SubTitle>Mensagens Enviadas</SubTitle>
              <Title>{contacts.length}</Title>
            </StatsItem>

            <StatsItem>
              <Message set={'bulk'} color="#925cee" />

              <SubTitle>Mensagens Recebidas</SubTitle>
              <Title>{contacts.length}</Title>
            </StatsItem>
          </WrapperStats>
        </Container>

        <ScrollView
          horizontal={true}
          overScrollMode={'never'}
          showsHorizontalScrollIndicator={false}>
          <Section>
            <ItemSection>
              <Activity color={'#ccc'} />
            </ItemSection>
            <ItemText>Gerenciar Sessoes</ItemText>
          </Section>

          <Section>
            <ItemSection>
              <User color={'#ccc'} />
            </ItemSection>
            <ItemText>Cadastrar Contato</ItemText>
          </Section>

          <Section>
            <ItemSection>
              <Send color={'#ccc'} />
            </ItemSection>
            <ItemText>Enviar Mensagem</ItemText>
          </Section>

          <Section>
            <ItemSection>
              <Message color={'#ccc'} />
            </ItemSection>
            <ItemText>Agendar Mensagem</ItemText>
          </Section>

          <Section>
            <ItemSection>
              <Setting color={'#ccc'} />
            </ItemSection>
            <ItemText>Configurar Servidor</ItemText>
          </Section>

          <Section>
            <ItemSection>
              <Swap color={'#ccc'} />
            </ItemSection>
            <ItemText>Reiniciar Servidor</ItemText>
          </Section>
        </ScrollView>
      </ScrollView>
    </Layout>
  );
};

export default Home;
