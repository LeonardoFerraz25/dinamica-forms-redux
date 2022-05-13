const INITTIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
};

function userInfoReducer(state = INITTIAL_STATE, action) {
  switch (action.type) {
  case 'USER_NAME':
    return { ...state, nome: action.payload };
  case 'USER_EMAIL':
    return { ...state, email: action.payload };
  case 'USER_CPF':
    return { ...state, cpf: action.payload };
  case 'USER_ENDERECO':
    return { ...state, endereco: action.payload };
  case 'USER_CIDADE':
    return { ...state, cidade: action.payload };
  case 'USER_ESTADO':
    return { ...state, estado: action.payload };
  default:
    return state;
  }
}

export default userInfoReducer;
