import { useEffect, useState } from 'react'

type useWordsAnimationType = {
  word: string
  delay: number

  direction: 'ltr' | 'rtl'
  tag: 'p' | 'span'

  key?: number
}
const useWordsAnimation = ({ word, delay, direction, tag, key }: useWordsAnimationType) => {
  const [get, set] = useState('')
  const [isFinished, setFinishState] = useState(false)

  useEffect(() => {
    let len = 0

    let interval = setInterval(() => {
      if (len >= word.length) {
        clearInterval(interval)
        setFinishState(true)
      }
      set(direction === 'rtl' ? word.slice(-len) : word.slice(0, len))
      len++
    }, delay)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return tag === 'p' ? (
    <p
      className={'w-fit block'}
      style={isFinished ? { border: 'none' } : { borderRight: '10px solid white' }}>
      {get}
    </p>
  ) : (
    <span
      key={key && key}
      className={'w-fit transition-all'}
      style={
        isFinished
          ? { border: 'none', display: 'inline' }
          : { borderRight: '10px solid white', display: 'block' }
      }>
      {get}
    </span>
  )
}

export const useWordsAnimationBulk = (words: string[]) => {
  return words.map((e, i) =>
    useWordsAnimation({
      key: i,
      tag: 'span',
      word: e,
      direction: 'ltr',
      delay: [10, 8, 9, 11, 4, 20, 40, 46, 188, 200][i]
    })
  )
}

export default useWordsAnimation
