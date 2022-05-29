import { useEffect, useState } from 'react'

export const useLinesClamp = (id: string, visibleHeight: number) => {
  const [clamp, setClamp] = useState(true)

  useEffect(() => {
    const tagsBlock = document.getElementById(id)

    const setLinesClamp = () => {
      if (tagsBlock !== null) {
        const fullHeight = tagsBlock.scrollHeight

        setClamp(fullHeight > visibleHeight)
      }
    }

    window.addEventListener('load', setLinesClamp)
    window.addEventListener('resize', setLinesClamp)

    return () => window.removeEventListener('load', setLinesClamp)
  }, [id, visibleHeight])

  return clamp
}
