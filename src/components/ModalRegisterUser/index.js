import React, {useState} from 'react';
import ModalComponent from '../Modal';
import {ChevronRight, CloseSquare} from 'react-native-iconly';
import {Button, Input, Label, Layout} from './styles';
import Contacts from 'react-native-contacts';

const ModalRegisterUser = ({open, onClose}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [lastName, setLastName] = useState('');

  async function createUser() {
    const newPerson = {
      phoneNumbers: [
        {
          label: 'mobile',
          number: phone,
        },
      ],
      givenName: name,
      familyName: lastName,
      displayName: name,
    };

    await Contacts.addContact(newPerson);
  }

  return (
    open && (
      <ModalComponent>
        <Layout>
          <CloseSquare
            color={'#666'}
            style={{marginBottom: 36}}
            onPress={() => onClose()}
          />

          <Label>Primeiro Nome</Label>
          <Input
            selectionColor={'#3e5dce'}
            style={{marginBottom: 32}}
            value={name}
            onChangeText={setName}
          />

          <Label>Sobrenome</Label>
          <Input
            selectionColor={'#3e5dce'}
            style={{marginBottom: 32}}
            value={lastName}
            onChangeText={setLastName}
          />
          <Label>Telefone</Label>
          <Input
            selectionColor={'#3e5dce'}
            value={phone}
            onChangeText={setPhone}
          />

          <Button onPress={() => createUser()}>
            <ChevronRight color={'#fff'} />
          </Button>
        </Layout>
      </ModalComponent>
    )
  );
};

export default ModalRegisterUser;
