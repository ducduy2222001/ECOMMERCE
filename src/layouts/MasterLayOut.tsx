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
import React from "react";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import MailSharpIcon from "@mui/icons-material/MailSharp";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import Menus from "./components/Menu";
import { Link } from "react-router-dom";

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
              <p>Ki???m tra ????n h??ng</p>
            </li>
            <li className="CenterItems">
              <ShoppingCartOutlined />
              <p>Gi??? h??ng</p>
            </li>
            <li className="CenterItems">
              <LoginOutlined />
              <p>????ng nh???p</p>
            </li>
            <li className="CenterItems">
              <KeyOutlined />
              <p>????ng k??</p>
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

            <Link to="/">
              <li>TRANG CH??? </li>
            </Link>
            <Link to="/GioiThieu">
              <li>GI???I THI???U</li>
            </Link>
            <Link to="/SanPham">
              <li>S???N PH???M</li>
            </Link>
            <Link to="/TinTuc">
              <li>TIN T???C</li>
            </Link>
            <Link to="/LienHe">
              <li>LI??N H???</li>
            </Link>
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
          <p className="boldPcontact">GI???I THI???U</p>{" "}
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
                <p>V??? ch??ng t??i</p>
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
                <p>T???ng quan v??? c??ng ty</p>
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
                <p>Ch????ng tr??nh khuy???n m??i</p>
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
                <p>C???m nan mua s???m</p>
              </Button>
            </li>
          </ul>
        </Col>
        <Col span={4} style={{ width: "100%" }}>
          <p className="boldPcontact">LI??N H??? - H???P T??C</p>
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
                <p>D??nh cho doanh nghi???p</p>
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
                <p>Li??n h???</p>
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
                <p>Tuy???n d???ng</p>
              </Button>
            </li>
          </ul>
        </Col>
        <Col span={4} style={{ width: "100%" }}>
          <p className="boldPcontact">TH??NG TIN C??NG TY</p>
          <ul className="infortCompanyLi">
            <li style={{ marginLeft: "10px" }}>
              C??NG TY TNHH PH??T TRI???N C??NG NGH??? DUY
            </li>
            <li>
              <LocationOnSharpIcon
                style={{
                  fontSize: "15px",
                  marginRight: "5px",
                  marginLeft: "10px",
                }}
              />
              <p>K51/5 T??n ?????n</p>
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
