import {
  HeartFilled,
  ShoppingCartOutlined,
  StarFilled,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import { SetStateAction, useState } from "react";

import styled from "styled-components";
import "./style.css";
const StartIcon = styled.div`
  .Start__Icon .anticon svg {
    color: yellow;
    display: flex;
  }
`;

function CardProp(props: any) {
  const [number, setNumber] = useState(1);

  const handleClick = () => {
    if (number === 1) {
      setNumber(2);
    } else {
      setNumber(1);
    }
    console.log(number);
  };
  return (
    <div className="content__cardImg ">
      <div
        className={number === 1 ? " whiteIcon heart_sub " : "redIcon heart_sub"}
        onClick={handleClick}
      >
        <HeartFilled className="heart_chil absolute" />
      </div>

      <img
        src={props.image}
        alt={props.title}
        style={{ height: "340px", width: "400px" }}
      />
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

function CartProductXuHuong() {
  return (
    <div>
      <Row
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Col span={8} className="card cardItemAllProduct">
          <CardProp
            image="src/assets/imgs/banners/quanJean.jpg"
            title="Túi xách Chanel"
            price="200.000 vnđ"
            evaluate={<StarFilled />}
          />
        </Col>
        <Col span={8} className="card cardItemAllProduct">
          <CardProp
            image="src/assets/imgs/banners/quanJean.jpg"
            title="Túi xách Chanel"
            price="200.000 vnđ"
            evaluate={<StarFilled />}
          />
        </Col>
        <Col span={8} className="card cardItemAllProduct">
          <CardProp
            image="src/assets/imgs/banners/quanJean.jpg"
            title="Túi xách Chanel"
            price="200.000 vnđ"
            evaluate={<StarFilled />}
          />
        </Col>
        <Col span={8} className="card cardItemAllProduct">
          <CardProp
            image="src/assets/imgs/banners/quanJean.jpg"
            title="Túi xách Chanel"
            price="200.000 vnđ"
            evaluate={<StarFilled />}
          />
        </Col>
      </Row>{" "}
      <Row
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Col span={8} className="card cardItemAllProduct">
          <CardProp
            image="src/assets/imgs/banners/quanJean.jpg"
            title="Túi xách Chanel"
            price="200.000 vnđ"
            evaluate={<StarFilled />}
          />
        </Col>
        <Col span={8} className="card cardItemAllProduct">
          <CardProp
            image="src/assets/imgs/banners/quanJean.jpg"
            title="Túi xách Chanel"
            price="200.000 vnđ"
            evaluate={<StarFilled />}
          />
        </Col>
        <Col span={8} className="card cardItemAllProduct">
          <CardProp
            image="src/assets/imgs/banners/quanJean.jpg"
            title="Túi xách Chanel"
            price="200.000 vnđ"
            evaluate={<StarFilled />}
          />
        </Col>
        <Col span={8} className="card cardItemAllProduct">
          <CardProp
            image="src/assets/imgs/banners/quanJean.jpg"
            title="Túi xách Chanel"
            price="200.000 vnđ"
            evaluate={<StarFilled />}
          />
        </Col>
      </Row>
    </div>
  );
}

export default CartProductXuHuong;
