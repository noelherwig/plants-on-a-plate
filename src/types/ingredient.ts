export interface Ingredient {
  id: string
  name: string
  quantity: number
  unit: Unit
}

export enum Unit {
  Gram = 'g',
  Milliliter = 'ml',
  Tablespoon = 'tbsp',
  Teaspoon = 'tsp',
  Clove = 'clove',
  None = '',
}
