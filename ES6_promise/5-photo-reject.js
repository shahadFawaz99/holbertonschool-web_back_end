// This function returns a rejected Promise with an Error containing the fileName
export default function uploadPhoto(fileName) {
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}
