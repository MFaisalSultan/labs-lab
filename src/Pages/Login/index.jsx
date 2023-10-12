import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { CiLock, CiMail } from "react-icons/ci";
import auth from "../../Assets/images/auth.png";
import AppInput from "../../Components/InputFields/AppInput";
import Checkbox from "../../Components/InputFields/Checkbox";
import styles from "./login.module.scss";
import AppButton from "../../Components/Buttons/AppButton";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

export default function Login() {
  // const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };
  return (
    <div className={styles.login}>
      <Container className={styles.container}>
        <Row className="justify-content-center justify-content-md-between">
          <Col xs={11} md={6} lg={6} xxl={4}>
            <div className={styles.content}>
              <div>
                <h1 className={styles.title}>label lab</h1>
                <h4 className={styles.label}>Log in to your account</h4>
                <p className={styles.desc}>
                  Welcome back! please enter your detail
                </p>
              </div>
              <Form noValidate className={styles.form}>
                <AppInput placeholder="Email">
                  <CiMail />
                </AppInput>
                <AppInput placeholder="Password">
                  <CiLock />
                </AppInput>
                <div className={styles.checkRow}>
                  <Checkbox label="Remember me" />
                  <a className={styles.forgotPass} href="forgot-pass">Forgot Password?</a>
                </div>
                <AppButton title="Sign In" className="primary mt-4" />
              </Form>
              <div className={styles.labelGrid}>
                <hr className={styles.line} />
                <span>Or sign in with</span>
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
              <p className={styles.link}>
                Don’t have an account? <a href="/signup">Sign Up</a>
              </p>
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
