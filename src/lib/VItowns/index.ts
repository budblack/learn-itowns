const itowns = require('itowns');

export default class VItowns {
  private _dom: Element;

  private async _init() {
    const viewer = await this._initViewer();
  }
  private async _initViewer() {
    const { _dom: dom } = this;
    console.log('dom', dom);
    const v = new itowns.GlobeView(dom, {
      coord: new itowns.Coordinates('EPSG:4326', 4.631512, 43.675626),
      range: 100,
      title: 45,
      heading: -60
    });
    return v;
  }

  constructor(dom: Element) {
    this._dom = dom;
    this._init();
  }
}
