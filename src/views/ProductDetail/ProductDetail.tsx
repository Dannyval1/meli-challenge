import "./ProductDetail.scss";
import largeProduct from "./../../assets/alfombra.jpg";

import { sortCategories } from "../../helpers/sortCategories";
import { DetailResultInterface } from "../../services/handleServicesResponse/Interfaces/productDetailInterface";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { details, descriptions } from "../../services/api";
import { sortResultDetail } from "../../services/handleServicesResponse/Interfaces/sortResultDetail";

const DetailState: DetailResultInterface = {
  author: {
    name: "",
    lastname: "",
  },
  item: {
    id: "",
    title: "",
    price: {
      currency: "",
      amount: 0,
    },
    picture: "",
    condition: "",
    free_shipping: false,
    sold_quantity: 0,
    description: "",
  },
};

export const ProductDetail = () => {
  const [detailResultState, setDetailResultState] =
    useState<DetailResultInterface>(DetailState);
  let params = useParams() as any;

  useEffect(() => {
    service();
  }, []);

  const service = async () => {
    const [detail, description] = await Promise.all([
      details(params.id),
      descriptions(params.id),
    ]);
    setDetailResultState(sortResultDetail(detail, description));
  };

  return (
    <div className="details">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="breadcrumb">Excelente / Bueno / Aceptable</p>
          </div>
        </div>
        <div className="whiteBack general-padding-32 border-radius-5">
          <div className="row">
            <div className="col-md-8">
              <img
                src={detailResultState.item.picture}
                alt="itemProduct"
                className="largeImageProduct"
              />
              <div className="infoProduct">
                <h3>Descripción del producto</h3>
                <p>{detailResultState.item.description}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="detailsProductDescription">
                <p className="shortDescription">
                  {detailResultState.item.sold_quantity} vendidos
                </p>
                <p className="largeDescription">
                  {detailResultState.item.title}
                </p>
                <p className="largePrice">
                  {" "}
                  $ {detailResultState.item.price.amount}
                </p>
                <button className="btn btn-primary btn-meli">Comprar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
