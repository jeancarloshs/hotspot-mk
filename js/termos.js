document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  let divMain = document.querySelector(".main");

  if (!divMain) {
    console.error("Elemento '.main' não encontrado!");
    return;
  }

  form.classList.add("hide");

  let divContainerTermos = document.createElement("div");
  divContainerTermos.className = "container-termos";

  // let providerName = "Internet Ágil";
  let providerName = "NOME DA EMPRESA";

  divContainerTermos.innerHTML = `
    <h3 class="h3Termos">
      <i>Para dar andamento no cadastro, leia atentamente os termos e clique no botão de <b>"Aceitar"</b> no final da página.</i>
    </h3>
    <h2><b>Termos de Uso para Hotspot - ${providerName}</b></h2>
    <p>Bem-vindo(a) ao nosso serviço de hotspot! Pedimos que leia atentamente estes termos antes de utilizar nossa conexão Wi-Fi. Ao se conectar à nossa rede, você concorda com os seguintes termos:</p>
    <ol>
      <li><b>Uso Responsável:</b> O serviço de hotspot destina-se ao uso geral da Internet. Os usuários devem utilizar a conexão de forma responsável e legal, evitando atividades que violem a lei ou causem danos a outros usuários ou à rede.</li>
      <li><b>Privacidade e Segurança:</b> Embora tomemos medidas para proteger a segurança e privacidade dos usuários, a conexão Wi-Fi pública pode apresentar riscos. Os usuários são responsáveis por proteger suas informações pessoais e dispositivos contra ameaças de segurança.</li>
      <li><b>Conteúdo Apropriado:</b> É proibido o acesso a conteúdos ilegais, ofensivos ou inadequados. Reservamo-nos o direito de bloquear o acesso a sites ou aplicativos que consideramos inapropriados.</li>
      <li><b>Responsabilidade do Usuário:</b> Os usuários são responsáveis por qualquer atividade realizada através da conexão Wi-Fi enquanto estiverem conectados. Qualquer violação destes termos pode resultar na suspensão ou proibição do acesso ao serviço.</li>
      <li><b>Limitação de Responsabilidade:</b> Não nos responsabilizamos por quaisquer danos ou prejuízos decorrentes do uso da conexão Wi-Fi, incluindo, mas não se limitando a, perda de dados, vírus ou interrupções no serviço.</li>
      <li><b>Promocional:</b> Ao aceitar o contrato, estou aceitando também o recebimento de e-mails, ligações, SMS e mensagens promocionais em meu WhatsApp.</li>
      <li><b>Autorização:</b> Eu autorizo explicitamente a coleta e o armazenamento dos dados fornecidos acima para serem utilizados exclusivamente na base de cadastro da CMC TELECOM - ${providerName}. Entendo que essas informações serão tratadas de forma confidencial e não serão compartilhadas com terceiros sem o meu consentimento expresso, exceto quando exigido por lei.</li>
      <li><b>Recusa:</b> Estou ciente de que o não fornecimento ou a recusa no fornecimento dos dados solicitados pode impossibilitar o meu acesso ao serviço de hotspot.</li>
    </ol>
    <p>
      Ao utilizar nosso hotspot, você concorda em cumprir estes termos e condições. Reservamo-nos o direito de modificar ou atualizar estes termos a qualquer momento. O uso continuado da conexão Wi-Fi constitui aceitação dessas modificações.
      Se tiver alguma dúvida sobre estes termos, entre em <b>contato conosco.</b>
    </p>
    <button type="button" class="btn--termos" id="btnAceitar">Aceitar</button>
    <button type="button" class="btn--termos" id="btnRecusar">Recusar</button>`;

  divMain.appendChild(divContainerTermos);

  const btnAceitar = document.getElementById("btnAceitar");
  btnAceitar.addEventListener("click", () => {
    form.classList.remove("hide");
    divContainerTermos.remove();
  });

  const btnRecusar = document.getElementById("btnRecusar");
  btnRecusar.addEventListener("click", () => {
    window.location = "../login.html";
  });
});
