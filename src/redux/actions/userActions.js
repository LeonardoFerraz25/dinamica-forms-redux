export const userName = (nome) => ({
  type: 'USER_NAME',
  payload: nome,
});

export const userEmail = (email) => ({
  type: 'USER_EMAIL',
  payload: email,
});

export const userCPF = (cpf) => ({
  type: 'USER_CPF',
  payload: cpf,
});

export const userEndereco = (endereco) => ({
  type: 'USER_ENDERECO',
  payload: endereco,
});

export const userCidade = (cidade) => ({
  type: 'USER_CIDADE',
  payload: cidade,
});

export const userEstado = (estado) => ({
  type: 'USER_ESTADO',
  payload: estado,
});
