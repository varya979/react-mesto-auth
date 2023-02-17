import React from "react";
import Header from "./Header";
import PageForm from "./PageForm";

export default function Login(props) {
  return (
    <>
      <Header link="/sign-up" linkName="Регистрация" />
      <PageForm title="Вход" submitButtonTitle="Войти" />
    </>
  );
}
