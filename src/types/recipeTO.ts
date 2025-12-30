export interface RecipeTO {
  categories: string[]
  description: string
  imageUrl: string
  ingredients: {
    id: string
    name: string
    quantity: number
    unit: string
  }[]
  minutes: number
  statistics: {
    calories: number
    protein: number
  }
  steps: {
    id: string
    text: string
  }[]
  title: string
}
