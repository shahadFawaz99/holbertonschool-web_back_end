import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

// This function handles multiple promises and returns their settled status
export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  return Promise.allSettled(promises).then((results) =>
    results.map((result) => {
      if (result.status === 'fulfilled') {
        return { status: 'fulfilled', value: result.value };
      }
      return { status: 'rejected', value: result.reason };
    })
  );
}
