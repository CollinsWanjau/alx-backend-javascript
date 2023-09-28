export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  set name(value) {
    this._name = value;
  }

  toString() {
    return `[Object ${this.code}]`;
  }
}
