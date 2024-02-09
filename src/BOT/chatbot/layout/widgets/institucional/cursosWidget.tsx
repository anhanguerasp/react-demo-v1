export const GraduaçãoCursosWidget = () => {
  const cursos = [
    { name: "ADMINISTRAÇÃO PÚBLICA" },

    { name: "ADMINISTRAÇÃO" },
    { name: "ARTES VISUAIS - Bacharel" },
    { name: "CIÊNCIA POLÍTICA" },
    { name: "CIÊNCIAS CONTÁBEIS" },
    { name: "CIÊNCIAS ECONÔMICAS" },
    { name: "CRIMINOLOGIA" },
    { name: "JORNALISMO" },
    { name: "PSICOPEDAGOGIA" },
    { name: "PUBLICIDADE E PROPAGANDA" },
    { name: "QUÍMICA" },
    { name: "RELAÇÕES INTERNACIONAIS" },
    { name: "SERVIÇO SOCIAL" },
    { name: "SISTEMA DE INFORMAÇÃO" },
    { name: "TEOLOGIA" },
    { name: "ENGENHARIA DE SOFTWARE" },
    { name: "ENGENHARIA DA COMPUTAÇÃO" },
    { name: "EDUCAÇÃO FÍSICA" },
    { name: "ARTES VISUAIS - Licenciatura" },
    { name: "CIÊNCIAS BIOLÓGICAS" },
    { name: "EDUCAÇÃO ESPECIAL" },
    { name: "EDUCAÇÃO FÍSICA - LICENCIATURA" },
    { name: "FILOSOFIA" },
    { name: "GEOGRAFIA" },
    { name: "HISTÓRIA" },
    { name: "LETRAS -PORTUGUÊS" },
    { name: "LETRAS - PORTUGUÊS E ESPANHOL" },
    { name: "LETRAS - PORTUGUÊS E INGLÊS" },
    { name: "MATEMÁTICA" },
    { name: "PEDAGOGIA" },
    { name: "SOCIOLOGIA" },
    { name: "AGRONEGÓCIOS" },
    { name: "ANÁLISE E DESENVOLVIMENTO DE SISTEMAS" },

    { name: "ARQUITETURA DE DADOS" },
    { name: "BLOCKCHAIN, CRIPTOMOEDAS E FINANÇAS NA ERA DIGITAL" },
    { name: "CIBERSEGURANÇA" },
    { name: "CIÊNCIAS DE DADOS" },
    { name: "COACHING E DESENVOLVIMENTO HUMANO" },
    { name: "RECURSOS HUMANOS" },
    { name: "COMPUTAÇÃO EM NUVEM" },
    { name: "COMÉRCIO EXTERIOR" },
    { name: "DESENVOLVIMENTO BACKEND" },
    { name: "DESENVOLVIMENTO MOBILE" },
    { name: "DESENVOLVIMENTO WEB" },
    { name: "DESING GRÁFICO" },
    { name: "DESING DE EXPERIÊNCIA" },
    { name: "DESING DE INTERIORES" },
    { name: "DESING DE MODA" },
    { name: "DESING DE PRODUTO" },
    { name: "DEVOPS" },

    { name: "EMPREENDEDORISMO" },
    { name: "EMPREENDEDORISMO E NOVOS NEGÓCIOS" },
    { name: "ESTÉTICA E COSMÉSTICA" },
    { name: "EVENTOS" },
    { name: "FOTOGRAFIA" },
    { name: "GASTRONOMIA" },

    { name: "GERONTOLOGIA" },
    { name: "GESTÃO AMBIENTAL" },
    { name: "GESTÃO COMERCIAL" },
    { name: "GESTÃO FINANCEIRA" },
    { name: "GESTÃO HOSPITALAR" },
    { name: "GESTÃO PORTUÁRIA" },
    { name: "GESTÃO PÚBLICA" },
    { name: "GESTÃO DE INOVAÇÃO" },
    { name: "GESTÃO DA PRODUÇÃO INDUSTRIAL" },
    { name: "GESTÃO DA QUALIDADE" },
    { name: "GESTÃO DA TECNOLOGIA DA INFORMAÇÃO" },
    { name: "GESTÃO DAS ORGANIZAÇÕES DO TERCEIRO SETOR" },
    { name: "GESTÃO DE COOPERATIVAS" },
    { name: "GESTÃO DE PRODUTO" },
    { name: "GESTÃO DE RECURSOS HUMANOS" },
    { name: "GESTÃO DE SAÚDE PÚBLICA" },
    { name: "GESTÃO DE SEGURANÇA PRIVADA" },
    { name: "GESTÃO DE TURISMO" },
    { name: "INTELIGÊNCIA DE MERCADO E ANALISE DE DADOS" },
    { name: "INVESTIGAÇÃO E PERÍCIA CRIMINAL" },
    { name: "JOGOS DIGITAIS" },
    { name: "LOGÍSTICA" },
    { name: "MARKETING" },

    { name: "MARKETING DIGITAL" },
    { name: "MEDIAÇÃO" },
    { name: "NEGÓCIOS IMOBILIÁRIOS" },
    { name: "PODOLOGIA" },
    { name: "PROCESSOS GERENCIAIS" },
    { name: "PRODUÇÃO CERVEJEIRA" },
    { name: "REDES DE COMPUTADORES" },
    { name: "SECRETARIADO" },
    { name: "SEGURANÇA PÚBLICA" },
    { name: "SEGURANÇA DA INFORMAÇÃO" },
    { name: "SEGURANÇA DO TRABALHO" },
    { name: "SERVIÇOS JURÍDICOS" },
    { name: "CARTORÁRIOS E NOTARIAIS" },
    { name: "SISTEMAS PARA INTERNET" },
    { name: "ENFERMAGEM" },
    { name: "BIOMEDICINA" },
    { name: "FISIOTERAPIA" },
    { name: "NUTRIÇÃO" },
    { name: "ENGENHARIA CIVIL" },
    { name: "ENGENHARIA ELÉTRICA" },
    { name: "ENGENHARIA MECÂNICA" },
    { name: "ENGENHARIA DE PRODUÇÃO" },
    { name: "ENGENHARIA DE CONTROLE E AUTOMAÇÃO" },
    { name: "AGRONOMIA (ARARAQUARA)" },
    { name: "DIREITO - presencial Rio Claro" },
    { name: "DIREITO - presencial Bauru" },
    { name: "PSICOLOGIA - presencial Rio Claro" },
    { name: "PSICOLOGIA - presencial Bauru" },
  ];

  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
      <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
        {cursos.map((curso) => (
          <div className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 hover:bg-orange-500 hover:text-white font-semibold">
            {curso.name}
          </div>
        ))}
      </nav>
      <div className="mt-10" style={{ padding: "7px 15px" }}>
        Para mais detalhes entre em contato
        <ul>
          <li className="flex mt-5">
            <a
              href="mailto: contato@anhanguerasp.com.br"
              className="mb-4 flex items-center justify-center md:justify-start hover:text-orange-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              contato@anhanguerasp.com.br
            </a>
          </li>
          <a
            href="tel:+55 11 99228-3525"
            className="mb-4 flex items-center justify-center md:justify-start hover:text-orange-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-3 h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clip-rule="evenodd"
              />
            </svg>
            +55 11 99228-3525
          </a>
        </ul>
      </div>
    </div>
  );
};

