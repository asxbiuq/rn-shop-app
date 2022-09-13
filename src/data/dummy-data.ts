import { faker } from '@faker-js/faker'

faker.setLocale('zh_CN')

export const PRODUCTS: Product[] = [
  {
    id: '1354214',
    ownerId: faker.address.buildingNumber(),
    title: faker.word.adjective(),
    imageUrl: faker.image.business(),
    description: faker.lorem.lines(),
    price: Math.random() * 1000,
  },
  {
    id: faker.address.buildingNumber(),
    ownerId: faker.address.buildingNumber(),
    title: faker.word.adjective(),
    imageUrl: faker.image.business(),
    description: faker.lorem.lines(),
    price: Math.random() * 1000,
  },
  {
    id: faker.address.buildingNumber(),
    ownerId: faker.address.buildingNumber(),
    title: faker.word.adjective(),
    imageUrl: faker.image.business(),
    description: faker.lorem.lines(),
    price: Math.random() * 1000,
  },
  {
    id: faker.address.buildingNumber(),
    ownerId: faker.address.buildingNumber(),
    title: faker.word.adjective(),
    imageUrl: faker.image.business(),
    description: faker.lorem.lines(),
    price: Math.random() * 1000,
  },
  {
    id: faker.address.buildingNumber(),
    ownerId: faker.address.buildingNumber(),
    title: faker.word.adjective(),
    imageUrl: faker.image.business(),
    description: faker.lorem.lines(),
    price: Math.random() * 1000,
  },
]

export const MEALS = [
  {
    id: 'm1',
    categoryIds: ['c1'],
    title: faker.word.adjective(),
    affordability: 'affordable',
    complexity: 'simple',
    imageUrl: faker.image.food(),
    duration: 10,
    ingredients: [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter',
    ],
    steps: [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: true,
    isLactoseFree: false,
  },
  {
    id: 'm2',
    categoryIds: ['c2'],
    title: faker.word.adjective(),
    affordability: 'affordable',
    complexity: 'simple',
    imageUrl: faker.image.food(),
    duration: 10,
    ingredients: [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter',
    ],
    steps: [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: true,
    isLactoseFree: false,
  },
  {
    id: 'm3',
    categoryIds: ['c3'],
    title: faker.word.adjective(),
    affordability: 'affordable',
    complexity: 'simple',
    imageUrl: faker.image.food(),
    duration: 10,
    ingredients: [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter',
    ],
    steps: [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: true,
    isLactoseFree: false,
  },
  {
    id: 'm4',
    categoryIds: ['c4'],
    title: faker.word.adjective(),
    affordability: 'affordable',
    complexity: 'simple',
    imageUrl: faker.image.food(),
    duration: 10,
    ingredients: [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter',
    ],
    steps: [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: true,
    isLactoseFree: false,
  },
]
