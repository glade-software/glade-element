/**
 * Generates a UUID for a given DOM Node's semantic value
 * Any 2+ pieces of content with the same semantic hash are identical to the user
 * @param {Node} node the node to hash
 */
function getSemanticHashForDOMNode(node: Node): string | null {
  // TODO: depending on the type of Node, establish other semantic definitions (audio, img, video, picture, iframe)
  // They should all be some variation on abs(src)

  // stringRepresentation of a given node is currently just it's textContent, that's faulty
  const stringRepresentation = node.textContent || "";
  return hashForString(stringRepresentation);
}

function hashForString(stringToHash: string): string {
  let hash = 0;

  // the UUID for nothing is 0
  if (!stringToHash.length) {
    return `${hash}`;
  }

  // forgive me for the copypasta
  for (var i = 0; i < stringToHash.length; i++) {
    var char = stringToHash.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }

  return `${hash}`;
}
export { getSemanticHashForDOMNode, hashForString };
