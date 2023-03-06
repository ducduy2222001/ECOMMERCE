import {
  HeartFilled,
  ShoppingCartOutlined,
  StarFilled,
} from "@ant-design/icons";

import styled from "styled-components";
import "./style.css";

const StartIcon = styled.div`
  .Start__Icon .anticon svg {
    color: yellow;
    display: flex;
  }
`;

function CardProp(props: any) {
  return (
    <div className="content__cardImg">
      <div className="heart_sub">
        <HeartFilled className="heart_chil" />
      </div>

      <img src={props.image} alt={props.title} />
      <div className="content__cartsubcontent">
        <p className="content__cartTitle">{props.title}</p>
        <p className="content__cartPrice">{props.price}</p>
        <StartIcon>
          <p className="Start__Icon"> {props.evaluate}</p>
          <p className="Start__Icon"> {props.evaluate}</p>
          <p className="Start__Icon"> {props.evaluate}</p>
          <p className="Start__Icon"> {props.evaluate}</p>
          <p className="Start__Icon"> {props.evaluate}</p>
        </StartIcon>
      </div>
      <div className="cart_sub">
        <ShoppingCartOutlined className="cart_chil " />
        <p>Thêm vào giỏ</p>
      </div>
    </div>
  );
}

function CardProduct() {
  return (
    <div className="card">
      <CardProp
        image="src/assets/imgs/banners/product-05(1).png"
        title="Túi xách Chanel"
        price="200.000 vnđ"
        evaluate={<StarFilled />}
      />
    </div>
  );
}

export default CardProduct;
