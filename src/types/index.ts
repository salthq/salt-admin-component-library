export declare type Columns = {
  label: string;
  sort: string | null;
};

export interface DropdownListItem {
  id: string | number;
  name: "string";
}

export interface TableDataItem {
  [key: string]: any;
}

export declare type TableData = Array<TableDataItem>;

export interface TablePagination {
  current_page: number;
  data: TableData;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Array<Record<string, unknown>>;
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}
