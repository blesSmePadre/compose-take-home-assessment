export const commands = {
  trim: {
    title: 'Trim',
    func: (input: string) => input.trim(),
  },
  removeExtraSpaces: {
    title: 'Remove extra spaces',
    func: (input: string) => input.replace(/\s+/g, ' ').trim(),
  },
};
