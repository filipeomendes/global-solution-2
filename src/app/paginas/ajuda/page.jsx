'use client';
import { useState } from "react";


export default function Ajuda() {
  const [formData, setFormData] = useState({
    cpf: '',
    email: '',
    nome: '',
    cep: '',
    cidade: '',
    uf: '',
    logradouro: '',
    numero: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
  };

  return (
    <main className="form-ajuda">
      <h1>Preciso de Ajuda!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          CPF:
          <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} />
        </label>
        <label>
          E-mail:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Nome:
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
        </label>
        <label>
          CEP:
          <input type="text" name="cep" value={formData.cep} onChange={handleChange} />
        </label>
        <label>
          Cidade:
          <input type="text" name="cidade" value={formData.cidade} onChange={handleChange} />
        </label>
        <label>
          UF:
          <input type="text" name="uf" value={formData.uf} onChange={handleChange} />
        </label>
        <label>
          Logradouro:
          <input type="text" name="logradouro" value={formData.logradouro} onChange={handleChange} />
        </label>
        <label>
          Número:
          <input type="text" name="numero" value={formData.numero} onChange={handleChange} />
        </label>
        <button type="submit" name="submit">Enviar</button>
      </form>
    </main>
  )
}
