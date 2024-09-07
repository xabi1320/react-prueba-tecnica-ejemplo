import { useState, useEffect } from 'react'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')

    // INFO: el api de consulta de imagenes de gatos con el fact ya no deuelve en el json el campo 'url'
    setImageUrl(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red`)

    // fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red`)
    //   .then(res => res.json())
    //   .then(response => {
    //     console.log({ response })
    //     // const { url } = response
    //     // setImageUrl(`https://cataas.com${url}`)
    //   })
  }, [fact])

  return { imageUrl }
}
