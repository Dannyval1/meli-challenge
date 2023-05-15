import { sortResultInterface } from '../services/handleServicesResponse/Interfaces/queryResultInterface';

export const sortCategories = (sortResult: sortResultInterface) => {
  let categoriesBreadcrumb = "";

  sortResult.categories.map((category: string, index: number) => {
    if (index < 5) {
      categoriesBreadcrumb += category + (index < 4 ? " > " : "");
    }
  });

  return categoriesBreadcrumb;
};