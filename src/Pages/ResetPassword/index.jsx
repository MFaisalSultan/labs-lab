import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { CiMail } from "react-icons/ci";
import AppButton from "../../Components/Buttons/AppButton";
import AppInput from "../../Components/InputFields/AppInput";
import styles from "./resetPassord.module.scss";

export default function ResetPassword() {
  return (
    <div className={styles.loginContainer}>
      <Container className="min-vh-100 d-flex flex-column justify-content-center">
        <Row className="justify-content-center text-center">
          <Col xs={12} md={8} lg={6} xl={4}>
            <div className={styles.content}>
              <div>
                <h1 className={styles.title}>label lab</h1>
                <h4 className={styles.label}>Reset your password</h4>
                <p className={styles.desc}>
                  Enter the email address associated with your account and we
                  will send you a link to reset your password.
                </p>
              </div>
              <Form noValidate className={styles.form}>
                <AppInput placeholder="Email">
                  <CiMail />
                </AppInput>
                <AppButton title="Continue" className="primary mt-4" />
              </Form>
              <AppButton href='/' title="Back to Sign In" className="link mx-auto" />
              <p className={styles.link}>
                Don’t have an account? <a href="/signup">Sign Up</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
