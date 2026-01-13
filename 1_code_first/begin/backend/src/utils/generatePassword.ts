import { randomInt } from "crypto";

const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";
const SPECIAL = "!@#$%^&*()-_=+[]{}|;:,.<>?";

const REQUIRED_SETS = [LOWERCASE, UPPERCASE, NUMBERS, SPECIAL];

const pickRandomChar = (chars: string): string =>
  chars[randomInt(0, chars.length)];

const shuffleInPlace = (chars: string[]): void => {
  for (let i = chars.length - 1; i > 0; i -= 1) {
    const j = randomInt(0, i + 1);
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
};

const generatePassword = (length = 20): string => {
  if (length < REQUIRED_SETS.length) {
    throw new Error("Password length too short for required character sets");
  }

  const allChars = REQUIRED_SETS.join("");
  const passwordChars = REQUIRED_SETS.map((set) => pickRandomChar(set));

  while (passwordChars.length < length) {
    passwordChars.push(pickRandomChar(allChars));
  }

  shuffleInPlace(passwordChars);
  return passwordChars.join("");
};

export default generatePassword;