export const TecnicoCursosWidget = () => {
  const cursos = [
    { name: "TÉCNICO EM ADMINISTRAÇÃO" },

    { name: "TÉCNICO DESENHO DE CONSTRUÇÃO CIVIL" },

    { name: "TÉCNICO EM EDIFICAÇÕES" },
    { name: "TÉCNICO EM CONTABILIDADE" },

    { name: "TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS" },

    { name: "TÉCNICO EM ELETROTÉCNICA" },
    { name: "TÉCNICO EM ELETRÔNICA" },
    { name: "TÉCNICO EM ELETROMECÂNICA" },

    { name: "TÉCNICO EM TRANSAÇÕES IMOBILIÁRIAS" },

    { name: "TÉCNICO EM ESTÉTICA" },
    { name: "TÉCNICO EM ANÁLISES CLÍNICAS" },

    { name: "TÉCNICO EM MASSOTERAPIA" },

    { name: "TÉCNICO EM LOGÍSTICA" },
    { name: "TÉCNICO EM MANUTENÇÃO E SUPORTE EM INFORMÁTICA" },

    { name: "TÉCNICO EM MARKETING" },
    { name: "TÉCNICO EM MEIO AMBIENTE" },

    { name: "TÉCNICO EM VENDAS" },
  ];

  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
      <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
        {cursos.map((curso) => (
          <div className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 hover:bg-orange-500 hover:text-white font-semibold">
            {curso.name}
          </div>
        ))}
      </nav>
      <div className="mt-10" style={{ padding: "7px 15px" }}>
        Para mais detalhes entre em contato
        <ul>
          <li className="flex mt-5">
            <a
              href="mailto: contato@anhanguerasp.com.br"
              className="mb-4 flex items-center justify-center md:justify-start hover:text-orange-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              contato@anhanguerasp.com.br
            </a>
          </li>
          <a
            href="tel:+55 11 99228-3525"
            className="mb-4 flex items-center justify-center md:justify-start hover:text-orange-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-3 h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clip-rule="evenodd"
              />
            </svg>
            +55 11 99228-3525
          </a>
        </ul>
      </div>
    </div>
  );
};
