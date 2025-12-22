export interface Recipe {
  id: string
  title: string
  minutes: number
  categories: string[]
  imageUrl: string
  description: string
  statistics: {
    calories: number
    protein: number
  }
  ingredients: Ingredient[]
  steps: CookingStep[]
}

export interface Ingredient {
  amount?: number // Base amount for 1 serving
  unit?: string // Unit of measurement, E.G. "g", "ml"
  type: string // Ingredient type, E.G. "flour", "milk", "eggs"
}

export interface CookingStep {
  id: string
  text: string
}

const recipes: Recipe[] = [
  {
    id: '0',
    title: 'Creamy Tomato Garlic Pasta',
    minutes: 45,
    categories: ['Italian', 'Pasta'],
    imageUrl: 'tomato-garlic-pasta.jpg',
    description:
      'This recipe uses lots of garlic, so you know it is going to be full of flavor. The creamy rigatoni pasta, together with the sweet, caramelized cherry tomatoes and a hint of chili make for a quick and tasty meal that you will surely make again in the future!\n\n While the dish can be frozen and stored for a while, it is recommended to heat it again in a pan instead of in a microwave. This keeps the sauce creamy and delicious.',
    statistics: {
      calories: 103,
      protein: 27,
    },
    ingredients: [
      { amount: 4, type: 'cloves of garlic' },
      { amount: 0.5, type: 'onion(s)' },
      { amount: 70, unit: 'ml', type: 'tomato paste' },
      { amount: 125, unit: 'g', type: 'rigatoni pasta' },
      { amount: 250, unit: 'ml', type: 'plant-based cooking cream' },
      { amount: 10, unit: 'g', type: 'parsley' },
      { type: 'Paprika powder' },
      { type: 'Garlic powder' },
      { type: 'Chili flakes' },
      { type: 'Olive oil' },
      { type: 'Salt & pepper' },
    ],
    steps: [
      {
        id: '0',
        text: 'Cook the rigatoni according to the instructions on the package. Add enough salt to the cooking water beforehand. Reserve a cup of pasta water while draining the pasta.',
      },
      {
        id: '1',
        text: 'Peel the garlic cloves and crush them using a garlic press. Dice the onion as well and add it to the pan together with the garlic. Cut all the cherry tomatoes in half, but set them aside for now.',
      },
      {
        id: '2',
        text: 'Heat the olive oil in a large pan over medium heat. Sauté the garlic and onion for about 5 minutes until soft and fragrant.',
      },
      {
        id: '3',
        text: 'Add the halved cherry tomatoes to the pan. Cook them for 10-15 minutes until soft and starting to caramelize. Stir regularly. Use a little of the reserved pasta water to deglaze the pan.',
      },
      {
        id: '4',
        text: 'Add the tomato paste along with some chili flakes to taste. Let it simmer gently for 5 minutes, stirring occasionally.',
      },
      {
        id: '5',
        text: 'Add the plant-based cooking cream and stir well until the sauce has an even colour. Let it simmer gently for 5-10 minutes, stirring occasionally.',
      },
      {
        id: '6',
        text: 'Taste and season with paprika powder, garlic powder, salt, pepper, and extra chili flakes if desired.',
      },
      {
        id: '7',
        text: 'Add the cooked rigatoni and chopped parsley to the sauce. Mix well and let everything sit over low heat for 5 minutes so the flavours can combine.',
      },
    ],
  },
  {
    id: '1',
    title: 'Caramelized Onion Pasta',
    minutes: 50,
    categories: ['French', 'Pasta'],
    imageUrl: 'caramelized-onion-pasta.jpg',
    description:
      'This recipe uses lots of garlic, so you know it is going to be full of flavor. The creamy rigatoni pasta, together with the sweet, caramelized cherry tomatoes and a hint of chili make for a quick and tasty meal that you will surely make again in the future!\n\n While the dish can be frozen and stored for a while, it is recommended to heat it again in a pan instead of in a microwave. This keeps the sauce creamy and delicious.',
    statistics: {
      calories: 103,
      protein: 27,
    },
    ingredients: [
      { amount: 4, type: 'cloves of garlic' },
      { amount: 0.5, type: 'onion(s)' },
      { amount: 70, unit: 'ml', type: 'tomato paste' },
      { amount: 125, unit: 'g', type: 'rigatoni pasta' },
      { amount: 250, unit: 'ml', type: 'plant-based cooking cream' },
      { amount: 10, unit: 'g', type: 'parsley' },
      { type: 'Paprika powder' },
      { type: 'Garlic powder' },
      { type: 'Chili flakes' },
      { type: 'Olive oil' },
      { type: 'Salt & pepper' },
    ],
    steps: [
      {
        id: '0',
        text: 'Cook the rigatoni according to the instructions on the package. Add enough salt to the cooking water beforehand. Reserve a cup of pasta water while draining the pasta.',
      },
      {
        id: '1',
        text: 'Peel the garlic cloves and crush them using a garlic press. Dice the onion as well and add it to the pan together with the garlic. Cut all the cherry tomatoes in half, but set them aside for now.',
      },
      {
        id: '2',
        text: 'Heat the olive oil in a large pan over medium heat. Sauté the garlic and onion for about 5 minutes until soft and fragrant.',
      },
      {
        id: '3',
        text: 'Add the halved cherry tomatoes to the pan. Cook them for 10-15 minutes until soft and starting to caramelize. Stir regularly. Use a little of the reserved pasta water to deglaze the pan.',
      },
      {
        id: '4',
        text: 'Add the tomato paste along with some chili flakes to taste. Let it simmer gently for 5 minutes, stirring occasionally.',
      },
      {
        id: '5',
        text: 'Add the plant-based cooking cream and stir well until the sauce has an even colour. Let it simmer gently for 5-10 minutes, stirring occasionally.',
      },
      {
        id: '6',
        text: 'Taste and season with paprika powder, garlic powder, salt, pepper, and extra chili flakes if desired.',
      },
      {
        id: '7',
        text: 'Add the cooked rigatoni and chopped parsley to the sauce. Mix well and let everything sit over low heat for 5 minutes so the flavours can combine.',
      },
    ],
  },
]

export default recipes
