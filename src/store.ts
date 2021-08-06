import { reactive} from "vue";
import type { Icon } from "./types"

const value = <Array<Icon>>[]

export default reactive({
  icons: {
    brands: value,
    regular: value,
    solid: value,
    all: value,
  },
})
