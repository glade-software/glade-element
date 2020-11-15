import {GladeAnnotatable} from '../glade-annotatable';

const assert = chai.assert;

suite('glade-annotatable', () => {
  test('is defined', () => {
    const el = document.createElement('glade-annotatable');
    assert.instanceOf(el, GladeAnnotatable);
  });
});
