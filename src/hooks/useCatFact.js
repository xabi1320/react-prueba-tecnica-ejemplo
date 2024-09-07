import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export const useCatFact = () => {
  const [fact, setFact] = useState()
  const refreshCat = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  // INFO: para recuperar la cita al cargar la pagina
  useEffect(refreshCat, [])

  return { fact, refreshCat }
}
