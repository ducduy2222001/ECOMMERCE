import {
  CheckSquareOutlined,
  GoogleOutlined,
  KeyOutlined,
  LoginOutlined,
  PhoneOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import { Layout } from "antd";
import React, { Children } from "react";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import MailSharpIcon from "@mui/icons-material/MailSharp";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import Menus from "./components/Menu";
// import Menus from "./components/Menu";

const { Header, Content, Footer } = Layout;

interface IMasterLayoutProps {
  children: React.ReactNode;
}

const MasterLayout = ({ children }: IMasterLayoutProps) => (
  <Layout>
    {/* HEADER */}
    <div className="Navigation">
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          lineHeight: "40px",
        }}
      >
        <Col
          span={8}
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            lineHeight: "60px",
            paddingLeft: "50px",
          }}
        >
          <PhoneOutlined />
          <p style={{ paddingLeft: "10px" }}>Hotline: 1800999000</p>
        </Col>
        <Col
          span={8}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <input
            type="text"
            style={{
              lineHeight: "30px",
              width: "200px",
              borderTopLeftRadius: "4px",
              borderBottomLeftRadius: "4px",
              color: "black",
              paddingLeft: "10px",
            }}
          />
          <Button
            icon={<SearchOutlined />}
            style={{
              backgroundColor: "#429a9d",
              height: "30px",
              width: "40px",
              borderTopRightRadius: "4px",
              borderBottomRightRadius: "4px",
              color: "#fffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "17px",
            }}
            className="SearchIcon"
          ></Button>
        </Col>
        <Col
          span={8}
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <ul className="Nav-items" style={{ display: "flex" }}>
            <li className="CenterItems">
              <CheckSquareOutlined />
              <p>Kiểm tra đơn hàng</p>
            </li>
            <li className="CenterItems">
              <ShoppingCartOutlined />
              <p>Giỏ hàng</p>
            </li>
            <li className="CenterItems">
              <LoginOutlined />
              <p>Đăng nhập</p>
            </li>
            <li className="CenterItems">
              <KeyOutlined />
              <p>Đăng ký</p>
            </li>
          </ul>
        </Col>
      </Row>
    </div>

    <Header className="header bg-[#429a9d]">
      <Row>
        <Col
          span={24}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <ul>
            <li
              style={{
                backgroundColor: "#4a4a4a",
                height: "64px",
                padding: 0,
              }}
              className="DropdownLi"
            >
              <Menus />
            </li>
            <li>
              <a href="">TRANG CHỦ</a>
            </li>
            <li>
              <a href="">GIỚI THIỆU</a>
            </li>
            <li>
              <a href="">SẢN PHẨM</a>
            </li>
            <li>
              <a href="">TIN TỨC</a>
            </li>
            <li>
              <a href="">LIÊN HỆ</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Header>

    {/* CONTENT */}
    <Content style={{ padding: "0px 50px" }}>{children}</Content>
    {/* FOOTER */}
    <Footer
      style={{
        textAlign: "left",
        backgroundColor: "black",
        height: "257px",
        zIndex: "1",
      }}
    >
      <Row className="footerSub justify-center ">
        <Col span={4} style={{ width: "100%" }}>
          <p className="boldPcontact">GIỚI THIỆU</p>{" "}
          <ul>
            <li>
              <Button
                icon={
                  <KeyboardDoubleArrowRightRoundedIcon
                    style={{ fontSize: "13px" }}
                  />
                }
                className="footerButton"
              >
                <p>Về chúng tôi</p>
              </Button>
            </li>
            <li>
              <Button
                icon={
                  <KeyboardDoubleArrowRightRoundedIcon
                    style={{ fontSize: "13px" }}
                  />
                }
                className="footerButton"
              >
                <p>Tổng quan về công ty</p>
              </Button>
            </li>
            <li>
              <Button
                icon={
                  <KeyboardDoubleArrowRightRoundedIcon
                    style={{ fontSize: "13px" }}
                  />
                }
                className="footerButton"
              >
                <p>Chương trình khuyến mãi</p>
              </Button>
            </li>
            <li>
              <Button
                icon={
                  <KeyboardDoubleArrowRightRoundedIcon
                    style={{ fontSize: "13px" }}
                  />
                }
                className="footerButton"
              >
                <p>Cẩm nan mua sắm</p>
              </Button>
            </li>
          </ul>
        </Col>
        <Col span={4} style={{ width: "100%" }}>
          <p className="boldPcontact">LIÊN HỆ - HỢP TÁC</p>
          <ul>
            <li>
              <Button
                icon={
                  <KeyboardDoubleArrowRightRoundedIcon
                    style={{ fontSize: "13px" }}
                  />
                }
                className="footerButton"
              >
                <p>Dành cho doanh nghiệp</p>
              </Button>
            </li>
            <li>
              <Button
                icon={
                  <KeyboardDoubleArrowRightRoundedIcon
                    style={{ fontSize: "13px" }}
                  />
                }
                className="footerButton"
              >
                <p>Liên hệ</p>
              </Button>
            </li>
            <li>
              <Button
                icon={
                  <KeyboardDoubleArrowRightRoundedIcon
                    style={{ fontSize: "13px" }}
                  />
                }
                className="footerButton"
              >
                <p>Tuyển dụng</p>
              </Button>
            </li>
          </ul>
        </Col>
        <Col span={4} style={{ width: "100%" }}>
          <p className="boldPcontact">THÔNG TIN CÔNG TY</p>
          <ul className="infortCompanyLi">
            <li style={{ marginLeft: "10px" }}>
              CÔNG TY TNHH PHÁT TRIỂN CÔNG NGHỆ DUY
            </li>
            <li>
              <LocationOnSharpIcon
                style={{
                  fontSize: "15px",
                  marginRight: "5px",
                  marginLeft: "10px",
                }}
              />
              <p>K51/5 Tôn Đản</p>
            </li>
            <li>
              <a href="">
                <MailSharpIcon
                  style={{
                    fontSize: "15px",
                    marginRight: "5px",
                    marginLeft: "10px",
                  }}
                />
                <p style={{}}>ducduy2222001@gmail.com</p>
              </a>
            </li>
            <li>
              <PhoneOutlined
                style={{
                  fontSize: "15px",
                  marginRight: "5px",
                  marginLeft: "10px",
                }}
              />
              <p>Phone: 0935656738</p>
            </li>
          </ul>
        </Col>
        <Col span={4} style={{ width: "100%" }}>
          <p className="boldPcontact">SOCIALS</p>
          <ul className="footerSocial">
            <li>
              <Button
                icon={
                  <FacebookSharpIcon
                    style={{ fontSize: "30px", color: "#ffff" }}
                  />
                }
                style={{
                  backgroundColor: "#429a9d",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              ></Button>
            </li>
            <li>
              <Button
                icon={
                  <YoutubeOutlined
                    style={{ fontSize: "30px", color: "#ffff" }}
                  />
                }
                style={{ backgroundColor: "#429a9d" }}
              ></Button>
            </li>
            <li>
              <Button
                icon={
                  <TwitterOutlined
                    style={{ fontSize: "30px", color: "#ffff" }}
                  />
                }
                style={{ backgroundColor: "#429a9d" }}
              ></Button>
            </li>
            <li>
              <Button
                icon={
                  <GoogleOutlined
                    style={{ fontSize: "30px", color: "#ffff" }}
                  />
                }
                style={{ backgroundColor: "#429a9d" }}
              ></Button>
            </li>
          </ul>
        </Col>
      </Row>
    </Footer>
  </Layout>
);

export default MasterLayout;
