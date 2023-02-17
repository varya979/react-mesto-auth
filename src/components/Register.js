import React from "react";
import Header from "./Header";
import PageForm from "./PageForm";
import { Link } from "react-router-dom";

export default function Register(props) {
  return (
    <>
      <Header link="/sign-in" linkName="Войти" />
      <PageForm
        title="Регистрация"
        submitButtonTitle="Зарегистрироваться"
        children={
          !props.isLogin && (
            <p className="page-form__subtitle">
              Уже зарегистрированы?{" "}
              <Link to="/sign-in" className="page-form__link opacity">
                Войти
              </Link>
            </p>
          )
        }
      />
    </>
  );
}
