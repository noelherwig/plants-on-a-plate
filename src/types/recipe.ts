import type { Ingredient } from './ingredient'

export interface Recipe {
  id: string
  title: string
  minutes: number
  categories: string[]
  imageUrl: string
  description: string
  statistics: Statistics
  ingredients: Ingredient[]
  steps: CookingStep[]
}

export interface Statistics {
  calories: number
  protein: number
}

export interface CookingStep {
  id: string
  text: string
}
