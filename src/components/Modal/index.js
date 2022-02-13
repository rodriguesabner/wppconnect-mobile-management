import React from 'react';
import {StatusBar} from 'react-native';
import {Portal} from '@gorhom/portal';
import {Layout} from './styles';

const ModalComponent = ({children}) => {
  return (
    <Portal>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <Layout>{children}</Layout>
    </Portal>
  );
};

export default ModalComponent;
