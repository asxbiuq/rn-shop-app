import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import DrawerHeaderButton from './DrawerHeaderButton'

export const mainStackNavigatorDrawerIcon = () => (
  <HeaderButtons HeaderButtonComponent={DrawerHeaderButton}>
    <Item title="购物车" iconName={'cart'} />
  </HeaderButtons>
)
