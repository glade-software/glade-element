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

  test('constant content hashes are generated as expected', async () => {
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
    await aTimeout(1900);
    expect(el.annotations.length).to.be.greaterThan(0);
  });

  test('hashString returns "0" if it hashed an empty string', async () => {
    const el: GladeAnnotatable = await fixture(
      html`<glade-annotatable></glade-annotatable>`
    );
    expect(el.hashString('')).to.equal('0');
  });

  test('hashString("foo") returns "101574"', async () => {
    const el: GladeAnnotatable = await fixture(
      html`<glade-annotatable></glade-annotatable>`
    );
    expect(el.hashString('foo')).to.equal('101574');
  });

  test('gladeContentNodes should be length 0 when there is no content', async () => {
    const el: GladeAnnotatable = await fixture(
      html`<glade-annotatable></glade-annotatable>`
    );
    expect(el.gladeContentNodes).to.have.lengthOf(0);
  });

  test('gladeContentNodes should be length 2 when there is 2 content nodes', async () => {
    // prettier-ignore
    const el: GladeAnnotatable = await fixture(
      html`<glade-annotatable><p>1</p><p>2</p></glade-annotatable>`
    );
    expect(el.gladeContentNodes).to.have.lengthOf(2);
  });

  test('gladeContentNodes should be length 2 when there is 2 content nodes', async () => {
    // prettier-ignore
    const el: GladeAnnotatable = await fixture(
      html`<glade-annotatable><p>1</p><p>2</p></glade-annotatable>`
    );
    expect(el.gladeContentNodes).to.have.lengthOf(2);
  });
});