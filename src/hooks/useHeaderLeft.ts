import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default (View: Function) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      //headerLeft,headerRight,headerTitle 不能直接传, 参数需要是一个返回元素的函数
      //详见: https://reactnavigation.org/docs/troubleshooting/#im-getting-invalid-hook-call-hooks-can-only-be-called-inside-of-the-body-of-a-function-component
      headerLeft: View,
    });
  }, [View]);
};
