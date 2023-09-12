import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/network-data";
import PropTypes from "prop-types";

function RegisterPage({ locale }) {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }

  return (
    <section className="input-register">
      <h2>{locale === "id" ? "Isi form untuk mendaftar akun." : "Fill the form to register account."}</h2>
      <RegisterInput register={onRegisterHandler} />
      <p>
        {locale === "id" ? "Sudah punya akun?" : "Already have an account?"} <Link to="/">{locale === "id" ? "Login di sini" : "Login here"}</Link>
      </p>
    </section>
  );
}

RegisterPage.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default RegisterPage;
