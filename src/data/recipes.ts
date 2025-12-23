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
    categories: ['Pasta', 'One-Pan Meals'],
    imageUrl: 'recipe-0.png',
    description:
      'This recipe uses lots of garlic, so you know it is going to be full of flavor. The creamy rigatoni pasta, together with the sweet, caramelized cherry tomatoes and a hint of chili make for a quick and tasty meal that you will surely make again in the future!\n\n While the dish can be frozen and stored for a while, it is recommended to heat it again in a pan instead of in a microwave. This keeps the sauce creamy and delicious.',
    statistics: {
      calories: 860,
      protein: 24,
    },
    ingredients: [
      { amount: 4, type: 'clove(s) of garlic' },
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
    title: 'Carrot Chickpea Soup',
    minutes: 50,
    categories: ['Soup'],
    imageUrl: 'recipe-1.png',
    description:
      'This soup is packed with wholesome flavors from roasted carrots, garlic, and chickpeas, giving it a naturally sweet and savory taste. The creamy texture, combined with a subtle hint of paprika and chili, makes it a comforting and satisfying meal that is perfect any time of year!\n\nI once made 10 liters of this soup for my scout group. They all enjoyed it, but I made way (way!) to much and ended up taking half of it back home! Luckily this enabled my friends and family to enjoy this soup as well.',
    statistics: {
      calories: 360,
      protein: 8,
    },
    ingredients: [
      { amount: 100, unit: 'g', type: 'carrots' },
      { amount: 50, unit: 'g', type: 'chickpeas' },
      { amount: 0.5, type: 'clove(s) of garlic' },
      { amount: 0.25, type: 'onion(s)' },
      { amount: 0.125, type: 'vegetable stock cube(s)' },
      { amount: 100, unit: 'ml', type: 'coconut milk' },
      { type: 'Paprika powder' },
      { type: 'Olive oil' },
      { type: 'Chili flakes' },
    ],
    steps: [
      {
        id: '0',
        text: 'Preheat your oven to 180 degrees Celsius.',
      },
      {
        id: '1',
        text: 'Peel the onion and finely chop it. Also slice the carrots into quarters and peel the garlic cloves.',
      },
      {
        id: '2',
        text: 'Rinse the chickpeas and spread them out on a baking tray.',
      },
      {
        id: '2',
        text: 'Add the onion, carrots, and garlic cloves to the baking tray and sprinkle over the paprika powder. Drizzle with oil and toss all the vegetables together.',
      },
      {
        id: '3',
        text: 'Place the baking tray in the preheated oven for about thirty minutes, then take it out.',
      },
      {
        id: '4',
        text: 'Scoop everything into a soup pot and add boiling water, enough to cover all the vegetables. Crumble in the bouillon cube and let it simmer for about 10 minutes on low heat.',
      },
      {
        id: '5',
        text: 'Finally, use an immersion blender to puree the mixture until smooth. Serve with a sprinkle of extra paprika powder on top.',
      },
    ],
  },
  {
    id: '2',
    title: 'Korean Beef',
    minutes: 25,
    categories: ['Korean'],
    imageUrl: 'recipe-2.png',
    description:
      'This Korean-inspired dish is bursting with flavour thanks to the combination of savory vegan minced meat, aromatic garlic, onion, and leek, all perfectly balanced with soy sauce, ketjap manis, and a touch of sambal oelek if you want that subtle kick.\n\n I will always remember the first dish I made when I started living alone: spaghetti with some salt and some lost mushrooms. The next day, I decided that things needed to change, as my last dish barely counted as food. I will thus also always remember the second dish I made when living alone, which was this. I still make it to this day!',
    statistics: {
      calories: 360,
      protein: 8,
    },
    ingredients: [
      { amount: 80, unit: 'g', type: 'rice' },
      { amount: 125, unit: 'g', type: 'vegan minced meat' },
      { amount: 1, type: 'onion(s)' },
      { amount: 1, type: 'leek(s)' },
      { amount: 1, type: 'clove(s) of garlic' },
      { amount: 0.25, type: 'vegetable stock cube(s)' },
      { type: 'Soy sauce' },
      { type: 'Ketjap manis' },
      { type: 'Sambal oelek' },
      { type: 'Olive oil' },
    ],
    steps: [
      {
        id: '0',
        text: 'Cook the rice according to the instruction on the package',
      },
    ],
  },
]

export default recipes
