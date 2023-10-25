function isNumeric(input: string) {
  return /^[0-9]+$/.test(input);
}

export function validateDocument(document: string) {
  const validLengths = [11, 14];

  return isNumeric(document) && validLengths.indexOf(document.length) !== -1;
}

export function validateEmail(email: string) {
  // Regular expression to match common email patterns
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailPattern.test(email);
}
