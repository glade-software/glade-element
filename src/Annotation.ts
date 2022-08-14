import { functions } from "./firebase-instance";
import { httpsCallable } from "firebase/functions";

type Timestamp = {
  _seconds: number;
  _nanoseconds: number;
};

type PostedBy = {
  uid: string;
  displayName: string;
};

export type AnnotationData = {
  plainTextBody: string;
  htmlString?: string;
  postedBy: PostedBy;
  gladeDOMNodeHash: number;
  updatedAt?: Timestamp;
  hidden?: boolean;
  uid?: string;
};

interface GetHTMLFromMarkdownStringArrayResponse {
  data:{
  htmlStrings: string[];
  }
}

interface PublishAnnotationResponse {
  data:{
  uid: string;
  }
}

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
    const getHTMLFromMarkdownStringArray = httpsCallable(functions,"getHTMLFromMarkdownStringArray");

    try {
      const result = await getHTMLFromMarkdownStringArray({
        markdownStrings: [this.plainTextBody],
      }) as GetHTMLFromMarkdownStringArrayResponse;
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

    const publishAnnotation = httpsCallable(functions, "publishAnnotation");

    try {
      const response = await publishAnnotation(annotation) as PublishAnnotationResponse;
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
