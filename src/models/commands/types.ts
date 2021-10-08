export const sliceName = 'commands';

export interface Command {
  id: number;
  title: string;
  exp: string;
  custom: boolean;
}
