import { QueryResultInterface, Value2, sortResultInterface } from './queryResultInterface';

export const sortResult = (
  QueryResultInterface: QueryResultInterface
): sortResultInterface => {
  console.log(QueryResultInterface);
  let result: sortResultInterface = {
    author: { name: "Danny Elí", lastname: "Valencia Osorio" },
    categories: [],
    items: [],
  };

  const [categories] = QueryResultInterface.available_filters;

  result.categories = categories.values.map((element: Value2) => {
    return element.name;
  });

  result.items = QueryResultInterface.results.map((element: any) => {
    return {
      id: element?.id,
      title: element.title,
      price: {
        currency: element.currency_id,
        amount: element.price,
      },
      picture: element.thumbnail,
      condition: element.condition,
      free_shipping: element.shipping.free_shipping,
    };
  });

  return result;
};