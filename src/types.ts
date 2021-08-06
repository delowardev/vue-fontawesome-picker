export type IconStyle = 'brands' | 'regular' | 'solid';

export interface Icon {
  changes: string[],
  label: string;
  search: {
    terms: string[]
  },
  styles: IconStyle[],
  voted: boolean;
  key?: string;
}
