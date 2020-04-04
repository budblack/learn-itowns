// const itowns = require('itowns');

export default class VSPH {
  private _dom: Element;

  private async _init() {
    const viewer = await this._initViewer();
  }
  private async _initViewer() {
    const v: any = {};
    return v;
  }

  constructor(dom: Element) {
    this._dom = dom;
    this._init();

    alert(1)
  }
}
