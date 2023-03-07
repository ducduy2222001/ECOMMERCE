import React from "react";
import { Row, Col } from "antd";

function ItemVisonProp(props: any) {
  return (
    <div className="ItemVison">
      <img src={props.image} alt={props.title} />
      <p className="ItemVision__title">{props.title}</p>
      <p className="ItemVision__content">{props.content}</p>
    </div>
  );
}

function Vision() {
  return (
    <div
      style={{
        marginTop: "50px",
        borderBottom: "1px #eaeaea solid",
      }}
    >
      <Row
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Col
          span={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <ItemVisonProp
            image="src/assets/imgs/GioiThieu/Vision/anh1.jpg"
            title="TẦM NHÌN CỦA CHÚNG TÔI"
            content="Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae "
          />
        </Col>
        <Col
          span={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <ItemVisonProp
            image="src/assets/imgs/GioiThieu/Vision/anh2.jpg"
            title="CHÚNG TÔI THỰC SỰ LÀM GÌ?"
            content="Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae "
          />
        </Col>
        <Col
          span={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <ItemVisonProp
            image="src/assets/imgs/GioiThieu/Vision/anh3.jpg"
            title="LỊCH SỬ BẮT ĐẦU"
            content="Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae "
          />
        </Col>
      </Row>
    </div>
  );
}

export default Vision;
