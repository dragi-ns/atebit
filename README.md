# @dragi-ns/atebit

Generates 8bit animated text

## Install

```
$ npm install atebit
```

## Usage

```html
<div class="chars dragi-ns">
  <div class="char" data-char="d"></div>
  <div class="char" data-char="r"></div>
  <div class="char" data-char="a"></div>
  <div class="char" data-char="g"></div>
  <div class="char" data-char="i"></div>
  <div class="char" data-char="-"></div>
  <div class="char" data-char="n"></div>
  <div class="char" data-char="s"></div>
</div>
```

```js
import { animate } from 'atebit';

animate(document.querySelectorAll('.dragi-ns .char'), [
  [
    { opacity: 0, transform: 'scale(0)' },
    { opacity: 1, transform: 'scale(1.5)' },
    { opacity: 1, transform: 'scale(1)' },
  ],
  {
    duration: 150,
    fill: 'forwards',
  },
]);
```

or

```html
<script src="./dist/atebit.js"></script>
<script>
  AteBit.animate(document.querySelectorAll('.dragi-ns .char'), [
    [
      { opacity: 0, transform: 'scale(0)' },
      { opacity: 1, transform: 'scale(1.5)' },
      { opacity: 1, transform: 'scale(1)' },
    ],
    {
      duration: 150,
      fill: 'forwards',
    },
  ]);
</script>
```
