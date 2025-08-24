export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }

  // Getter and Setter for code
  get code() {
    return this._code;
  }
  set code(value) {
    this._code = value;
  }

  // Override default string representation
  toString() {
    return `[object ${this._code}]`;
  }
}
