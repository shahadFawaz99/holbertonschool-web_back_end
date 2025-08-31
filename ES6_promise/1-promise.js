// This function returns a Promise based on the success parameter
// If success is true: resolves with { status: 200, body: 'Success' }
// If success is false: rejects with an Error
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
