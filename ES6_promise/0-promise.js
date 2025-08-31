// This function returns a Promise
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // You can resolve immediately or after some async operation
    resolve('Success');
  });
}
