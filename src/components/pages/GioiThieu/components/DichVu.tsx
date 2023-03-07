import React from "react";
import { Row, Col } from "antd";
import {
  CarOutlined,
  ShoppingCartOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import PublicIcon from "@mui/icons-material/Public";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EditIcon from "@mui/icons-material/Edit";
function ItemDVProp(props: any) {
  return (
    <div className="ItemDV">
      <p className="ItemDV__title">{props.title}</p>
      <p className="ItemDV__info">{props.info}</p>
    </div>
  );
}

function DichVu() {
  return (
    <Row
      style={{
        marginTop: "50px",
        marginBottom: "50px",
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
          DỊCH VỤ CỦA CHÚNG TÔI
        </p>
      </Col>
      <Col span={8}>
        <Row
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Col
            span={8}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "15px",
            }}
          >
            <CarOutlined className="iconDV" />
            <ItemDVProp
              title="GIAO HÀNG TRÊN TOÀN THẾ GIỚI"
              info="Lorem ipsum dolor sit amet isse potenti. Vesquam ante aliquet lacusemper elit."
            />
          </Col>
          <Col
            span={8}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "15px",
            }}
          >
            <SmileOutlined className="iconDV" />
            <ItemDVProp
              title="GIAO HÀNG TRÊN TOÀN THẾ GIỚI"
              info="Lorem ipsum dolor sit amet isse potenti. Vesquam ante aliquet lacusemper elit."
            />
          </Col>
          <Col
            span={8}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "15px",
            }}
          >
            <ShoppingCartOutlined className="iconDV" />
            <ItemDVProp
              title="GIAO HÀNG TRÊN TOÀN THẾ GIỚI"
              info="Lorem ipsum dolor sit amet isse potenti. Vesquam ante aliquet lacusemper elit."
            />
          </Col>
        </Row>
        <Row
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Col
            span={8}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "15px",
            }}
          >
            <PublicIcon style={{ width: "80px", height: "80px" }} />
            <ItemDVProp
              title="GIAO HÀNG TRÊN TOÀN THẾ GIỚI"
              info="Lorem ipsum dolor sit amet isse potenti. Vesquam ante aliquet lacusemper elit."
            />
          </Col>
          <Col
            span={8}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "15px",
            }}
          >
            <PhoneIphoneIcon style={{ width: "80px", height: "80px" }} />
            <ItemDVProp
              title="GIAO HÀNG TRÊN TOÀN THẾ GIỚI"
              info="Lorem ipsum dolor sit amet isse potenti. Vesquam ante aliquet lacusemper elit."
            />
          </Col>
          <Col
            span={8}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "15px",
            }}
          >
            <EditIcon style={{ width: "80px", height: "80px" }} />
            <ItemDVProp
              title="GIAO HÀNG TRÊN TOÀN THẾ GIỚI"
              info="Lorem ipsum dolor sit amet isse potenti. Vesquam ante aliquet lacusemper elit."
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default DichVu;
