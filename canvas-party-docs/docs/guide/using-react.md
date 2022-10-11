# CanvasParty with React

to add canvasParty element to your React appliction first install the `@canvas-party/react` package.

To get started run this command in the terminal at your project root

```bash
$ npm install @canvas-party/react
```

Then import the **CanvasParty** component and give it the desired `tamplate type`

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
