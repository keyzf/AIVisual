import React, { Component } from 'react';
import { Grid, Upload, Button } from '@alifd/next';
import IcePanel from '@icedesign/panel';
import CameraAPI from '../CameraAPI/index';

const { Row, Col } = Grid;

export default class ImgBlock extends Component {
  static displayName = 'ImgBlock';

  state = {
    url: this.props.url,
    alt: this.props.alt,
    result: this.props.result,
    // percent: 0,
  };

  ifMultiple() {
    if ( this.state.alt === 'shenfen'|| this.state.alt === 'tongxing' || this.state.alt === 'xingshi'){
      // console.log(this.state.url.split('.jpg')[0]+'b.jpg')
      return (
        <div>
          <img src={this.state.url} alt={this.state.alt} />
          <img src={this.state.url.split('.jpg')[0]+'b.jpg'} alt={this.state.alt+'_b'} />
        </div>
      );
    } else {
      return (
        <img src={this.state.url} alt={this.state.alt} />
      );
    }
  }

  render() {
    return (
      <div>
        {/* 调用摄像头 */}
        <div style={{ position: 'relative', margin: '30px 95px 0px' }}>
          <CameraAPI />
        </div>
        {/* 上传 */}
        <div style={{ margin: '-62px 0 5px' }}>
          <Upload
            action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
            multiple
            listType="text"
          >
            <Button type="primary" style={{ margin: '30px 0 0' }}> 上传图片 </Button> &nbsp;&nbsp;
          </Upload>
        </div>
        <Row wrap>
          <Col>
            <IcePanel style={{ marginTop: '30px', marginBottom: '10px', marginRight: '10px' }}>
              <IcePanel.Header>
                原始图片
              </IcePanel.Header>
              <IcePanel.Body>
                <div>
                    {this.ifMultiple()}
                </div>
                {/* <img src={this.state.url} alt={this.state.alt} /> */}
              </IcePanel.Body>
            </IcePanel>
          </Col>
          <Col>
            <IcePanel style={{ marginTop: '30px', marginBottom: '10px' }}>
              <IcePanel.Header>
                识别结果
              </IcePanel.Header>
              <IcePanel.Body>
                <div>
                  <table width="450">
                    {
                      // 拆分 result 返回的字符串
                      Array.from(this.state.result.split('；')).map((item, index) => {
                        // console.log(index, item.split('：').length);
                        if (item.split('：').length === 1) {
                          return (
                            <tbody key={index}>
                              <tr key={index}>
                                <td><p>{item.split('：')[0]}</p></td>
                              </tr>
                            </tbody>
                          );
                        } else {
                          return (
                            <tbody key={index}>
                              <tr key={index}>
                                <td width='200px'><p>{item.split('：')[0]}</p></td>
                                <td ><p>{item.split('：')[1]}</p></td>
                              </tr>
                            </tbody>
                          );
                        }
                        
                      })
                    }
                  </table>
                </div>
              </IcePanel.Body>
            </IcePanel>
          </Col>
        </Row>
      </div>
    );
  }
}
