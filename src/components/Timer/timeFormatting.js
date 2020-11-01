/**
 * @param {int} time - Current time remaining in seconds.
 * @returns {string} Current time remain displayed in MM:ss format.
 */
export const secondsToClockTime = (time) => {
  const minutes = padWithZeroes(Math.floor(time / 60));
  const seconds = padWithZeroes(time % 60).padStart(2, '0');
  return `${minutes}:${seconds}`;
};

/**
 *
 * @param {*} input
 * @returns {string} num padded with leading zeroes to target length of 2
 */
const padWithZeroes = (input) => {
  let padded = input;
  if (typeof num !== 'string') padded = input.toString();
  return padded.padStart(2, '0');
};
