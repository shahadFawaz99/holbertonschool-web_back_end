// This function creates an Int8 typed array inside an ArrayBuffer
// Parameters:
//   - length: size of the ArrayBuffer
//   - position: index where the value should be set
//   - value: the Int8 value to store
// Returns: a DataView with the value set
// Throws an error if position is outside the range
export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);
  return view;
}
