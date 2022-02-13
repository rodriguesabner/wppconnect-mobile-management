import React from 'react';
import {Container, Greetings, Layout, Title} from './styles';
import {Setting, AddUser} from 'react-native-iconly';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {openModalAddUser} from '../../../store/actions/page';

const Header = () => {
  const dispatch = useDispatch();

  async function openModalAdd() {
    dispatch(openModalAddUser());
  }

  return (
    <Layout>
      <Container>
        <Title>CTT</Title>

        <View style={{flexDirection: 'row'}}>
          <AddUser
            style={{marginRight: 10}}
            color={'#ccc'}
            onPress={() => openModalAdd()}
          />

          <Setting color={'#ccc'} onPress={() => openModalAdd()} />
        </View>
      </Container>
    </Layout>
  );
};

export default Header;
