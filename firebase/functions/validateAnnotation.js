const currentTypeOf = require('current-type-of');
/**
 * @exports validateAnnotation validates an annotation
 * @param {*} data The annotation to run validation checks on
 * @returns {Erric[]} An array of validation errors
 */
module.exports = function validateAnnotation(data) {
  let validationErrors = [];
  const {
    htmlString,
    postedBy,
    plainTextBody,
    gladeDOMNodeHash,
    gladeDocumentHash,
  } = data;

  /*
   * Validate annotation.htmlString
   */
  if (htmlString) {
    if (currentTypeOf(htmlString) !== 'string') {
      validationErrors.push({
        code: 'Annotation.htmlString.notString',
        message: 'Your annotation got corrupted, sorry!',
        metadata: {htmlString},
      });
    }
  } else {
    validationErrors.push({
      code: 'Annotation.htmlString.falsy',
      message: 'Your annotation had no content!',
      metadata: {htmlString},
    });
  }

  /*
   * Validate annotation.plainTextBody
   */
  if (plainTextBody) {
    if (currentTypeOf(plainTextBody) !== 'string') {
      validationErrors.push({
        code: 'Annotation.plainTextBody.notString',
        message: 'Your annotation got corrupted, sorry!',
        metadata: {plainTextBody},
      });
    }
  } else {
    validationErrors.push({
      code: 'Annotation.plainTextBody.falsy',
      message: 'Your annotation had no content!',
      metadata: {plainTextBody},
    });
  }

  /*
   * Validate annotation.postedBy
   */
  if (postedBy) {
    if(!postedBy.uid){
      validationErrors.push({
        code: 'Annotation.postedBy.uid.falsy',
        message: 'Could not post annotation! Are you logged in?',
        metadata: {postedBy},
      });
    }
    if(!postedBy.displayName){
      validationErrors.push({
        code: 'Annotation.postedBy.displayName.falsy',
        message: 'Could not post annotation! Are you logged in?',
        metadata: {postedBy},
      });
    }
    if (currentTypeOf(postedBy.displayName) !== 'string') {
      validationErrors.push({
        code: 'Annotation.postedBy.displayName.notString',
        message: 'Could not post annotation! Are you logged in?',
        metadata: {postedBy},
      });
    }
    if (currentTypeOf(postedBy.uid) !== 'string') {
      validationErrors.push({
        code: 'Annotation.postedBy.uid.notString',
        message: 'Could not post annotation! Are you logged in?',
        metadata: {postedBy},
      });
    }
  } else {
    validationErrors.push({
      code: 'Annotation.postedBy.falsy',
      message: 'Could not post annotation! Are you logged in?',
      metadata: {postedBy},
    });
  }

  /*
   * Validate annotation.gladeDOMNodeHash
   */
  if (gladeDOMNodeHash) {
    if (currentTypeOf(gladeDOMNodeHash) !== 'number') {
      validationErrors.push({
        code: 'Annotation.gladeDOMNodeHash.notNumber',
        message: 'Your annotation got corrupted, sorry!',
        metadata: {gladeDOMNodeHash},
      });
    }
  }

  /*
   * Validate annotation.gladeDocumentHash
   */
  if (gladeDocumentHash) {
    if (currentTypeOf(gladeDocumentHash) !== 'number') {
      validationErrors.push({
        code: 'Annotation.gladeDocumentHash.notNumber',
        message: 'Your annotation got corrupted, sorry!',
        metadata: {gladeDocumentHash},
      });
    }
  }

  return validationErrors;
};
