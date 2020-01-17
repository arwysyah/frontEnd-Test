import React from "react"
import { Layout, Menu, Icon, Card, Row, Col} from "antd"
import { getData } from "./Redux/Action/getData"
import { connect } from "react-redux"
import "antd/dist/antd.css"
// import axios from 'axios'

const { Header, Sider, Content } = Layout

class Home extends React.Component {
  state = {
    collapsed: false,
    listData: [],
    search: "",
    isLoading: true
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  async componentDidMount() {
    await this.props.dispatch(getData())
    this.setState({
      listData: this.props.picSum.listPicsum,
      isLoading: false
    })
  }

  onchangeSearch = e => {
    this.setState({
      search: e.target.value
    })
    // console.log("sera", this.state.search)
  }

  render() {
    const { listData, search } = this.state
    const filterData = listData.filter(authors => {
      return authors.author.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })

    // if (this.state.isLoading===true) {
    //   setTimeout(() => {
    //     return (
    //       <div>
    //         <p>Loading ....</p>
    //       </div>
    //     )
    //   }, 6000)
    // }

    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
         
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Row>
              <Col span={8}>
                {" "}
                <Icon
                  className="trigger"
                  style={{fontSize:20}}
                  type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                  onClick={this.toggle}
                />
              </Col>
              <Col span={8}>
                {" "}
                <div>
                
                  <form>
                    <div
                      className="input-field"
                      style={{
                        marginLeft: -40,
                        width: "30%",
                        height: 30
                      }}
                    >
                      <input
                        id="search"
                        type="search"
                        onChange={this.onchangeSearch}
                        style={{
                          color: "black",
                          marginLeft: '100%',
                          height: 40,
                          backgroundColor: "white"
                        }}
                      />
                     
                    </div>
                  </form>
                 
                </div>
             
              </Col>
              <Col span={8}>   <Icon type="search" 
              style={{marginLeft:-100,fontSize:18}}/></Col>

              <Col span={8}></Col>
            </Row>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: "100vh"
            }}
          >
            <div>
              <Row>
                {filterData.length !== 0 ? (
                  <div>
                    {" "}
                    {filterData.map((data, index) => (
                      <Col span={6} key={index}>
                        <Card
                          key={index}
                          hoverable
                          style={{
                            width: "90%",
                            height: "60%",
                            marginTop: 20,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10
                          }}
                          cover={
                            <img
                              style={{
                                height: 200,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10
                              }}
                              alt={data.url}
                              src={data.download_url}
                            />
                          }
                        >
                          <p style={{textAlign:'center'}}>{data.author}</p>
                        </Card>
                      </Col>
                    ))}
                  </div>
                ) : (
                  <div>
                    <p>Data Not Found</p>
                  </div>
                )}
              </Row>
            </div>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    picSum: state.getData
  }
}
export default connect(mapStateToProps)(Home)
// export default Home