type formProps = {
  courseType: string;
  handleCourse: (e: any) => void;
};

export const SwitchFormulary = ({ courseType, handleCourse }: formProps) => {
  console.log(courseType);
  switch (courseType) {
    case "Graduação":
      return (
        <select onChange={(e: any) => handleCourse(e.target.value)}>
          <option value="" disabled selected>
            Escolha o Curso de graduação desejado
          </option>
          <option value="ADMINISTRAÇÃO PÚBLICA">ADMINISTRAÇÃO PÚBLICA</option>
          <option value="ADMINISTRAÇÃO">ADMINISTRAÇÃO</option>
          <option value="ARTES VISUAIS">ARTES VISUAIS - Bacharel</option>
          <option value="CIÊNCIA POLÍTICA">CIÊNCIA POLÍTICA</option>
          <option value="CIÊNCIAS CONTÁBEIS">CIÊNCIAS CONTÁBEIS</option>
          <option value="CIÊNCIAS ECONÔMICAS">CIÊNCIAS ECONÔMICAS</option>
          <option value="CRIMINOLOGIA">CRIMINOLOGIA</option>
          <option value="JORNALISMO">JORNALISMO</option>
          <option value="PSICOPEDAGOGIA">PSICOPEDAGOGIA</option>
          <option value="PUBLICIDADE E PROPAGANDA">
            PUBLICIDADE E PROPAGANDA
          </option>
          <option value="QUÍMICA">QUÍMICA</option>
          <option value="RELAÇÕES INTERNACIONAIS">
            RELAÇÕES INTERNACIONAIS
          </option>
          <option value="SERVIÇO SOCIAL">SERVIÇO SOCIAL</option>
          <option value="SISTEMA DE INFORMAÇÃO">SISTEMA DE INFORMAÇÃO</option>
          <option value="TEOLOGIA">TEOLOGIA</option>
          <option value="ENGENHARIA DE SOFTWARE">ENGENHARIA DE SOFTWARE</option>
          <option value="ENGENHARIA DA COMPUTAÇÃO">
            ENGENHARIA DA COMPUTAÇÃO
          </option>
          <option value="EDUCAÇÃO FÍSICA">EDUCAÇÃO FÍSICA</option>
          <option value="ARTES VISUAIS - Licenciatura">
            ARTES VISUAIS - Licenciatura
          </option>
          <option value="CIÊNCIAS BIOLÓGICAS">CIÊNCIAS BIOLÓGICAS</option>
          <option value="EDUCAÇÃO ESPECIAL">EDUCAÇÃO ESPECIAL</option>
          <option value="EDUCAÇÃO FÍSICA - LICENCIATURA">
            EDUCAÇÃO FÍSICA - LICENCIATURA
          </option>
          <option value="FILOSOFIA">FILOSOFIA</option>
          <option value="GEOGRAFIA">GEOGRAFIA</option>
          <option value="HISTÓRIA">HISTÓRIA</option>
          <option value="LETRAS -PORTUGUÊS">LETRAS -PORTUGUÊS</option>
          <option value="LETRAS - PORTUGUÊS E ESPANHOL">
            LETRAS - PORTUGUÊS E ESPANHOL
          </option>
          <option value="LETRAS - PORTUGUÊS E INGLÊS">
            LETRAS - PORTUGUÊS E INGLÊS
          </option>
          <option value="MATEMÁTICA">MATEMÁTICA</option>
          <option value="PEDAGOGIA">PEDAGOGIA</option>
          <option value="SOCIOLOGIA">SOCIOLOGIA</option>
          <option value="AGRONEGÓCIOS">AGRONEGÓCIOS</option>
          <option value="ANÁLISE E DESENVOLVIMENTO DE SISTEMAS">
            ANÁLISE E DESENVOLVIMENTO DE SISTEMAS
          </option>
          <option value="ARQUITETURA DE DADOS">ARQUITETURA DE DADOS</option>
          <option value="BLOCKCHAIN, CRIPTOMOEDAS E FINANÇAS NA ERA DIGITAL">
            BLOCKCHAIN, CRIPTOMOEDAS E FINANÇAS NA ERA DIGITAL
          </option>
          <option value="CIBERSEGURANÇA">CIBERSEGURANÇA</option>
          <option value="CIÊNCIAS DE DADOS">CIÊNCIAS DE DADOS</option>
          <option value="COACHING E DESENVOLVIMENTO">
            COACHING E DESENVOLVIMENTO HUMANO
          </option>
          <option value="RECURSOS HUMANOS">RECURSOS HUMANOS</option>
          <option value="COMPUTAÇÃO EM NUVEM">COMPUTAÇÃO EM NUVEM</option>
          <option value="COMÉRCIO EXTERIOR">COMÉRCIO EXTERIOR</option>
          <option value="DESENVOLVIMENTO BACKEND">
            DESENVOLVIMENTO BACKEND
          </option>
          <option value="DESENVOLVIMENTO MOBILE">DESENVOLVIMENTO MOBILE</option>
          <option value="DESENVOLVIMENTO WEB">DESENVOLVIMENTO WEB</option>
          <option value="DESING GRÁFICO">DESING GRÁFICO</option>
          <option value="DESING DE EXPERIÊNCIA">DESING DE EXPERIÊNCIA</option>
          <option value="DESING DE INTERIORES">DESING DE INTERIORES</option>
          <option value="DESING DE MODA">DESING DE MODA</option>
          <option value="DESING DE PRODUTO">DESING DE PRODUTO</option>
          <option value="DEVOPS">DEVOPS</option>
          <option value="EMPREENDEDORISMO">EMPREENDEDORISMO</option>
          <option value="EMPREENDEDORISMO E NOVOS NEGÓCIOS">
            EMPREENDEDORISMO E NOVOS NEGÓCIOS
          </option>
          <option value="ESTÉTICA E COSMÉSTICA">ESTÉTICA E COSMÉSTICA</option>
          <option value="EVENTOS">EVENTOS</option>
          <option value="FOTOGRAFIA">FOTOGRAFIA</option>
          <option value="GASTRONOMIA">GASTRONOMIA</option>
          <option value="GERONTOLOGIA">GERONTOLOGIA</option>
          <option value="GESTÃO AMBIENTAL">GESTÃO AMBIENTAL</option>
          <option value="GESTÃO COMERCIAL">GESTÃO COMERCIAL</option>
          <option value="GESTÃO FINANCEIRA">GESTÃO FINANCEIRA</option>
          <option value="GESTÃO HOSPITALAR">GESTÃO HOSPITALAR</option>
          <option value="GESTÃO PORTUÁRIA">GESTÃO PORTUÁRIA</option>
          <option value="GESTÃO PÚBLICA">GESTÃO PÚBLICA</option>
          <option value="GESTÃO DE INOVAÇÃO">GESTÃO DE INOVAÇÃO</option>
          <option value="GESTÃO DA PRODUÇÃO INDUSTRIAL">
            GESTÃO DA PRODUÇÃO INDUSTRIAL
          </option>
          <option value="GESTÃO DA QUALIDADE">GESTÃO DA QUALIDADE</option>
          <option value="GESTÃO DA TECNOLOGIA DA INFORMAÇÃO">
            GESTÃO DA TECNOLOGIA DA INFORMAÇÃO
          </option>
          <option value="GESTÃO DAS ORGANIZAÇÕES DO TERCEIRO SETOR">
            GESTÃO DAS ORGANIZAÇÕES DO TERCEIRO SETOR
          </option>
          <option value="GESTÃO DE COOPERATIVAS">GESTÃO DE COOPERATIVAS</option>
          <option value="GESTÃO DE PRODUTO">GESTÃO DE PRODUTO</option>
          <option value="GESTÃO DE RECURSOS HUMANOS">
            GESTÃO DE RECURSOS HUMANOS
          </option>
          <option value="GESTÃO DE SAÚDE PÚBLICA">
            GESTÃO DE SAÚDE PÚBLICA
          </option>
          <option value="GESTÃO DE SEGURANÇA PRIVADA">
            GESTÃO DE SEGURANÇA PRIVADA
          </option>
          <option value="GESTÃO DE TURISMO ">GESTÃO DE TURISMO </option>
          <option value="INTELIGÊNCIA DE MERCADO E ANALISE DE DADOS">
            INTELIGÊNCIA DE MERCADO E ANALISE DE DADOS
          </option>
          <option value="INVESTIGAÇÃO E PERÍCIA CRIMINAL">
            INVESTIGAÇÃO E PERÍCIA CRIMINAL
          </option>
          <option value="JOGOS DIGITAIS">JOGOS DIGITAIS</option>
          <option value="LOGÍSTICA">LOGÍSTICA</option>
          <option value="MARKETING">MARKETING</option>
          <option value="MARKETING DIGITAL">MARKETING DIGITAL</option>
          <option value="MEDIAÇÃO">MEDIAÇÃO</option>
          <option value="NEGÓCIOS IMOBILIÁRIOS">NEGÓCIOS IMOBILIÁRIOS</option>
          <option value="PODOLOGIA">PODOLOGIA</option>
          <option value="PROCESSOS GERENCIAIS">PROCESSOS GERENCIAIS</option>
          <option value="PRODUÇÃO CERVEJEIRA">PRODUÇÃO CERVEJEIRA</option>
          <option value="REDES DE COMPUTADORES">REDES DE COMPUTADORES</option>
          <option value="SECRETARIADO">SECRETARIADO</option>
          <option value="SEGURANÇA PÚBLICA">SEGURANÇA PÚBLICA</option>
          <option value="SEGURANÇA DA INFORMAÇÃO">
            SEGURANÇA DA INFORMAÇÃO
          </option>
          <option value="SEGURANÇA DO TRABALHO">SEGURANÇA DO TRABALHO</option>
          <option value="SERVIÇOS JURÍDICOS">SERVIÇOS JURÍDICOS</option>
          <option value="CARTORÁRIOS E NOTARIAIS">
            CARTORÁRIOS E NOTARIAIS
          </option>
          <option value="SISTEMAS PARA INTERNET">SISTEMAS PARA INTERNET</option>
          <option value="ENFERMAGEM">ENFERMAGEM</option>
          <option value="BIOMEDICINA">BIOMEDICINA</option>
          <option value="FISIOTERAPIA">FISIOTERAPIA</option>
          <option value="NUTRIÇÃO">NUTRIÇÃO</option>
          <option value="ENGENHARIA CIVIL">ENGENHARIA CIVIL</option>
          <option value="ENGENHARIA ELÉTRICA">ENGENHARIA ELÉTRICA</option>
          <option value="ENGENHARIA MECANICA">ENGENHARIA MECÂNICA</option>
          <option value="ENGENHARIA DE PRODUÇÃO">ENGENHARIA DE PRODUÇÃO</option>
          <option value="ENGENHARIA DE CONTROLE E AUTOMAÇÃO">
            ENGENHARIA DE CONTROLE E AUTOMAÇÃO
          </option>
          <option value="AGRONOMIA (ARARAQUARA)">AGRONOMIA (ARARAQUARA)</option>
          <option value="DIREITO - presencial Rio Claro">
            DIREITO - presencial Rio Claro
          </option>
          <option value="DIREITO - presencial Bauru">
            DIREITO - presencial Bauru
          </option>
          <option value="PSICOLOGIA - presencial Rio Claro">
            PSICOLOGIA - presencial Rio Claro
          </option>
          <option value="PSICOLOGIA - presencial Bauru">
            PSICOLOGIA - presencial Bauru
          </option>
        </select>
      );

    case "Cursos Técnicos":
      return (
        <select onChange={(e: any) => handleCourse(e.target.value)}>
          <option value="" disabled selected>
            Escolha o Curso Técnico desejado
          </option>
          <option value="TÉCNICO EM ADMINISTRAÇÃO">
            TÉCNICO EM ADMINISTRAÇÃO
          </option>
          <option value="TÉCNICO EM CONTABILIDADE">
            TÉCNICO EM CONTABILIDADE
          </option>
          <option value="TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS">
            TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS
          </option>
          <option value="TÉCNICO EM ELETROTÉCNICA">
            TÉCNICO EM ELETROTÉCNICA
          </option>
          <option value="TÉCNICO EM LOSÍSTICA">TÉCNICO EM LOGÍSTICA</option>
          <option value="TÉCNICO EM MANUTENÇÃO E SUPORTE EM INFORMÁTICA">
            TÉCNICO EM MANUTENÇÃO E SUPORTE EM INFORMÁTICA
          </option>
          <option value="TÉCNICO EM MARKETING">TÉCNICO EM MARKETING</option>
          <option value="TÉCNICO EM MEIO AMBIENTE">
            TÉCNICO EM MEIO AMBIENTE
          </option>
          <option value="TÉCNICO EM VENDAS">TÉCNICO EM VENDAS</option>
        </select>
      );

    default:
      return (
        <input
          placeholder="Digite o curso desejado"
          onChange={(e: any) => handleCourse(e.target.value)}
        ></input>
      );
  }
};
