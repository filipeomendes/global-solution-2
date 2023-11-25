"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image"

export default function Login() {
  const router = useRouter();

  const [msgStatus, setMsgStatus] = useState("");
  const [classLoginMsg, setClassLoginMsg] = useState("");
  const [usuario, setUsuario] = useState({
    "info": "login",
    "email": "",
    "senha": ""
  });

  useEffect(() => {
    if (msgStatus === "Login realizado com SUCESSO!") {
      setClassLoginMsg("login-suc");
      setTimeout(() => {
        if (!sessionStorage.getItem("token-user")) {
          router.push("/paginas/ajuda");
        }
      }, 2000);
    } else if (msgStatus === "USUÁRIO E OU SENHA INVÁLIDOS!") {
      setClassLoginMsg("login-err");
    } else {
      setClassLoginMsg("login");
    }
  }, [msgStatus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/base/base-users/0", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
      });

      if (response.ok) {
        const user = await response.json();

        if (user && user.email === usuario.email && user.senha === usuario.senha) {
          const token = Math.random().toString(36).substring(2);
          sessionStorage.setItem("token-user", token);
          setMsgStatus("Login realizado com sucesso!");
          setTimeout(() => {
            setMsgStatus("");
            if (!sessionStorage.getItem("token-user")) {
              router.push("/paginas/ajuda");
            }
          }, 2000);
        } else {
          setMsgStatus("Usuário ou senha inválidos!");
          setTimeout(() => {
            setMsgStatus("");
            setUsuario({
              "info": "login",
              "email": "",
              "senha": ""
            });
          }, 2000);
        }
      } else {
        const errorMessage = await response.text();
        setMsgStatus(`Erro ao realizar o login`);
        setTimeout(() => {
          setMsgStatus("");
          setUsuario({
            "info": "login",
            "email": "",
            "senha": ""
          });
        }, 2000);
      }
    } catch (error) {
      console.error("Erro ao realizar o login:", error);
      setMsgStatus("Erro ao realizar o login. Por favor, tente novamente.");
      setTimeout(() => {
        setMsgStatus("");
        setUsuario({
          "info": "login",
          "email": "",
          "senha": ""
        });
      }, 2000);
    }
  }

  return (
    <main className='login'>
      <section className="texto-login">
        <div className='titulo-login'>
          <h1>Login</h1>
        </div>
        <div className="subtitulo-login">
          <h2>Acesso de Administradores:</h2>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <fieldset>
            <div className="form-control">
              <label htmlFor="idEmail">EMAIL:</label>
              <input type="email" name="email" id="idEmail" placeholder="Digite o seu EMAIL: complex.vital.gs@gmail.com" value={usuario.email} onChange={handleChange} />
            </div>
            <div className="form-control">
              <label htmlFor="idSenha">SENHA:</label>
              <input type="password" name="senha" id="idSenha" placeholder="Digite a sua SENHA: gs1234" value={usuario.senha} onChange={handleChange} />
            </div>
            <div className="botao">
              <button type="submit">LOGIN</button>
            </div>
          </fieldset>
        </form>
        {msgStatus && <div className={classLoginMsg}>{msgStatus}</div>}
      </section>
    </main>
  );
}
