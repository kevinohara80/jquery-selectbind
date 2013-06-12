# jQuery selectBind

Create dependent select lists.

## Usage

```js
$('.select-child').selectBind('#select-parent', {
  one: [
    { value: 'val1', text: 'This is Value 1' },
    { value: 'val2', text: 'This is Value 2' },
    { value: 'val3', text: 'This is Value 3' }
  ],
  two: [
    { value: 'val2', text: 'This is Value 2' }
  ]
});
```

Markup:

```html
<p>
  <select id="select-parent">
    <option value="one">One</option>
    <option value="two">Two</option>
    <option value="three">Three</option>
    <option value="four">Four</option>
  </select>
</p>
<p>
  <select class="select-child"></select>
</p>
<p>
  <select class="select-child"></select>
</p>
```