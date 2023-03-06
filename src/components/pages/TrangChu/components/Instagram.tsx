import { Row, Col } from "antd";
import React from "react";

function Instagram() {
  return (
    <div
      style={{
        borderTop: "1px #aaa solid",
        borderBottom: "1px #aaa solid",
        width: "100%",
      }}
    >
      <Row>
        <Col span={12}>
          <p
            style={{
              display: "flex ",
              justifyContent: "center",
              fontSize: "25px",
              fontWeight: "bold",
              marginTop: "50px",
              height: "64px",
            }}
          >
            #INSTAGRAM
          </p>

          <p
            style={{
              display: "flex ",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "17px",
              opacity: "0.7",
              marginTop: "-18px",
              height: "64px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>

          <p
            style={{
              display: "flex ",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "17px",
              opacity: "0.7",
              marginTop: "-18px",
              height: "64px",
            }}
          >
            Instagram has returned invalid data.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Instagram;
