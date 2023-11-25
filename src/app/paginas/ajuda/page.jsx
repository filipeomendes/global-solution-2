'use client';
import { useState } from 'react';
import Link from 'next/link';

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

  const handleSelecaoEstado = (e) => {
    setFormData({ ...formData, uf: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
  };

  const siglasEstados = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC','SP', 'SE', 'TO'
  ];

  return (
    <main>
      <section className="form-ajuda">
        <div className="titulo-form">
          <h1>Preciso de Ajuda!</h1>
        </div>
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <div className="linha-1">
              <label>
                CPF:
                <input
                  type="text"
                  name="cpf"
                  className="input-cpf"
                  placeholder="Digite o seu CPF"
                  value={formData.cpf}
                  onChange={handleChange}
                />
              </label>
              <label>
                E-mail:
                <input
                  type="email"
                  name="email"
                  className="input-email"
                  placeholder="Digite o seu email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="linha-2">
              <label>
                Nome:
                <input
                  type="text"
                  name="nome"
                  className="input-nome"
                  placeholder="Digite o seu nome"
                  value={formData.nome}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="linha-3">
              <label>
                CEP:
                <input
                  type="text"
                  name="cep"
                  className="input-cep"
                  placeholder="Digite o seu CEP"
                  value={formData.cep}
                  onChange={handleChange}
                />
              </label>
              <label>
                Cidade:
                <input
                  type="text"
                  name="cidade"
                  className="input-cidade"
                  placeholder="Digite a sua cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                />
              </label>
              <label>
                UF:
                <select
                  name="uf"
                  className="input-uf"
                  value={formData.uf}
                  onChange={handleSelecaoEstado}
                >
                  <option value="" disabled>Selecione um estado</option>
                  {siglasEstados.map((sigla, index) => (
                    <option key={index} value={sigla}>
                      {sigla}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="linha-4">
              <label>
                Logradouro:
                <input
                  type="text"
                  name="logradouro"
                  className="input-logradouro"
                  placeholder="Digite o seu logradouro"
                  value={formData.logradouro}
                  onChange={handleChange}
                />
              </label>
              <label>
                Número:
                <input
                  type="text"
                  name="numero"
                  className="input-numero"
                  placeholder="Digite o numero do endereço"
                  value={formData.numero}
                  onChange={handleChange}
                />
              </label>
            </div>
            <Link href="/paginas/ajuda/maps"><button type="submit" name="submit">Enviar</button></Link>
          </form>
        </div>
      </section>
    </main>
  );
}