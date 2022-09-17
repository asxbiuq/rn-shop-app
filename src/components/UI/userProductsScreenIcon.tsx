import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import DrawerHeaderButton from './DrawerHeaderButton'

export const userProductsScreenIcon = () => (
  <HeaderButtons HeaderButtonComponent={DrawerHeaderButton}>
    <Item title="用户" iconName={'create'} />
  </HeaderButtons>
)
