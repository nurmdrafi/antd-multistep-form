import React, { useState } from "react";

// Import Components
import {
  Button,
  Col,
  Form,
  Input,
  message,
  Row,
  Select,
  Steps,
  Typography,
} from "antd";

// Import Constants
const { Title } = Typography;
const { Option } = Select;

const [registerInfo, setRegisterInfo] = useState({
  companyInfo: {
    company: "",
    companyUrl: "",
    city: "",
    email: "",
    mobile: "",
    productCategory: "",
    dbidNumber: "",
  },
  ownerInfo: {
    firstName: "",
    lastName: "",
    gender: "",
    phone: "",
    address: "",
  },
  paymentInfo: {
    paymentMethod: "",
    details: "",
  },
  user: {
    username: "",
    password: "",
  },
});

const CompanyInfo = (
  <>
    <Form layout="vertical" style={{ marginTop: 20 }}>
      <Row gutter={[16, 16]}>
        {/* Company Name */}
        <Col span={12}>
          <Form.Item name="company" label="Company">
            <Input placeholder="Input Company Name" />
          </Form.Item>
        </Col>

        {/* Company URL */}
        <Col span={12}>
          <Form.Item name="companyURL" label="Company URL">
            <Input placeholder="Input Company URL" />
          </Form.Item>
        </Col>

        {/* City */}
        <Col span={12}>
          <Form.Item name="city" label="City">
            <Input placeholder="Input City Name" />
          </Form.Item>
        </Col>

        {/* Email */}
        <Col span={12}>
          <Form.Item name="email" label="Email">
            <Input placeholder="Input Email Address" type="email" />
          </Form.Item>
        </Col>

        {/* Mobile */}
        <Col span={12}>
          <Form.Item name="mobile" label="Mobile">
            <Input placeholder="Input Mobile Number" type="number" />
          </Form.Item>
        </Col>

        {/* Product Category */}
        <Col span={12}>
          <Form.Item name="productCategory" label="Product Category">
            <Input placeholder="Input Product Category" />
          </Form.Item>
        </Col>

        {/* DBID Number */}
        <Col span={12}>
          <Form.Item name="dbidNumber" label="DBID Number">
            <Input placeholder="Input DBID Number" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  </>
);

const OwnerInfo = (
  <>
    <Form layout="vertical" style={{ marginTop: 20 }}>
      <Row gutter={[16, 16]}>
        {/* First Name */}
        <Col span={12}>
          <Form.Item name="firstName" label="First Name">
            <Input placeholder="Input First Name" />
          </Form.Item>
        </Col>

        {/* Last Name */}
        <Col span={12}>
          <Form.Item name="lastName" label="Last Name">
            <Input placeholder="Input Last Name" />
          </Form.Item>
        </Col>

        {/* Genter */}
        <Col span={12}>
          <Form.Item name="gender" label="Gender">
            <Select placeholder="Select an option">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
        </Col>

        {/* Phone */}
        <Col span={12}>
          <Form.Item name="phone" label="Phone">
            <Input placeholder="Input Phone Number" />
          </Form.Item>
        </Col>

        {/* Address */}
        <Col span={12}>
          <Form.Item name="address" label="Address">
            <Input placeholder="Input Address" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  </>
);

const PaymentInfo = (
  <>
    <Form layout="vertical" style={{ marginTop: 20 }}>
      <Row gutter={[16, 16]}>
        {/* Payment Method */}
        <Col span={24}>
          <Form.Item name="payment" label="Payment">
            <Select placeholder="Select an option">
              <Option value="bkash">Bkash</Option>
              <Option value="nagad">Nagad</Option>
              <Option value="card">Card</Option>
            </Select>
          </Form.Item>
        </Col>

        {/* Payment Details */}
        <Col span={24}>
          <Form.Item name="details" label="Details">
            <Input.TextArea />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  </>
);

const UserInfo = (
  <>
    <Form layout="vertical" style={{ marginTop: 20 }}>
      <Row gutter={[16, 16]} justify="center">
        {/* Username */}
        <Col span={24}>
          <Form.Item name="username" label="Username">
            <Input placeholder="Input Username" />
          </Form.Item>
        </Col>

        {/* Password */}
        <Col span={24}>
          <Form.Item name="password" label="Password">
            <Input.Password placeholder="Input Password" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  </>
);

const steps = [
  {
    title: "Company Info",
    content: CompanyInfo,
  },
  {
    title: "Owner Info",
    content: OwnerInfo,
  },
  {
    title: "Payment Info",
    content: PaymentInfo,
  },
  {
    title: "User Info",
    content: UserInfo,
  },
];
const MultiStepForm = () => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  return (
    <>
      <Title>Merchant Register</Title>
      <Steps current={current} items={items} />
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
};
export default MultiStepForm;
