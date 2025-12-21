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
  steps: string[]
}

export interface Ingredient {
  amount?: number // Base amount for 1 serving
  unit?: string // Unit of measurement, E.G. "g", "ml"
  type: string // Ingredient type, E.G. "flour", "milk", "eggs"
}

const recipes: Recipe[] = [
  {
    id: '1',
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
      'Cook the rigatoni according to the instructions on the package. Add enough salt to the cooking water beforehand. Reserve a cup of pasta water while draining the pasta.',
      'Peel the garlic cloves and crush them using a garlic press. Dice the onion as well and add it to the pan together with the garlic. Cut all the cherry tomatoes in half, but set them aside for now.',
      'Heat the olive oil in a large pan over medium heat. Sauté the garlic and onion for about 5 minutes until soft and fragrant.',
      'Add the halved cherry tomatoes to the pan. Cook them for 10-15 minutes until soft and starting to caramelize. Stir regularly. Use a little of the reserved pasta water to deglaze the pan.',
      'Add the tomato paste along with some chili flakes to taste. Let it simmer gently for 5 minutes, stirring occasionally.',
      'Add the plant-based cooking cream and stir well until the sauce has an even colour. Let it simmer gently for 5-10 minutes, stirring occasionally.',
      'Taste and season with paprika powder, garlic powder, salt, pepper, and extra chili flakes if desired.',
      'Add the cooked rigatoni and chopped parsley to the sauce. Mix well and let everything sit over low heat for 5 minutes so the flavours can combine.',
    ],
  },
  {
    id: '2',
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
      'Cook the rigatoni according to the instructions on the package. Add enough salt to the cooking water beforehand. Reserve a cup of pasta water while draining the pasta.',
      'Peel the garlic cloves and crush them using a garlic press. Dice the onion as well and add it to the pan together with the garlic. Cut all the cherry tomatoes in half, but set them aside for now.',
      'Heat the olive oil in a large pan over medium heat. Sauté the garlic and onion for about 5 minutes until soft and fragrant.',
      'Add the halved cherry tomatoes to the pan. Cook them for 10-15 minutes until soft and starting to caramelize. Stir regularly. Use a little of the reserved pasta water to deglaze the pan.',
      'Add the tomato paste along with some chili flakes to taste. Let it simmer gently for 5 minutes, stirring occasionally.',
      'Add the plant-based cooking cream and stir well until the sauce has an even colour. Let it simmer gently for 5-10 minutes, stirring occasionally.',
      'Taste and season with paprika powder, garlic powder, salt, pepper, and extra chili flakes if desired.',
      'Add the cooked rigatoni and chopped parsley to the sauce. Mix well and let everything sit over low heat for 5 minutes so the flavours can combine.',
    ],
  },
  // {
  //   id: '2',
  //   title: 'Creamy Chicken Garlic Parmesan Pasta',
  //   minutes: 30,
  //   categories: ['Italian', 'Chicken'],
  //   imageUrl: 'chicken-garlic-parmesan-pasta.jpg',
  //   statistics: {
  //     calories: 103,
  //     protein: 27,
  //   },
  // },
  // {
  //   id: '3',
  //   title: 'Caramelized Onion & Bacon Dip',
  //   minutes: 50,
  //   categories: ['Dips', 'Bacon'],
  //   imageUrl: 'caramelized-onion-dip-with-crispy-bacon.jpg',
  //   statistics: {
  //     calories: 103,
  //     protein: 27,
  //   },
  // },
  // {
  //   id: '4',
  //   title: 'Caramelized Onion Pasta',
  //   minutes: 50,
  //   categories: ['Sweet', 'Italian'],
  //   imageUrl: 'caramelized-onion-pasta.jpg',
  //   statistics: {
  //     calories: 103,
  //     protein: 27,
  //   },
  // },
  // {
  //   id: '5',
  //   title: 'Marry Me Pasta',
  //   minutes: 25,
  //   categories: ['American', 'Italian'],
  //   imageUrl: 'marry-me-pasta.jpg',
  //   statistics: {
  //     calories: 103,
  //     protein: 27,
  //   },
  // },
  // {
  //   id: '6',
  //   title: 'Crispy Chicken Wrap',
  //   minutes: 35,
  //   categories: ['Wrap'],
  //   imageUrl: 'crispy-chicken-wrap.jpg',
  //   statistics: {
  //     calories: 103,
  //     protein: 27,
  //   },
  // },
  // {
  //   id: '7',
  //   title: 'Honey Garlic Shrimp',
  //   minutes: 45,
  //   categories: ['Shrimp'],
  //   imageUrl: 'honey-garlic-shrimp.jpg',
  //   statistics: {
  //     calories: 103,
  //     protein: 27,
  //   },
  // },
  // {
  //   id: '8',
  //   title: 'Bolognese Pasta',
  //   minutes: 15,
  //   categories: ['Italian'],
  //   imageUrl: 'bolognese-pasta.jpg',
  //   statistics: {
  //     calories: 103,
  //     protein: 27,
  //   },
  // },
  // {
  //   id: '9',
  //   title: 'French Onion Soup Pasta',
  //   minutes: 35,
  //   categories: ['French', 'Soup'],
  //   imageUrl: 'french-onion-soup-pasta.jpg',
  //   statistics: {
  //     calories: 103,
  //     protein: 27,
  //   },
  // },
  // {
  //   id: '10',
  //   title: 'Cajun Shrimp Pasta',
  //   minutes: 50,
  //   categories: ['American', 'Shrimp'],
  //   imageUrl: 'cajun-shrimp-pasta.jpg',
  //   statistics: {
  //     calories: 103,
  //     protein: 27,
  //   },
  // },
  // {
  //   id: '11',
  //   title: 'Stuffed Chicken With Spinach',
  //   minutes: 20,
  //   categories: ['Chicken'],
  //   imageUrl: 'stuffed-chicken-with-spinach.jpg',
  //   statistics: {
  //     calories: 103,
  //     protein: 27,
  //   },
  // },
]

export default recipes
