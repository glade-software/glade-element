import firebase from "firebase/app";
import "firebase/functions";

type Timestamp = {
  _seconds: number;
  _nanoseconds: number;
};

type AnnotationData = {
  plainTextBody: string;
  htmlString?: string;
  postedBy: string;
  gladeDOMNodeHash: number;
  updatedAt?: Timestamp;
};

export default class Annotation {
  plainTextBody;
  gladeDOMNodeHash;
  postedBy;
  htmlString;
  isSaving;
  updatedAt;

  constructor(annotationData: AnnotationData) {
    this.plainTextBody = annotationData.plainTextBody;
    this.gladeDOMNodeHash = annotationData.gladeDOMNodeHash;
    this.postedBy = annotationData.postedBy;
    this.htmlString = annotationData.htmlString;
    this.updatedAt = annotationData.updatedAt;
    this.isSaving = false;
  }

  async getHtmlString() {
    const getHTMLFromMarkdown = firebase
      .functions()
      .httpsCallable("getHTMLFromMarkdown");

    try {
      const result = await getHTMLFromMarkdown({
        markdownStrings: [this.plainTextBody],
      });
      this.htmlString = result.data.htmlStrings[0];
      return this.htmlString;
    } catch (getHTMLFromMarkdownError) {
      console.error(getHTMLFromMarkdownError);
    }
  }

  async save(gladeDocumentHash: string) {
    this.isSaving = true;

    const annotation = {
      plainTextBody: this.plainTextBody,
      gladeDOMNodeHash: this.gladeDOMNodeHash,
      postedBy: this.postedBy,
      htmlString: this.htmlString,
      gladeDocumentHash: parseInt(gladeDocumentHash),
    };

    const publishAnnotation = firebase
      .functions()
      .httpsCallable("publishAnnotation");

    try {
      const response = await publishAnnotation(annotation);
      this.isSaving = false;
      console.log("annotation published!", response);
      return annotation;
    } catch (publishingError) {
      console.error(publishingError);
      this.isSaving = false;
    }
  }
}
