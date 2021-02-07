import firebase from "firebase/app";
import "firebase/functions";

type Timestamp = {
  _seconds: number;
  _nanoseconds: number;
};

type AnnotationData = {
  plainTextBody: string;
  htmlString: string;
  postedBy: string;
  gladeDOMNodeHash: number;
  updatedAt: Timestamp;
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

  async save() {
    this.isSaving = true;

    const annotation = {
      plainTextBody: this.plainTextBody,
      gladeDOMNodeHash: this.gladeDOMNodeHash,
      postedBy: this.postedBy,
      htmlString: this.htmlString,
    };

    const publishAnnotation = firebase
      .functions()
      .httpsCallable("publishAnnotation");

    try {
      const response = await publishAnnotation(annotation);
      this.isSaving = false;
      console.log("annotation published!", response);
    } catch (publishingError) {
      console.error(publishingError);
      this.isSaving = false;
    }
  }
}
