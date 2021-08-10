import { reactive} from "vue";
import type { Icon } from "./types"


export default reactive({
  icons: {
    brands: <Array<Icon>>[],
    regular: <Array<Icon>>[],
    solid: <Array<Icon>>[],
    all: <Array<Icon>>[],
  },
})
