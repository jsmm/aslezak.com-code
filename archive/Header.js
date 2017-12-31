import React from "react";
import Link from "gatsby-link";

export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <style jsx>{`
          #components-layout-demo-top-side-2 .logo {
            width: 120px;
            height: 31px;
            background: #333;
            border-radius: 6px;
            margin: 16px 28px 16px 0;
            float: left;
          }
        `}</style>
        <Row>
          <Col span={24}>
            <Header className="header">
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["1"]}
                style={{ lineHeight: "64px" }}
              >
                <Link to="/">Home</Link>
                <Link to="/portfolio"> Portfolio</Link>
                <Link to="/design"> Design</Link>
                <Link to="/code"> Code</Link>
                <Link to="/cloud"> Cloud</Link>
                <Link to="/iot"> IoT</Link>
                <Link to="/personal"> Personal</Link>
                <Link to="/contact"> Contact</Link>
              </Menu>
            </Header>
          </Col>
        </Row>
      </Layout>
    );
  }
}