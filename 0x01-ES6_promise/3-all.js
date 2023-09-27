/* eslint-disable no-console */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const body = uploadPhoto();
  const profile = createUser();

  return Promise.all([body, profile]).then((res) => {
    console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
  })
    .catch(() => console.log('Signup system offline'));
}
