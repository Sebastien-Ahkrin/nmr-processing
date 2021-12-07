declare module 'ml-tree-set' {
  type Comparator = (a: Elements, b: Elements) => number;
  type Elements = any;
  export default class TreeSet {
    public length: number;
    public elements: Array<Elements>;

    public constructor(comparator: Comparator);

    public size: () => number;
    public last: () => Elements;
    public first: () => Elements;
    public isEmpty: () => boolean;
    public pollLast: () => void;
    public pollFirst: () => void;
    public add(element: Elements): () => void;
  }
}
