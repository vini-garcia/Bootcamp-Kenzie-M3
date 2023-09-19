export function RestrictedPage({isLoggedIn, user, login, logout}) {

    return(
        <>
            {isLoggedIn ? (
                <div>
                    <h1>Bem vindo, {user}</h1>
                <button onClick={logout}>
                 Clique aqui para deslogar
                </button>
                </div>
            ) : (
                <div>
                    <h1>Você não pode acessar essa página</h1>
                    <button onClick={login}>
                    Clique aqui para logar
                    </button>
               </div>
            )}

        </>
    )
}