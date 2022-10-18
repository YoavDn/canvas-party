# Underground

The underground type doe's not have an options object.
passing the options object will not work.

### Example of Underground canvas with react

```jsx
import { useState } from 'react'
import CanvasParty from '@canvas-party/react'

function reactApp() {
  const [canvasType, setCanvasType] = useState('underground')

  return <CanvasParty type={canvasType} />
}

export default reactApp
```
