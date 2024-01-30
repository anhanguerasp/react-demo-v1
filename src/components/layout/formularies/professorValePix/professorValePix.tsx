import { useState } from "react";
import "./formularie.scss";
import "../../../../../public/scss/forms-g.scss";
import "../../../../../public/scss/forms.scss";
import axios from "axios";
import { SwitchFormulary } from "../basic/swirchFormularie";
import { IProfessor } from "../../../../models/afiliados/IProfessor";
import { handlePhone } from "../../../../../public/TS/script";
import { Success } from "../../../reuseable/submit/success/Succes";

type props = {
  partner: string;
};
export const ProfessorValePixFormulary = ({ partner }: props) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [couseType, setTypeCourse] = useState("");
  const [name, setName] = useState("");
  const [phone, sePhone] = useState("");
  const [email, setEmail] = useState("");
  const [modalidade, setModalidade] = useState("");
  const [curso, setCurso] = useState("");
  const [polo, setPolo] = useState("");

  const [nomeAluno, setNomeAluno] = useState("");
  //const [ra, setRa] = useState("");
  const [telefoneAluno, setTelefoneAluno] = useState("");
  const [emailAluno, setEmailAluno] = useState("");
  //const [pixAluno, setPixAluno] = useState("");

  const [cpf, setCpf] = useState("");
  const [cpfpessoaindicou, setCpfPessoaIndicou] = useState("");

  const handleCurso = (e: any) => {
    setCurso(e);
  };

  const date = new Date();

  const formatedDate = `${date.getUTCDate().toString().padStart(2, "0")}/${(
    date.getUTCMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${date.getFullYear()}`;

  const body: IProfessor = {
    data: formatedDate,
    nome: name,
    email: email,
    telefone: phone,
    modalidade: modalidade,
    parceria: partner,
    tipo: couseType,
    curso: curso,
    polo: polo,
    nomeprof: nomeAluno,
    telefoneprof: telefoneAluno,
    emailprof: emailAluno,
    CPF: cpf,
    CPFQuemIndicou: cpfpessoaindicou,
  };

  console.log(formatedDate);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios.post("https://api.sheetmonkey.io/form/uwnN9fSvLjroHLkpXPQsmk", body, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3300);
  };

  console.log(body);

  return (
    <div id="formulario">
      <div className="contato container-forms">
        <div className="matricule-se-container">
          <h1>Matricule-se já</h1>
        </div>
        <section
          className="contato-dados"
          aria-label="Endereço"
          style={{ backgroundColor: "black" }}
        >
          <h2>Dê o primeiro passo para sua mudança de vida!</h2>
          <p>Entre em contato:</p>
          <address className="contato-meios">
            <a href="mailto:contato@anhanguerasp.com.br">
              contato@anhanguerasp.com.br
            </a>
            <a href="tel:+5511969510032">+55 11 96951-0032</a>
          </address>
          <div className="contato-redes">
            <a
              target="_blank"
              href="https://www.facebook.com/ComunidadeAnhangueraSP"
            >
              <img src="/img/facebook.svg" alt="Facebook" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/anhangueraspoficial/"
            >
              <img src="/img/instagram-p.svg" alt="Instagram" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/school/anhanguera-sp-oficial"
            >
              <img src="/img/linkedin.svg" alt="Linkedin" />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCXecYFqUtKzven0EERTwvvQ"
            >
              <img src="/img/youtube.svg" alt="Youtube" />
            </a>
          </div>
        </section>

        <section className="contato-formulario" aria-label="formulario">
          <form className="form" onSubmit={(e: any) => handleSubmit(e)}>
            <div className="col-2 nao-visivel">
              <label htmlFor="Dominos">Parceria</label>
              <input
                type="text"
                id="Dominos"
                name="parceria"
                value="Domino's"
                readOnly
              />
            </div>

            <h2 className="col-1" style={{ textAlign: "left", width: "90%" }}>
              Quem te indicou?
            </h2>
            <div>
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nomealuno"
                placeholder="Nome"
                onChange={(e: any) => setNomeAluno(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="telefone do aluno">Telefone</label>
              <input
                type="tel"
                id="telefone do aluno"
                name="telefonealuno"
                placeholder="(11)99999-9999"
                onChange={(e: any) => setTelefoneAluno(e.target.value)}
                /*onKeyUp="handlePhone(event)" */ maxLength={15}
                onKeyUp={(e) => handlePhone(e)}
                required
              />
            </div>
            <div>
              <label htmlFor="email do aluno">Email</label>
              <input
                type="email"
                id="email do aluno"
                name="emailaluno"
                placeholder="contato@email.com.br"
                autoComplete="on"
                onChange={(e) => setEmailAluno(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="CPF">CPF</label>
              <input
                type="text"
                id="CPF"
                name="CPF"
                placeholder="insira um número de CPF válido..."
                /*onKeyUp="handlePhone(event)"*/ maxLength={11}
                onChange={(e) => setCpfPessoaIndicou(e.target.value)}
                required
              />
            </div>

            <h2
              className="col-1"
              style={{ textAlign: "left", width: "90%", marginTop: "35px" }}
            >
              Agora preencha seus dados
            </h2>
            <div className="col-2 nao-visivel">
              <label htmlFor="data">Data de Inscrição</label>
              <input type="text" id="data" name="data" readOnly />
            </div>
            <div>
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Seu nome"
                required
                onChange={(e: any) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="telefone">Telefone</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                placeholder="(11)99999-9999"
                /*onKeyUp="handlePhone(event)"*/ maxLength={15}
                onChange={(e) => sePhone(e.target.value)}
                required
              />
            </div>

            <div className="col-2">
              <label htmlFor="CPF">CPF</label>
              <input
                type="text"
                id="CPF"
                name="CPF"
                placeholder="insira um número de CPF válido..."
                /*onKeyUp="handlePhone(event)"*/ maxLength={11}
                onChange={(e) => setCpf(e.target.value)}
                required
              />
            </div>

            <div className="col-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="contato@email.com.br"
                autoComplete="on"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-2">
              <label htmlFor="Modalidade">Modalidade</label>
              <select
                className="form-select"
                name="modalidade"
                typeof="select"
                id="Modalidade"
                onChange={(e) => setModalidade(e.target.value)}
                required
              >
                <option value="" disabled selected>
                  Escolha a modalidade
                </option>
                <option value="100% EAD">100% EAD</option>
                <option value="Presencial">Presencial</option>
                <option value="Semi-Presencial">Semi-Presencial</option>
              </select>
            </div>
            <div className="col-2">
              <label htmlFor="tipo de curso">Tipo de Curso</label>

              <select
                className="form-select"
                name="tipo"
                typeof="select"
                id="tipo de curso"
                onChange={(e: any) => setTypeCourse(e.target.value)}
                required
              >
                <option value="" disabled selected>
                  Escolha o Tipo de Curso
                </option>
                <option value="Graduação">Graduação</option>
                <option value="Pós-graduação">Pós-graduação</option>
                <option value="Cursos Técnicos">Cursos técnicos</option>
                <option value="Cursos Livres">Cursos Livres</option>
              </select>
            </div>

            <div className="col-2">
              <label>Curso de Interesse</label>
              <SwitchFormulary
                courseType={couseType}
                handleCourse={handleCurso}
              />
            </div>

            <div className="col-2">
              <label htmlFor="polo de interesse">Polo de Interesse</label>
              <select
                className="form-select"
                name="polo"
                id="polo de interesse"
                onChange={(e) => setPolo(e.target.value)}
                required
              >
                <option value="" disabled selected>
                  Escolha o Polo
                </option>
                <option value="Araraquara">Araraquara</option>
                <option value="Barueri">Barueri</option>
                <option value="Bauru">Bauru</option>
                <option value="Cidade Tiradentes">Cidade Tiradentes</option>
                <option value="Jabaquara">Jabaquara</option>
                <option value="Limeira">Limeira</option>
                <option value="Paulista">Paulista</option>
                <option value="Pirapora do Bom Jesus">
                  Pirapora do Bom Jesus
                </option>
                <option value="Republica">República</option>
                <option value="Rio Claro">Rio Claro</option>
                <option value="Santa Gertrudes">Santa Gertrudes</option>
                <option value="Santana de Parnaiba">Santana de Parnaiba</option>
                <option value="sao miguel">São Miguel</option>
                <option value="Tatuape">Tatuapé</option>
                <option value="Vila Matilde">Vila Matilde</option>
              </select>
            </div>
            <button className="botao-form" type="submit">
              Inscreva-se
            </button>
            <div id="mensagem" style={{ display: "none" }}></div>
            {showSuccess ? <Success /> : ""}
          </form>
        </section>
      </div>
    </div>
  );
};
