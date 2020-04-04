const SPH = require('./sph.js').default;

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

    const sph = new SPH();
    console.log('sph', sph);
  }
}
