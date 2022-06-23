import { useImages } from './useImages'
import { useIcons } from './useIcons'
import { useDocs } from './useDocs'

const useAssets = () => {
  return {
    useImages,
    useIcons,
    useDocs
  }
}

export { useAssets }
