import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './src/hooks/useCachedResources';
import store from './src/store/index'
import { Provider } from 'react-redux'
import { MainStackNavigator } from './src/navigation/ShopNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>
            <MainStackNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    );
  }
}
