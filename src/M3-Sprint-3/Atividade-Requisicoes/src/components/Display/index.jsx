export function Display({ response }) {
    if(response === ''){
        return
    }
    
  return (
    <>
      {response.status === 200 ? (
        <p>
          Bem vindo, {response.data.user.name}. Login efetuado com sucesso
        </p>
      ) : (
        <p>O login falhou, {response.data}</p>
      )}
    </>
  );
}
