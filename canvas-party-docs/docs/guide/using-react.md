# CanvasParty with React

to add canvasParty element to your React appliction first install the `@canvas-party/react` package that serve as a wraper for the canvasElement
and add is as plugin in the `main.js` file.

To get started run this command in the terminal at your project root

```bash
$ npm install @canvas-party/react
```

to add canvasParty globaly as a plugin.

```jsx
import { useState } from 'react'
import CanvasParty from '@canvas-party/react'

function reactApp() {
const [canvasType, setCanvasType] = useState('confetti')

    return (
        <button onClick={() => setCanvasType('trippy')}></button>
        <CanvasParty type={canvasType} />
    )
}

export default reactApp
```
