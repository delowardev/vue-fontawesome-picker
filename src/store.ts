import { reactive} from "vue";

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

export default reactive({
  icons: {
    brands: [] as Icon[],
    regular: [] as Icon[],
    solid: [] as Icon[]
  }
})
