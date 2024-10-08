import dotenv from "dotenv";

dotenv.config();

export async function sendMessageWA (
  ConnectID,
  nomeCliente,
  telefone,
  espacoEscolhido,
  dataEvento,
  publico,
  tipoEvento,
  outrosServicos,
  orcamento,
  duvida
){
    const url = `https://backend.botconversa.com.br/api/v1/webhook/subscriber/${ConnectID}/send_message/`;
    const apiKey = '015359db-2805-4423-86e4-914810c3cb3f';
    const data = {
        type: "text",
        value: `Olá!\n\nChegou uma nova solicitação de orçamento.\n\nNome do Cliente: ${nomeCliente} \nTelefone: ${telefone} \nEspaço Escolhido: ${espacoEscolhido} \nData do Evento: ${dataEvento} \nPúblico: ${publico} \nTipo do Evento: ${tipoEvento} \n Outros Serviços: ${outrosServicos} \nOrçamento: ${orcamento} \nDúvida: ${duvida}`
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'API-KEY': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    // Log do que está sendo enviado
    console.log("Enviando dados para a API:", {
      url,
      headers: requestOptions.headers,
      body: requestOptions.body
    });

    try {
      const response = await fetch(url, requestOptions);

      // Verifica se a resposta está ok
      if (!response.ok) {
        throw new Error(`Erro ao fazer a requisição: ${response.status}`);
      }

      const responseData = await response.json();

      // Log da resposta
      console.log("Resposta recebida da API:", responseData);

      return responseData;
      
    } catch (error) {
      console.error("Erro ao enviar a mensagem:", error);
    }
}