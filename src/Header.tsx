import React, { useState, useEffect } from "react";
import "./css/Header.css";
import "./css/index.css";
// import { Logo } from "../LogoFull";
import { Avatar, Dropdown, Menu, Space, Button } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
// import { useAuth } from "reactfire";
import { Link } from "react-router-dom";

export function Header() {
  
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#191919",
        display: "flex",
        position: "sticky",
        top: 0,
        padding: "0 32px 0 32px",
        alignItems: "center",
        gridRow: "1",
        gridColumn: "1 / -1",
        borderBottom: "1px solid #2D2D2D",
        // zIndex: "+999",
      }}
    >
      {/* <Logo /> */}
      <Link to="/">
        <Space direction="horizontal" size="middle">
          <span
            
            style={{
             
            color: '#599B67',
             fontSize: "35px",
              marginRight: 20,
              marginLeft: 50,
            
            }}
          >
            Guia 
          </span>
        </Space>
      </Link>

      {/* <Link to="/">
        <Space direction="horizontal" size="middle" >
          <span
            style={{
              color: "white",
              fontSize: "20px",
            }}
          >
            Channels
          </span>
        </Space>
      </Link>
      {user ? (
        <div style={{ marginLeft: "auto" }}>
          <Space direction="horizontal" size="middle">
            <Dropdown
              trigger={["click"]}
              overlayStyle={{ paddingTop: 16, marginLeft: -100 }}
              overlay={
                <Menu>
                  <Menu.Item>
                    <Link to={"/accountinformation"}>Account information</Link>
                  </Menu.Item>

                  <Menu.Item>
                    <a>Account information</a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href="https://productific.com/@NewsCastr"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Submit a feature request
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href="https://productific.com/@NewsCastr"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Find creators
                    </a>
                  </Menu.Item>

                  <Menu.Item>
                    <a onClick={Logout}>Logout</a>
                  </Menu.Item>
                </Menu>
              }
            >
              <a>
                <Space>
                  <Photo />
                  <DownOutlined style={{ color: "#eee" }} />
                </Space>
              </a>
            </Dropdown>
          </Space>
        </div>
      ) : ( */}
        <Button
          type="primary"
          size="large"
          style={{
            marginBottom: 16,
            marginRight: 8,
            top: 8,
            borderRadius: 200,
            marginLeft: "auto",
            color: "white",
            border: "none",
            padding: "8px 28px",
            backgroundColor: "#599B67",
          }}
        >
          Login
        </Button>
      )
    </div>
  );
}

// function Photo() {
//   const { currentUser } = useAuth();

//   if (!currentUser || !currentUser.photoURL) {
//     return <UserOutlined />;
//     console.log(currentUser);
//   }
//   return <Avatar src={currentUser.photoURL}></Avatar>;
// }