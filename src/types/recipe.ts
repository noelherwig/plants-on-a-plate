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
