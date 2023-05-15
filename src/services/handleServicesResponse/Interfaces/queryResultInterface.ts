interface AuthorInterface {
    name: string;
    lastname: string;
  }

  interface ItemInterface {
    id: string;
    title: string;
    price: {
      currency: string;
      amount: number;
    };
    picture: string;
    condition: string;
    free_shipping: boolean;
  }

  export interface sortResultInterface {
    author: AuthorInterface;
    categories: string[];
    items: ItemInterface[];
  }

  export interface Value2 {
    id: string;
    name: string;
    results: number;
  }

  interface Shipping {
    free_shipping: boolean;
    mode: string;
    tags: string[];
    logistic_type: string;
    store_pick_up: boolean;
  }

  interface Presentation {
    display_currency: string;
  }

  interface Prices {
    presentation: Presentation;
  }

  interface Result {
    id: string;
    title: string;
    price: number;
    prices: Prices;
    currency_id: string;
    condition: string;
    permalink: string;
    thumbnail: string;
    shipping: Shipping;
  }

  interface AvailableFilter {
    id: string;
    name: string;
    type: string;
    values: Value2[];
  }

  export interface QueryResultInterface {
    results: Result[];
    available_filters: AvailableFilter[];
  }