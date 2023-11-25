'use client';
export function Clinicas() {
    return (
      <main>
        <div className="tabela-container">
          <table>
            <thead>
              <tr>
                <th>Nome Fantasia</th>
                <th>Email</th>
                <th>CNPJ</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
        <button className="adicionar-btn">Adicionar Clínica</button>
      </main>
    );
  }
  