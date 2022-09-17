import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import DrawerHeaderButton from './DrawerHeaderButton'

export const ordersStackDrawerIcon = () => (
  <HeaderButtons HeaderButtonComponent={DrawerHeaderButton}>
    <Item title="菜单" iconName={'menu'} />
  </HeaderButtons>
)
