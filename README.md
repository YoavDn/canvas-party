# Getting started

## HTML canvas animations library

warning
canvasParty is currently in alpha status. It is already suitable
for out-of-the-box documentation use, but the API may still change between minor releases.

## Installation

If you want to use **CanvasParty** with a JavaScript framework section in the docs

With npm:

```Bash
$ npm install canvas-party
```

With yarn:

```Bash
$ yarn add canvas-party
```

## Basic usage

to create your first canvas first create a wrapper on witch the canvas element sits in.
then use the `useCanvasParty` function with the "type" of the desired `template`, this will return a custom canvas.
The final step is to append the canvas element to the wrapper.

```js
import { useCanvasParty } from "canvas-party"

const canvasWrapper = document.querySelector(".canvas-wrapper")
const canvasParty = useCanvasParty(canvasWrapper, { type: "confetti" })

canvasWrapper.appendChild(canvasParty.canvas)
```

## Template customization:

Currently **only** the `confetti` and `fire` template have customization options, putting a options attribute on other
templates **will not work**

```ts
interface canvasOptions {
  type: templateName
  options: optionsSettings
}
```

Example of custom confetti canvas:

```js
const myCustomCanvas = useCanvasParty(canvasWrapper, {
  type: "confetti",
  options: {
    colors: ["#A3F7B5", "#DE3C4B", "#87F5FB"],
    count: 450,
  },
})
```
