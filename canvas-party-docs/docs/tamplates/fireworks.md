# Fireworks

The fireworks type support a options object for extra configuration.
not passing the options object will results the default fireworks tamplate

### Example of confetti canvas with react

```jsx
import { useState } from 'react'
import CanvasParty from '@canvas-party/react'

function reactApp() {
  const [canvasType, setCanvasType] = useState('fireworks')
  const [canvasOptions, setCanvasOptions] = useState({
    colors: ['#ABDF75', '#DB5461', '#FDE74C'],
    count: 60,
  })

  return <CanvasParty type={canvasType} options={canvasOptions} />
}

export default reactApp
```
