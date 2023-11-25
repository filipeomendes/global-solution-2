"use client";
import { useState } from "react";


export default CadastroClinicaPage () ;


const CadastroClinicaPage = () => {
  const [clinica, setClinica] = useState({
    nomeFantasia: '',
    email: '',
    cnpj: '',
    cep: '',
    cidade: '',
    uf: '',
    logradouro: '',
    numero: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClinica((prevClinica) => ({
      ...prevClinica,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className={styles.container}>
      <h1>Cadastrar Nova Clínica</h1>
      <section className={styles.formSection}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>Nome Fantasia</label>
          <input
            type="text"
            id="nomeFantasia"
            name="nomeFantasia"
            value={clinica.nomeFantasia}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={clinica.email}
            onChange={handleChange}
          />

          <label>CNPJ</label>
          <input
            type="text"
            id="cnpj"
            name="cnpj"
            value={clinica.cnpj}
            onChange={handleChange}
          />

          <label>CEP</label>
          <input
            type="text"
            id="cep"
            name="cep"
            value={clinica.cep}
            onChange={handleChange}
          />

          <label>Cidade</label>
          <input
            type="text"
            id="cidade"
            name="cidade"
            value={clinica.cidade}
            onChange={handleChange}
          />

          <label>UF</label>
          <input
            type="text"
            id="uf"
            name="uf"
            value={clinica.uf}
            onChange={handleChange}
          />

          <label>Logradouro</label>
          <input
            type="text"
            id="logradouro"
            name="logradouro"
            value={clinica.logradouro}
            onChange={handleChange}
          />

          <label>Número</label>
          <input
            type="text"
            id="numero"
            name="numero"
            value={clinica.numero}
            onChange={handleChange}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </section>
    </main>
  );
};



