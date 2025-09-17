export default class Validator {
  validateUsername(username) {
    const allowedChars = /^[A-Za-z0-9_-]+$/;
    const validStart = /^[^0-9-_]/;
    const validEnd = /[^0-9-_]$/;
    const overThreeDigits = /^(?!.*\d{4})/;

    return (
      allowedChars.test(username) &&
      validStart.test(username) &&
      validEnd.test(username) &&
      overThreeDigits.test(username)
    );
  }
}
