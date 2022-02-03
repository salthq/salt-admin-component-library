import Fuse from "fuse.js";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function searchWithFuse() {
  const searchList = (
    inputValue: string,
    itemList: Array<string>,
    label: string,
    multiLabel = false
  ) => {
    if (!inputValue || inputValue.length < 1) {
      return itemList;
    }

    if (multiLabel) {
      let keys = [];
      if (!label) {
        keys = ["label"];
      } else if (Array.isArray(label)) {
        keys = label;
      } else {
        keys = [label];
      }

      // https://fusejs.io/api/options.html
      const options = {
        threshold: 0.6,
        keys: keys,
      };

      const fuse = new Fuse(itemList, options);
      return fuse.search(inputValue).map((el: any) => el.item);
    }

    // https://fusejs.io/api/options.html
    const options = {
      threshold: 0.6,
      keys: [label],
    };

    const fuse = new Fuse(itemList, options);
    return fuse.search(inputValue).map((el: any) => el.item);
  };

  return {
    searchList,
  };
}
