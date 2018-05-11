# ember-cli-keyboard-nav

[![Build Status](https://travis-ci.org/timjcook/ember-cli-keyboard-nav.svg?branch=master)](https://travis-ci.org/timjcook/ember-cli-keyboard-nav)

A wrapper for binding a keyup event to a jQuery element and handling the actions with a simple interface.

## Installation

* `ember install ember-cli-keyboard-nav`

## Using the mixin

Add the mixin an Ember component by importing it with

```
import KeyboardNavMixin from 'ember-cli-keyboard-nav/mixins/keyboard-nav';
```

and applying the mixin to your component, eg.

```
export default Ember.Component.extend(KeyboardNavMixin, {
  ...
});
```

explicitly include it in your component's `didInsertElement` hook, passing in the jQuery object that you want to bind the keyboard actions to.

```
didInsertElement() {
  this.bindKeys($('input.my-input');
}
```

You can then override the following methods to handle different keyboard interactions

### onEnterPress

Handles a press of the `Enter` key.

### onEscPress

Handles a press of the `Esc` key.

### onUpPress

Handles a press of the `Up` key.

### onDownPress

Handles a press of the `Down` key.

### onCustomPress(keyNum)

Handles a press of any other key. Use the `keyNum` argument to find which key was pressed.

## License

This project is licensed under the [MIT License](LICENSE.md).
