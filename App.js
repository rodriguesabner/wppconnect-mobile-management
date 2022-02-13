import React from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {IconlyProvider} from 'react-native-iconly';
import {PortalProvider} from '@gorhom/portal';
import {Provider} from 'react-redux';
import store from './src/store';
import {Routes} from './src/routes';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#000000'} />
      <IconlyProvider>
        <Provider store={store}>
          <PortalProvider>
            <Routes />
          </PortalProvider>
        </Provider>
      </IconlyProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
});

export default App;
