import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { CiLock, CiMail, CiUser } from "react-icons/ci";
import auth from "../../Assets/images/auth.png";
import AppInput from "../../Components/InputFields/AppInput";
import Checkbox from "../../Components/InputFields/Checkbox";
import styles from "../Login/login.module.scss";
import AppButton from "../../Components/Buttons/AppButton";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

export default function SignUp() {
  return (
    <div className={styles.login}>
      <Container className={styles.container}>
        <Row className="justify-content-center justify-content-md-between">
          <Col xs={11} md={6} lg={6} xxl={4}>
            <div className={styles.content}>
              <div>
                <h1 className={styles.title}>label lab</h1>
                <h4 className={styles.label}>Sign Up for an Account</h4>
              </div>
              <Form noValidate className={styles.form}>
                <AppInput placeholder="Username">
                  <CiUser />
                </AppInput>
                <AppInput placeholder="Email">
                  <CiMail />
                </AppInput>
                <AppInput
                  placeholder="Password"
                  formText="Your password must have at least 8 characters"
                >
                  <CiLock />
                </AppInput>
                <div className={styles.checkRow}>
                  <Checkbox
                  className="align-items-start"
                    label={
                      <p className={styles.checkLabel}>
                        By creating an account means you agree to the{" "}
                        <a className={styles.checkLink} href="/terms">
                          Terms & Conditions
                        </a>{" "}
                        and our{" "}
                        <a href="/policy" className={styles.checkLink}>
                          {" "}
                          Privacy Policy
                        </a>{" "}
                      </p>
                    }
                  />
                </div>
                <AppButton title="Sign Up" className="primary mt-4" />
              </Form>
              <div className={styles.labelGrid}>
                <hr className={styles.line} />
                <span>Or sign up with</span>
              </div>
              <Row>
                <Col>
                  <AppButton title="Google" className="outline">
                    <FcGoogle size={20} />
                  </AppButton>
                </Col>
                <Col>
                  <AppButton title="Facebook" className="outline">
                    <BsFacebook size={20} color="var(--primary)" />
                  </AppButton>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6} className="d-none d-md-block">
            <Image
              src={auth}
              alt="auth layout banner"
              className="h-100 w-100"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
