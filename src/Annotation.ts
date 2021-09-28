import firebase from "firebase/app";
import "firebase/functions";

type Timestamp = {
  _seconds: number;
  _nanoseconds: number;
};

type PostedBy = {
  uid: string;
  displayName: string;
};

type AnnotationData = {
  plainTextBody: string;
  htmlString?: string;
  postedBy: PostedBy;
  gladeDOMNodeHash: number;
  updatedAt?: Timestamp;
  hidden?: boolean;
  uid?: string;
};

export default class Annotation {
  plainTextBody;
  gladeDOMNodeHash;
  postedBy;
  htmlString;
  isSaving;
  updatedAt;
  hidden;
  uid;

  constructor(annotationData: AnnotationData) {
    this.plainTextBody = annotationData.plainTextBody;
    this.gladeDOMNodeHash = annotationData.gladeDOMNodeHash;
    this.postedBy = annotationData.postedBy;
    this.htmlString = annotationData.htmlString;
    this.updatedAt = annotationData.updatedAt;
    this.hidden = annotationData.hidden;
    this.uid = annotationData.uid;
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

  async delete(gladeDocumentHash: string, gladeAPIKey: string) {
    this.hidden = true;
    this.save(gladeDocumentHash, gladeAPIKey);
  }

  async save(gladeDocumentHash: string, gladeAPIKey?: string) {
    this.isSaving = true;

    console.log("gladeAPIKey", gladeAPIKey);
    const annotation = {
      plainTextBody: this.plainTextBody,
      gladeDOMNodeHash: this.gladeDOMNodeHash,
      postedBy: this.postedBy,
      htmlString: this.htmlString,
      gladeDocumentHash: parseInt(gladeDocumentHash),
      gladeAPIKey,
      uid: null,
    };

    const publishAnnotation = firebase
      .functions()
      .httpsCallable("publishAnnotationV2");

    try {
      const response = await publishAnnotation(annotation);
      this.isSaving = false;
      console.log("annotation published!", response.data);
      annotation.uid = response.data.uid;
      return annotation;
    } catch (publishingError) {
      console.error(publishingError.code, publishingError.message);
      this.isSaving = false;
      return null;
    }
  }
}
