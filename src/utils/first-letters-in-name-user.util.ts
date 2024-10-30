export const firstLettersInNameUser = (
  firstName: string,
  lastName: string
): string => {
  const firstLetterInName = firstName.charAt(0).toUpperCase();
  const firstLetterInLastName = lastName.charAt(0).toUpperCase();

  return `${firstLetterInName}${firstLetterInLastName}`;
};
