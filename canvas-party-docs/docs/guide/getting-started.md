# Getting started

::: warning
cavnasParty is currently in alpha status. It is already suitable for out-of-the-box documentation use, but the config and theming API may still change between minor releases.
:::

## Installstion

if you want to use **CanvasParty** with a JavaScript framework see the [frameworks](/guide/using-react) section

With npm:

```Bash
$ npm install canvas-party
```

With yarn:

```Bash
$ yarn add canvas-party
```

## Basic usage

to create your first canvas first create a wraper on witch the canvas element sits in.
then use the `createCanvasParty` function with the "type" of the disired [tamplate](/tameplates), this will return a custom canvas.
The finel step is to append the canvas elemnt to the wraper.

```js
import { createCanvasParty } from 'canvas-party'

const canvasWraper = document.qeurySelector('.canvas-wraper')
const myCanvasParty = createCanvasParty(canvasWraper, { type: 'confetti' })

canvasWraper.appendChild(myCanvasParty)
```

## Tamplate customistion:

Currently **only** the `confetti` and `fireworks` tamplates have customiztion options, putting a options attribute on other
templates **will not work**

```ts
interface canvasOptions {
  type: tamplateName
  colors?: string[]
  count?: number
}
```

Example of custom firework canvas:

```js
const myCusomCanvas = createCanvasParty(canvasWraper, {
  type: 'fireworks',
  colors: ['#A3F7B5', '#DE3C4B', '#87F5FB'],
  count: 450,
})
```
