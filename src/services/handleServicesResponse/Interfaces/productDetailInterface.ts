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
    sold_quantity: number;
    description: string;
  }

  export interface DetailResultInterface {
    author: AuthorInterface;
    item: ItemInterface;
  }

  export interface PictureInterface {
    id: string;
    url: string;
    secure_url: string;
    size: string;
    max_size: string;
    quality: string;
  }

  export interface ShippingInterface {
    free_shipping: boolean;
  }

  export interface DetailInterface {
    id: string;
    title: string;
    price: number;
    currency_id: string;
    sold_quantity: number;
    condition: string;
    pictures: PictureInterface[];
    descriptions: any[];
    shipping: ShippingInterface;
  }

  export interface DescriptionInterface {
    text: string;
    plain_text: string;
  }

  export const productoDetails = (
    detail: DetailInterface,
    description: DescriptionInterface
  ): DetailResultInterface => {
    return {
      author: {
        name: "Danny Elí",
        lastname: "Valencia Osorio",
      },
      item: {
        id: detail.id,
        title: detail.title,
        price: {
          currency: detail.currency_id,
          amount: detail.price,
        },
        picture: detail.pictures[0].url,
        condition: detail.condition,
        free_shipping: detail.shipping.free_shipping,
        sold_quantity: detail.sold_quantity,
        description: description.plain_text,
      },
    };
  };