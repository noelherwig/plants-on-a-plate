import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/firebase/firebase'
import mockRecipes from './mockRecipes'

export const addMockRecipes = async () => {
  const recipesCollection = collection(db, 'recipes')

  for (const recipe of mockRecipes) {
    await addDoc(recipesCollection, recipe)
  }

  console.log('✅ Mock recipes successfully added')
}
