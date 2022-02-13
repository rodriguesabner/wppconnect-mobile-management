import React from 'react';
import {Layout, Image, ContactName, ContactPhone} from './styles';
import {View} from 'react-native';

const ContactList = ({contact}) => {
  return (
    <Layout>
      <Image
        source={{
          uri: `https://ui-avatars.com/api/?name=${contact.displayName}`,
        }}
      />

      <View>
        <ContactName>{contact.displayName}</ContactName>
      </View>
    </Layout>
  );
};

export default ContactList;
