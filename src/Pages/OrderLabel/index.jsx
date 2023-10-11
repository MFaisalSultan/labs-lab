import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { BiSolidRocket } from "react-icons/bi";
import AppButton from "../../Components/Buttons/AppButton";
import AppSelect from "../../Components/InputFields/AppSelect";
import InputField from "../../Components/InputFields/InputField";
import styles from "./orderLabel.module.scss";

export default function OrderLabel() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const options = ["1", "2", "3"];
  const typeOptions = ["USPS Priority", "1", "2"];
  return (
    <div className={styles.orderLabel}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className={styles.formLayout}>
          <Row className="w-100">
            <Col xs={6}>
              <AppSelect label="TYPE" options={typeOptions} />
            </Col>
            <Col xs={6}>
              <InputField
                required
                type="text"
                label="PACKAGE WEIGHT (70 LBS MAX)"
                placeholder="0 LBS"
                // defaultValue="0 LBS"
              />
            </Col>
          </Row>
        </div>
        <Row className="mb-3 mt-4">
          <Col>
            <div className={styles.formLayout}>
              <h1 className={styles.formLabel}>FROM ADDRESS</h1>
              <AppSelect label="Saved Address" options={options} />
              <InputField
                required
                type="text"
                label="Country *"
                placeholder="United States"
                defaultValue="United States"
                disabled
              />
              <InputField
                required
                type="text"
                label="Name *"
                placeholder="Name"
                // defaultValue="Name"
              />
              <InputField
                required
                type="text"
                label="Company / Reference Number (optional) "
                placeholder="Company"
                // defaultValue="Name"
              />
              <InputField
                required
                type="text"
                label="Street *"
                placeholder="Street"
                // defaultValue="Name"
              />
              <InputField
                required
                type="text"
                label="Street 2 (optional)"
                placeholder="Street 2"
                // defaultValue="Name"
              />
              <InputField
                required
                type="text"
                label="City *"
                placeholder="City"
                // defaultValue="Name"
              />
              <InputField
                required
                type="text"
                label="State *"
                placeholder="State"
                // defaultValue="Name"
              />
              <InputField
                required
                type="text"
                label="Zip Code *"
                placeholder="Zip Code *"
                // defaultValue="Name"
              />
            </div>
          </Col>
          <Col>
            <div className={styles.formLayout}>
              <h1 className={styles.formLabel}>TO ADDRESS</h1>
              <AppSelect label="Saved Address" options={options} />
              <InputField
                required
                type="text"
                label="Country *"
                placeholder="United States"
                defaultValue="United States"
                disabled
              />
              <InputField
                required
                type="text"
                label="Name *"
                placeholder="Name"
                // defaultValue="Name"
              />
              <InputField
                required
                type="text"
                label="Company / Reference Number (optional) "
                placeholder="Company"
                // defaultValue="Name"
              />
              <InputField
                required
                type="text"
                label="Street *"
                placeholder="Street"
                // defaultValue="Name"
              />
              <InputField
                required
                type="text"
                label="Street 2 (optional)"
                placeholder="Street 2"
                // defaultValue="Name"
              />
              <InputField
                required
                type="text"
                label="City *"
                placeholder="City"
                // defaultValue="Name"
              />
              <InputField
                required
                type="text"
                label="State *"
                placeholder="State"
                // defaultValue="Name"
              />
              <InputField
                required
                type="text"
                label="Zip Code *"
                placeholder="Zip Code *"
                // defaultValue="Name"
              />
            </div>
          </Col>
        </Row>
        <div className={styles.footer}>
          <div className={styles.text}>
            <h1>$4.00</h1>
            <span>* Required Fields</span>
          </div>
          <AppButton title="Order Label" className={styles.btn}>
            <BiSolidRocket size={24} className="me-1" />
          </AppButton>
        </div>
      </Form>
    </div>
  );
}
