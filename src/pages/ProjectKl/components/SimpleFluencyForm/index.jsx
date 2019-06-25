import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Table, Step, Grid, Input, Button, Form } from '@alifd/next';
import styles from './index.module.scss';
import IcePanel from '@icedesign/panel';

const { Row, Col } = Grid;
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { xxs: 5, s: 5, l: 7 },
  wrapperCol: { s: 14, l: 12 }
};

const { Group: ButtonGroup } = Button;

export default class SimpleFluencyForm extends Component {
  static displayName = 'SimpleFluencyForm';

  state = {
    step: 6
  }

  formChange = (values, field) => {
    console.log(values, field)
  }

  nextStep = (values, errors) => {
    console.log('error', errors, 'value', values);
    if (!errors) {
      this.setState({ step: this.state.step + 1 });
    } else {
      // 处理表单报错
    }
  };

  next = () => {
    const s = this.state.step + 1;
    this.setState({
      step: s > 7 ? 7 : s,
    });
  };

  prev = () => {
    const s = this.state.step - 1;
    this.setState({
      step: s < 0 ? 0 : s,
    });
  };

  renderStep = (step) => {
    if (step === 0) {
      return (
        <IceContainer className={styles.form}>
          <Form onChange={this.formChange} >
            <FormItem label="数据源：" {...formItemLayout} required requiredMessage="必填项" >
              <Input name="database" autoComplete="on" />
            </FormItem>
            <div className={styles.buttonGroup}>
              <FormItem {...formItemLayout} label=" ">
                <Form.Submit onClick={this.nextStep} validate type="primary">下一步</Form.Submit>
              </FormItem>
            </div>
          </Form>
        </IceContainer>
      );
    } else if (step === 1) {
      return (
        <IceContainer className={styles.form}>
          <Form onChange={this.formChange} >
            <FormItem label="数据清理：" {...formItemLayout} required requiredMessage="必填项" >
              <Input name="dataclean" autoComplete="on" />
            </FormItem>
            <div className={styles.buttonGroup}>
              <Button onClick={this.prev}
                type="primary"
                disabled={this.state.step === 0}>上一步</Button>
              <FormItem {...formItemLayout} label=" ">
                <Form.Submit onClick={this.nextStep} validate type="primary">下一步</Form.Submit>
              </FormItem>
            </div>
          </Form>
        </IceContainer>
      );
    } else if (step === 2) {
      return (
        <IceContainer className={styles.form}>
          <Form onChange={this.formChange} >
            <FormItem label="特征值：" {...formItemLayout} required requiredMessage="必填项" >
              <Input name="primary" autoComplete="on" />
            </FormItem>
            <div className={styles.buttonGroup}>
              <Button onClick={this.prev}
                type="primary"
                disabled={this.state.step === 0}>上一步</Button>
              <FormItem {...formItemLayout} label=" ">
                <Form.Submit onClick={this.nextStep} validate type="primary">下一步</Form.Submit>
              </FormItem>
            </div>
          </Form>
        </IceContainer>
      );
    } else if (step === 3) {
      return (
        <IceContainer className={styles.form}>
          <Form onChange={this.formChange} >
            <FormItem label="参数1：" {...formItemLayout} required requiredMessage="必填项" >
              <Input name="number1" autoComplete="on" />
            </FormItem>
            <div className={styles.buttonGroup}>
              <Button onClick={this.prev}
                type="primary"
                disabled={this.state.step === 0}>上一步</Button>
              <FormItem {...formItemLayout} label=" ">
                <Form.Submit onClick={this.nextStep} validate type="primary">下一步</Form.Submit>
              </FormItem>
            </div>
          </Form>
        </IceContainer>
      );
    } else if (step === 4) {
      return (
        <IceContainer className={styles.form}>
          <Form onChange={this.formChange} >
            <FormItem label="参数2：" {...formItemLayout} required requiredMessage="必填项" >
              <Input name="number2" autoComplete="on" />
            </FormItem>
            <div className={styles.buttonGroup}>
              <Button onClick={this.prev}
                type="primary"
                disabled={this.state.step === 0}>上一步</Button>
              <FormItem {...formItemLayout} label=" ">
                <Form.Submit onClick={this.nextStep} validate type="primary">下一步</Form.Submit>
              </FormItem>
            </div>
          </Form>
        </IceContainer>
      );
    } else if (step === 5) {
      return (
        <IceContainer className={styles.form}>
          <Form onChange={this.formChange} >
            <FormItem label="参数3：" {...formItemLayout} required requiredMessage="必填项" >
              <Input name="number3" autoComplete="on" />
            </FormItem>
            <div className={styles.buttonGroup}>
              <Button onClick={this.prev}
                type="primary"
                disabled={this.state.step === 0}>上一步</Button>
              <FormItem {...formItemLayout} label=" ">
                <Form.Submit onClick={this.nextStep} validate type="primary">下一步</Form.Submit>
              </FormItem>
            </div>
          </Form>
        </IceContainer>
      );
    } else if (step === 6) {
      return (
        <IceContainer title='分析结果' >
          <Table>
              <Table.Column title="Id" dataIndex="id"/>
              <Table.Column title="Time" dataIndex="time"/>
              <Table.Column title="Number" dataIndex="number" />
          </Table>
          <div className={styles.buttonGroup}>
            <Button onClick={this.prev}
                type="primary"
                disabled={this.state.step === 0}>返回</Button>
          </div>
        </IceContainer>
      );
    }
  };

  render() {
    return (
      <div className="simple-fluency-form">
        {/* <IcePanel style={{marginBottom: '10px'}}> */}
          {/* <IcePanel.Body> */}
          <IceContainer  title='项目流程图'>
          <br />
          <Step shape="circle" current={this.state.step}>
            <Step.Item key={0} title="输入数据" content='选择数据源'/>
            <Step.Item key={1} title="数据清理" content='清除无效数据'/>
            <Step.Item key={2} title="特征提取" content='选择特征值'/>
            <Step.Item key={3} title="算法1" content='调整参数' />
            <Step.Item key={4} title="算法2" content='调整参数' />
            <Step.Item key={5} title="算法3" content='调整参数' />
            <Step.Item key={6} title="完成" content='分析结果'/>
          </Step>
          </IceContainer>
          {/* </IcePanel.Body> */}
        {/* </IcePanel> */}
        {this.renderStep(this.state.step)}
      </div>
    );
  }
}


