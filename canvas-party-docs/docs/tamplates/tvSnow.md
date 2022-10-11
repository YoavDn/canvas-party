# TV Snow

The starfield type doe's not have an options object.
passing the options object will not work.

### Example of TV Snow canvas with react

```jsx
import { useState } from 'react'
import CanvasParty from '@canvas-party/react'

function reactApp() {
  const [canvasType, setCanvasType] = useState('tvSnow')

  return <CanvasParty type={canvasType} />
}

export default reactApp
```
