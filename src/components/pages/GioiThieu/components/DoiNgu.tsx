import { Row, Col } from "antd";
import React from "react";

function MemberProp(props: any) {
  return (
    <div className="member-prop">
      <img src={props.image} alt={props.name} />
      <p className="member-prop-name">{props.name}</p>
      <p className="member-prop-position">{props.position}</p>
    </div>
  );
}

function DoiNgu() {
  return (
    <Row
      style={{
        marginTop: "50px",
        borderBottom: "1px #eaeaea solid",
      }}
    >
      <Col span={8}>
        <p
          style={{
            fontSize: "25px",
            fontWeight: "bold",
            width: "100%",
            padding: "20px",
            opacity: "0.6",
          }}
        >
          ĐỘI NGŨ CHÚNG TÔI
        </p>
      </Col>
      <Col span={8}>
        <Row style={{ width: "100%", display: "flex" }}>
          <Col
            span={8}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <MemberProp
              image="src/assets/imgs/GioiThieu/DoiNgu/member1.jpg"
              name="DUC DUY"
              position="Giám đốc điều hành và người sáng lập"
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
            <MemberProp
              image="src/assets/imgs/GioiThieu/DoiNgu/member1.jpg"
              name="DUC DUY"
              position="Giám đốc điều hành và người sáng lập"
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
            <MemberProp
              image="src/assets/imgs/GioiThieu/DoiNgu/member1.jpg"
              name="DUC DUY"
              position="Giám đốc điều hành và người sáng lập"
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
            <MemberProp
              image="src/assets/imgs/GioiThieu/DoiNgu/member1.jpg"
              name="DUC DUY"
              position="Giám đốc điều hành và người sáng lập"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default DoiNgu;
