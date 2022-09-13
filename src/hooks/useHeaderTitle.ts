import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default (View: Function) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: View,
    });
  }, [View]);
};
