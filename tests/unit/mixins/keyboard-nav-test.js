import Ember from 'ember';
import KeyboardNavMixin from 'ember-cli-keyboard-nav/mixins/keyboard-nav';
import { module, test } from 'qunit';

const { Object: EmberObject } = Ember;

module('Unit | Mixin | keyboard nav');

test('it triggers onEnterPress when the enter key is pressed', function(assert) {
  assert.expect(2);

  let KeyboardNavObject = EmberObject.extend(KeyboardNavMixin);
  let subject = KeyboardNavObject.create();
  let keypressEvent = {
    which: 13
  }

  subject.onEnterPress = () => {
    assert.ok(true, 'it should fire the onEnterPress method');
  };

  subject.$ = {
    find(selector) {
      assert.equal(selector, subject.get('inputSelector'), 'it should pass in the correct input selector');
      return {
        keyup(callback) {
          callback(keypressEvent);
        }
      }
    }
  };

  subject.didInsertElement();
});

test('it triggers onEscPress when the esc key is pressed', function(assert) {
  assert.expect(2);

  let KeyboardNavObject = EmberObject.extend(KeyboardNavMixin);
  let subject = KeyboardNavObject.create();
  let keypressEvent = {
    which: 27
  }

  subject.onEscPress = () => {
    assert.ok(true, 'it should fire the onEscPress method');
  };

  subject.$ = {
    find(selector) {
      assert.equal(selector, subject.get('inputSelector'), 'it should pass in the correct input selector');
      return {
        keyup(callback) {
          callback(keypressEvent);
        }
      }
    }
  };

  subject.didInsertElement();
});

test('it triggers onDownPress when the down key is pressed', function(assert) {
  assert.expect(2);

  let KeyboardNavObject = EmberObject.extend(KeyboardNavMixin);
  let subject = KeyboardNavObject.create();
  let keypressEvent = {
    which: 40
  }

  subject.onDownPress = () => {
    assert.ok(true, 'it should fire the onDownPress method');
  };

  subject.$ = {
    find(selector) {
      assert.equal(selector, subject.get('inputSelector'), 'it should pass in the correct input selector');
      return {
        keyup(callback) {
          callback(keypressEvent);
        }
      }
    }
  };

  subject.didInsertElement();
});

test('it triggers onUpPress when the up key is pressed', function(assert) {
  assert.expect(2);

  let KeyboardNavObject = EmberObject.extend(KeyboardNavMixin);
  let subject = KeyboardNavObject.create();
  let keypressEvent = {
    which: 38
  }

  subject.onUpPress = () => {
    assert.ok(true, 'it should fire the onUpPress method');
  };

  subject.$ = {
    find(selector) {
      assert.equal(selector, subject.get('inputSelector'), 'it should pass in the correct input selector');
      return {
        keyup(callback) {
          callback(keypressEvent);
        }
      }
    }
  };

  subject.didInsertElement();
});

test('it triggers onCustomPress when any other button key is pressed', function(assert) {
  assert.expect(2);

  let KeyboardNavObject = EmberObject.extend(KeyboardNavMixin);
  let subject = KeyboardNavObject.create();
  let keypressEvent = {
    which: 1
  }

  subject.onCustomPress = () => {
    assert.ok(true, 'it should fire the onCustomPress method');
  };

  subject.$ = {
    find(selector) {
      assert.equal(selector, subject.get('inputSelector'), 'it should pass in the correct input selector');
      return {
        keyup(callback) {
          callback(keypressEvent);
        }
      }
    }
  };

  subject.didInsertElement();
});
