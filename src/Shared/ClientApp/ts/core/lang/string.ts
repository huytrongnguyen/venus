interface String {
  parseInt(): number,
  parseDate(): Date,
}

String.prototype.parseInt = function(this: string) { return parseInt(this, 10); }
String.prototype.parseDate = function(this: string) { return new Date(this); }