export default class IfVerboseLogger {
  verbose;
  constructor(verboseAttr: string | undefined) {
    // attr is present on glade-annotatable
    if (typeof verboseAttr === "string") {
      this.verbose = true;
    }
  }
  debug(...messages: String[]): void {
    if (this.verbose) {
      console.debug(...messages);
    }
  }
  log(...messages: String[]): void {
    if (this.verbose) {
      console.log(...messages);
    }
  }
  error(...messages: String[]): void {
    if (this.verbose) {
      console.error(...messages);
    }
  }
  dir(...messages: any): void {
    if (this.verbose) {
      messages.forEach(console.dir);
    }
  }
}
