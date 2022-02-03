import Fuse from "fuse.js";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function searchWithFuse() {
  const searchList = (
    inputValue: string,
    itemList: Array<string>,
    itemLabel: string
  ) => {
    if (!inputValue || inputValue.length < 1) {
      return itemList;
    }

    // https://fusejs.io/api/options.html
    const options = {
      threshold: 0.6,
      keys: [itemLabel],
    };

    const fuse = new Fuse(itemList, options);

    return fuse.search(inputValue).map((el: any) => el.item);
  };

  return {
    searchList,
  };
}
