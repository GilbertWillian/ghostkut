const { SiteClient } = require("datocms-client");

export default async function recebedorDeRequests(request, response) {
  if (request.method === "POST") {
    const TOLKEN = "bfc0f3b48e13ce692799a09bcd0000";
    const client = new SiteClient(TOLKEN);

    //Validar os dados antes de sair cadastrando
    const registroCriado = await client.items.create({
      itemType: "1003728",
      ...request.body,
      // title: "Comunidade de Teste",
      // imageUrl: "https://github.com/GilbertWillian.png",
      // creatorSlug: "GilbertWillian",
    });

    console.log(registroCriado);

    response.json({
      dados: "Algum dado qualquer",
      registroCriado,
    });

    return;
  }

  response.status(404).json({
    mensage:'Ainda não temos nada no GET, mas no POST tem!'
  })
}
