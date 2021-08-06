import store from "./store";
import type { IconStyle, Icon } from "./types"

export const saveIcons = (Icons: Icon[]) => {
  Object.keys(Icons).forEach((_icon: any) => {
    let icon: Icon = Icons[_icon] as Icon;
    const updatedIcon: Icon = Object.assign(icon, { key: _icon});
    
    if (! store.icons.all ) {
      store.icons.all = []
    }
  
    store.icons.all.push(updatedIcon)
    
    if (icon.styles) {
      icon.styles.forEach((style: IconStyle) => {
        const _new_icon: Icon = Object.assign(icon, { key: _icon})
        if (store.icons[style]) {
          store.icons[style].push(_new_icon)
        } else {
          store.icons[style] = [_new_icon]
        }
      })
    }
  })
}
