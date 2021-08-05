import store from "./store";

type IconStyle = 'brands' | 'regular' | 'solid';

interface Icon {
  changes: string[],
  label: string;
  search: {
    terms: string[]
  },
  styles: IconStyle[],
  voted: boolean
}

export const saveIcons = (Icons: Icon[]) => {
  Object.keys(Icons).forEach((_icon: any) => {
    const icon: Icon = Icons[_icon] as Icon;
    icon.styles.forEach((style: IconStyle) => {
      if (store.icons[style]) {
        store.icons[style].push(icon)
      } else {
        store.icons[style] = [icon]
      }
    })
  })
}
