import Fuse from "fuse.js";

import { DropdownListItem } from "../../types";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function searchWithFuse() {
  const searchList = (
    inputValue: string,
    itemList: Array<DropdownListItem>
  ) => {
    if (!inputValue || inputValue.length < 1) {
      return itemList;
    }

    // https://fusejs.io/api/options.html
    const options = {
      threshold: 0.6,
      keys: ["name"],
    };

    const fuse = new Fuse(itemList, options);
    return fuse.search(inputValue).map((el: any) => el.item);
  };

  return {
    searchList,
  };
}
