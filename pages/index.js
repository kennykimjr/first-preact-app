import { h } from 'preact'
import { useState } from 'preact/hooks'

export default () => {
  const [count, setCount] = useState(0)
  return (
    <div>

      Click to Increment: <button onClick={() => setCount(count + 1)}>{ count }</button>
    </div>
  )
}