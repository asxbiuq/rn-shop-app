import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { availableProducts } from '../../slice';
import { Text } from 'react-native';
import useHeaderTitle from '../../hooks/useHeaderTitle';
import ProductItem from '../../components/shop/ProductItem';

export default () => {
  const products = useSelector(availableProducts);

  useHeaderTitle(() => <Text>All Product</Text>);

  return (
    <FlatList
      data={products}
      renderItem={({ item: { imageUrl, title, price } }) => (
        <ProductItem
          imageUrl={imageUrl}
          title={title}
          price={price}
          onViewDetail={() => {}}
          onAddToCar={() => {}}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
