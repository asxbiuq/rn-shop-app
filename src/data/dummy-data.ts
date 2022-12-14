import { faker } from '@faker-js/faker'
import { CartItem, Product } from '../../types'

faker.setLocale('zh_CN')

export const PRODUCTS: Product[] = [
  {
    id: '1354214',
    ownerId: '123456',
    title: faker.word.adjective(),
    imageUrl: faker.image.business(),
    description: faker.lorem.lines(),
    price: Math.random() * 1000,
  },
  {
    id: '56156',
    ownerId: faker.address.buildingNumber(),
    title: faker.word.adjective(),
    imageUrl: faker.image.business(),
    description: faker.lorem.lines(),
    price: Math.random() * 1000,
  },
  {
    id: '628616',
    ownerId: faker.address.buildingNumber(),
    title: faker.word.adjective(),
    imageUrl: faker.image.business(),
    description: faker.lorem.lines(),
    price: Math.random() * 1000,
  },
  {
    id: '9651679',
    ownerId: faker.address.buildingNumber(),
    title: faker.word.adjective(),
    imageUrl: faker.image.business(),
    description: faker.lorem.lines(),
    price: Math.random() * 1000,
  },
  {
    id: '815974915',
    ownerId: faker.address.buildingNumber(),
    title: faker.word.adjective(),
    imageUrl: faker.image.business(),
    description: faker.lorem.lines(),
    price: Math.random() * 1000,
  },
]

export const CARTITEM: CartItem[] = [
  {
    quantity: 1,
    productPrice: 1651,
    productTitle: 'cqwcever',
    sum: 15215,
  },
  {
    quantity: 5,
    productPrice: 78278,
    productTitle: '27828993',
    sum: 72831,
  },
  {
    quantity: 1,
    productPrice: 1651,
    productTitle: 'cqwcever',
    sum: 7939217,
  },
  {
    quantity: 1,
    productPrice: 1651,
    productTitle: 'cqwcever',
    sum: 193878,
  },
  {
    quantity: 1,
    productPrice: 1651,
    productTitle: 'cqwcever',
    sum: 1782983,
  },
]
