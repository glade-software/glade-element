import {GladeAnnotatable} from '../glade-annotatable.js';
import {fixture, expect, html, aTimeout} from '@open-wc/testing';

const assert = chai.assert;

suite('glade-annotatable', () => {
  test('is defined', () => {
    const el: GladeAnnotatable = document.createElement('glade-annotatable');
    assert.instanceOf(el, GladeAnnotatable);
  });

  test('gladedocumenthash attribute is "0" if there is no content', async () => {
    const el: GladeAnnotatable = await fixture(
      html` <glade-annotatable></glade-annotatable> `
    );
    expect(el).dom.to.equal(
      `<glade-annotatable gladedocumenthash="0"></glade-annotatable>`
    );
  });

  test('constant hashes are generated as expected', async () => {
    const knownGladeDomNodeHash = 138399344; // hashString('<p>some known content</p>')
    const knownGladeDocumentHash = -6866858; // hashString('<p data-glade-node-hash="138399344">some known content</p>')

    const el: GladeAnnotatable = await fixture(
      html`<glade-annotatable><p>some known content</p></glade-annotatable>`
    );

    expect(el).dom.to.equal(
      `
      <glade-annotatable gladedocumenthash="${knownGladeDocumentHash}">
        <p data-glade-node-hash="${knownGladeDomNodeHash}">some known content</p>
      </glade-annotatable>
      `
    );
  });

  test('element is not verbose by default', async () => {
    const el: GladeAnnotatable = await fixture(
      html`<glade-annotatable><p>some known content</p></glade-annotatable>`
    );
    expect(el.verbose).to.be.false;
  });

  test('element is verbose when "verbose" attribute is present', async () => {
    const el: GladeAnnotatable = await fixture(
      html`<glade-annotatable verbose
        ><p>some known content</p></glade-annotatable
      >`
    );
    expect(el.verbose).to.be.true;
  });

  test('annotations are present for the homepage content', async () => {
    // prettier adds linebreaks here that break our hashing if we let it
    // prettier-ignore
    const el: GladeAnnotatable = await fixture(html`
      <glade-annotatable>
        <p>This homepage content is annotatable using Glade's open annotation platform!</p>
      </glade-annotatable>
    `);
    await aTimeout(2000);
    expect(el.annotations.length).to.be.greaterThan(0);
  });

  test('hashString does what we expect', async () => {
    const el: GladeAnnotatable = await fixture(
      html`<glade-annotatable></glade-annotatable>`
    );
    expect(el.hashString('')).to.equal('0');
  });
});
