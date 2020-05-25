import {GladeAnnotateable} from '../glade-annotateable.js';

const assert = chai.assert;

suite('glade-annotateable', () => {
  test('is defined', () => {
    const el = document.createElement('glade-annotateable');
    assert.instanceOf(el, GladeAnnotateable);
  });
});
