import {GladeElement} from '../glade-element.js';

const assert = chai.assert;

suite('glade-element', () => {
  test('is defined', () => {
    const el = document.createElement('glade-element');
    assert.instanceOf(el, GladeElement);
  });
});
