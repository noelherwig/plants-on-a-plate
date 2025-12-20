export interface Recipe {
  id: string
  title: string
  minutes: number
  categories: string[]
  imageUrl: string
  statistics: {
    calories: number
    protein: number
  }
}

const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Creamy Tomato Garlic Pasta',
    minutes: 45,
    categories: ['Italian'],
    imageUrl: 'tomato-garlic-pasta.jpg',
    statistics: {
      calories: 103,
      protein: 27,
    },
  },
  {
    id: '2',
    title: 'Creamy Chicken Garlic Parmesan Pasta',
    minutes: 30,
    categories: ['Italian', 'Chicken'],
    imageUrl: 'chicken-garlic-parmesan-pasta.jpg',
    statistics: {
      calories: 103,
      protein: 27,
    },
  },
  {
    id: '3',
    title: 'Caramelized Onion & Bacon Dip',
    minutes: 50,
    categories: ['Dips', 'Bacon'],
    imageUrl: 'caramelized-onion-dip-with-crispy-bacon.jpg',
    statistics: {
      calories: 103,
      protein: 27,
    },
  },
  {
    id: '4',
    title: 'Caramelized Onion Pasta',
    minutes: 50,
    categories: ['Sweet', 'Italian'],
    imageUrl: 'caramelized-onion-pasta.jpg',
    statistics: {
      calories: 103,
      protein: 27,
    },
  },
  {
    id: '5',
    title: 'Marry Me Pasta',
    minutes: 25,
    categories: ['American', 'Italian'],
    imageUrl: 'marry-me-pasta.jpg',
    statistics: {
      calories: 103,
      protein: 27,
    },
  },
  {
    id: '6',
    title: 'Crispy Chicken Wrap',
    minutes: 35,
    categories: ['Wrap'],
    imageUrl: 'crispy-chicken-wrap.jpg',
    statistics: {
      calories: 103,
      protein: 27,
    },
  },
  {
    id: '7',
    title: 'Honey Garlic Shrimp',
    minutes: 45,
    categories: ['Shrimp'],
    imageUrl: 'honey-garlic-shrimp.jpg',
    statistics: {
      calories: 103,
      protein: 27,
    },
  },
  {
    id: '8',
    title: 'Bolognese Pasta',
    minutes: 15,
    categories: ['Italian'],
    imageUrl: 'bolognese-pasta.jpg',
    statistics: {
      calories: 103,
      protein: 27,
    },
  },
  {
    id: '9',
    title: 'French Onion Soup Pasta',
    minutes: 35,
    categories: ['French', 'Soup'],
    imageUrl: 'french-onion-soup-pasta.jpg',
    statistics: {
      calories: 103,
      protein: 27,
    },
  },
  {
    id: '10',
    title: 'Cajun Shrimp Pasta',
    minutes: 50,
    categories: ['American', 'Shrimp'],
    imageUrl: 'cajun-shrimp-pasta.jpg',
    statistics: {
      calories: 103,
      protein: 27,
    },
  },
  {
    id: '11',
    title: 'Stuffed Chicken With Spinach',
    minutes: 20,
    categories: ['Chicken'],
    imageUrl: 'stuffed-chicken-with-spinach.jpg',
    statistics: {
      calories: 103,
      protein: 27,
    },
  },
]

export default recipes
