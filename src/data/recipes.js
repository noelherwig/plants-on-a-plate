const images = require.context('./images', true, /\.jpg$/)

const recipes = [
  {
    id: 1,
    title: 'Creamy Tomato Garlic Pasta',
    minutes: 45,
    categories: ['Italian'],
    imageUrl: images('./tomato-garlic-pasta.jpg'),
  },
  {
    id: 2,
    title: 'Creamy Chicken Garlic Parmesan Pasta',
    minutes: 30,
    categories: [],
    imageUrl: images('./chicken-garlic-parmesan-pasta.jpg'),
  },
]

export default recipes
