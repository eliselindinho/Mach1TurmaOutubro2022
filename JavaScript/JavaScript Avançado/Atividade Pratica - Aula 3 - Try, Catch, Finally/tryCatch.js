/*
Crie um código de tratamento de erro onde possua 3 níveis de tratamento de erro um dentro do outro. Nos níveis mais internos ao cair no catch, deve ser forçado outro erro para que ele caia no catch do pai.


● No try do nível mais baixo (mais interno), forçar uma exceção.

● Nos catchs dos níveis internos deve ser feito um console.log e após forçar o erro para o pai.

● O comportamento acima deve ser feito até que chegue no nível mais alto ou mais externo. 

● Somente no nível mais alto ou mais externo será feito um console.error do erro gerado sem forçar outro erro. */

try {
  try {
    try {
      throw new Error("Ocorreu um erro aqui!");
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  } catch (ex) {
    console.log(ex);
    throw new Error(ex.message);
  }
} catch (error) {
  console.error(error);
}
