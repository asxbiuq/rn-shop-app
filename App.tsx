import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
// import useColorScheme from './src/hooks/useColorScheme';
// import Navigation from './src/navigation';

import store from './src/store/index'
import { Provider } from 'react-redux'
import { MainStackNavigator } from './src/navigation/ShopNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const isLoadingComplete = useCachedResources();
  // const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          {/* <Navigation colorScheme={colorScheme} />
          <StatusBar /> */}
          <NavigationContainer>
            <MainStackNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    );
  }
}
