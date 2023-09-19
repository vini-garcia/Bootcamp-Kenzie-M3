API EatSmart
________________________________________________________________________________________________________________

=>GET BUSAR TODOS USUÁRIOS (tanto os usuários consumidores, quanto as empresas)

Rota: https://json-server-projeto-front-end.onrender.com/users;

Tipo de rota: 'GET' para buscar todos os usuários;

É necessário envio de token de autenticação no formato:
headers: {
            Authorization: `Bearer ${token}`,
          };


Content-Type: application/json;

Body: O corpo de requisição NÃO é necessário.

*Apenas usuários logados podem visualizar todos os usuários. Não esquecer o token do usuário logado no authorization.

Possíveis respostas de erro:
401 Unauthorized - "Missing authorization header": Código token não informado. 
401 Unauthorized - "jwt expired": Código token informado, porém expirado.
401 Unauthorized - "invalid token": Código token informado, porém inválido.

Resposta de sucesso:
[
	{
		"email": "admin@mail.com",
		"password": "$2a$10$yXMwQguEio7i9sqfxyPYM.6n7iAzS4Hnddg6/H91.zRYMN4xdO2Lm",
		"confirmPassword": "123456",
		"userName": "admin",
		"isCompany": false,
		"id": 1
	},
	{
		"email": "lanche@mail.com",
		"password": "$2a$10$M1W4mrXrzT5P0o.CESeF7.k3g6sC7hHRP7S/GPhe2jMzrXmLkFTIa",
		"userName": "Kilanche",
		"confirmPassword": "123456",
		"foodCategory": "lanches",
		"isCompany": true,
		"id": 2
	}
]
________________________________________________________________________________________________________________

=>GET (Query Parameters) BUSCAR TODOS OS USUÁRIOS CONSUMIDORES

Rota:  https://json-server-projeto-front-end.onrender.com/users?isCompany=false;

Tipo de rota: 'GET' para buscar todos os usuários consumidores;

É necessário envio de token de autenticação no formato:
headers: {
            Authorization: `Bearer ${token}`,
          };

Content-Type: application/json;

Body: O corpo de requisição NÃO é necessário;

**Apenas o usuário logado pode realizar buscas.Não esquecer de passar o token do usuário logado no authorization;.

Possíveis respostas de erro:
401 Unauthorized - "Missing authorization header": Código token não informado. 
401 Unauthorized - "jwt expired": Código token informado, porém expirado.
401 Unauthorized - "invalid token": Código token informado, porém inválido.

Resposta de sucesso:
[
	{
		"email": "admin@mail.com",
		"password": "$2a$10$yXMwQguEio7i9sqfxyPYM.6n7iAzS4Hnddg6/H91.zRYMN4xdO2Lm",
		"confirmPassword": "123456",
		"userName": "admin",
		"isCompany": false,
		"id": 1
	},
	{
		"email": "joao@mail.com",
		"password": "$2a$10$RBMY9r1O7mdT7G58omtw9.EP1DSGHVJkmOOyNSiEpQQcy7i4ITskm",
		"confirmPassword": "123456",
		"userName": "João da Silva",
		"isCompany": false,
		"id": 11
	}
]

________________________________________________________________________________________________________________

=>GET BUSAR USUÁRIO PELO ID

Rota: https://json-server-projeto-front-end.onrender.com/users/{ID do usuário};

Tipo de rota: 'GET' para buscar um usuário pelo id;

É necessário envio de token de autenticação no formato:
headers: {
            Authorization: `Bearer ${token}`,
          };


Content-Type: application/json;

Body: O corpo de requisição NÃO é necessário;

*Apenas usuários logados podem visualizar os usuários. Não esquecer de passar o ID do usuário na rota e o token do usuário logado no authorization.

Possíveis respostas de erro:
401 Unauthorized - "Missing authorization header": Código token não informado. 
401 Unauthorized - "jwt expired": Código token informado, porém expirado.
401 Unauthorized - "invalid token": Código token informado, porém inválido.
401 Unauthorized - "Bad control character in string literal in JSON at position 'X'": Código token informado, porém inválido.

Resposta de sucesso:
{
	"email": "admin@mail.com",
	"password": "$2a$10$yXMwQguEio7i9sqfxyPYM.6n7iAzS4Hnddg6/H91.zRYMN4xdO2Lm",
	"confirmPassword": "123456",
	"userName": "admin",
	"isCompany": false,
	"id": 1
}

________________________________________________________________________________________________________________

=>POST LOGIN USUÁRIO

Rota: https://json-server-projeto-front-end.onrender.com/login;

Tipo de rota: 'POST' para realizar o login de um usuário;

Não é necessário envio de token de autenticação;

Content-Type: application/json;

Body: O corpo de requisição deve ser exatamente no seguinte formato:
{
	"email": "joao@mail.com",
	"password": "123456"
}.

Possíveis respostas de erro:
400 Bad Request - "Cannot find user": Usuário não encontrado.
400 Bad Request - "Email format is invalid": E-mail infromado inválido.
400 Bad Request - "Password is too short": Senha infromada muito curta.
400 Bad Request - "Incorrect password": Senha infromada é incorreta.
400 Bad Request - "Email and password are required": Usuário e/ou email não informado. 

Resposta de sucesso:
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvYW9zaWx2YUBtYWlsLmNvbSIsImlhdCI6MTY4MzM4OTAzNiwiZXhwIjoxNjgzMzkyNjM2LCJzdWIiOiIxMiJ9.io_PDMvSb4q1sRGQs7e-aTWLDlR0uiaHRZtJAmaRH4k",
	"user": {
		"email": "joaosilva@mail.com",
		"confirmPassword": "123456",
		"userName": "João",
		"isCompany": false,
		"id": 12
	}
}

________________________________________________________________________________________________________________

=>POST CRIAR USUÁRIO

Rota: https://json-server-projeto-front-end.onrender.com/register;

Tipo de rota: 'POST' para criar um novo usuário;

Não é necessário envio de token de autenticação;

Content-Type: application/json;

Body: O corpo de requisição deve ser exatamente no seguinte formato:
{
	"email": "joao@mail.com",
	"password": "123456",
	"confirmPassword": "123456",
	"userName": "João da Silva",
	"isCompany": false
};

* a chave "isCompany" deve, obrigatóriamente, estar com o valor 'false';

*O campo “id” é preenchido automaticamente pela API.

Possíveis respostas de erro:
400 Bad Request - "Email format is invalid": E-mail informado inválido.
400 Bad Request - "Password is too short": Senha infromada muito curta.
400 Bad Request - "Email already exists": E-mail informado já existente.
400 Bad Request - "Email and password are required": Usuário e/ou email não informado. 

Resposta de sucesso:
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvYW9zaWx2YUBtYWlsLmNvbSIsImlhdCI6MTY4MzM4ODk0MywiZXhwIjoxNjgzMzkyNTQzLCJzdWIiOiIxMiJ9.ZcAWWAP-EduGCWgIc5TYTKwbRlhG3WA7Lh-RI8Gpq4Q",
	"user": {
		"email": "joaosilva@mail.com",
		"confirmPassword": "123456",
		"userName": "João",
		"isCompany": false,
		"id": 12
	}
}

________________________________________________________________________________________________________________

=>PATCH EDITAR USUÁRIO

Rota: https://json-server-projeto-front-end.onrender.com/users/{ID do usuário};

Tipo de rota: 'PATCH' para editar um usuário;

É necessário envio de token de autenticação no formato:
headers: {
            Authorization: `Bearer ${token}`,
          };

Content-Type: application/json;

Body: O corpo de requisição deve contar, ao menos, um dos campos no seguinte formato:
{
     	"email": "joao@mail.com",
    	"password": "123456",
	"confirmPassword": "123456",
     	"userName": "João da Silva"
};

*Apenas o usuário logado pode editar o seu próprio cadastro. Não esquecer de passar o ID na rota e o token do usuário logado no authorization.

Possíveis respostas de erro:
401 Unauthorized - "Missing authorization header": Código token não informado. 
401 Unauthorized - "jwt expired": Código token informado, porém expirado.
401 Unauthorized - "invalid token": Código token informado, porém inválido.

Resposta de sucesso:
{
	"email": "admin@mail.com",
	"password": "$2a$10$yXMwQguEio7i9sqfxyPYM.6n7iAzS4Hnddg6/H91.zRYMN4xdO2Lm",
	"confirmPassword": "123456",
	"userName": "admin",
	"isCompany": false,
	"id": 1
}

________________________________________________________________________________________________________________

=>DELETE EXCLUIR USUÁRIO

Rota: https://json-server-projeto-front-end.onrender.com/users/{ID do usuário};

Tipo de rota: 'DELETE' para excluir um usuário;

É necessário envio de token de autenticação no formato:
headers: {
            Authorization: `Bearer ${token}`,
          };

Content-Type: application/json;

Body: O corpo de requisição NÃO é necessário;

*Apenas o usuário logado pode excluir o seu próprio cadastro. Não esquecer de passar o ID na rota e o token do usuário logado no authorization.

Possíveis respostas de erro:
401 Unauthorized - "Missing authorization header": Código token não informado. 
401 Unauthorized - "jwt expired": Código token informado, porém expirado.
401 Unauthorized - "invalid token": Código token informado, porém inválido.

Resposta de sucesso:
{}
________________________________________________________________________________________________________________

=>GET (Query Parameters) BUSCAR TODAS AS EMPRESAS

Rota:  https://json-server-projeto-front-end.onrender.com/users?isCompany=true;

Tipo de rota: 'GET' para buscar todas as empresas cadastradas;

É necessário envio de token de autenticação no formato:
headers: {
            Authorization: `Bearer ${token}`,
          };

Content-Type: application/json;

Body: O corpo de requisição NÃO é necessário;

*Apenas o usuário logado pode realizar buscas.Não esquecer de passar o token do usuário logado no authorization.

Possíveis respostas de erro:
401 Unauthorized - "Missing authorization header": Código token não informado. 
401 Unauthorized - "jwt expired": Código token informado, porém expirado.
401 Unauthorized - "invalid token": Código token informado, porém inválido.

Resposta de sucesso:
[
	{
		"email": "lanche@mail.com",
		"password": "$2a$10$M1W4mrXrzT5P0o.CESeF7.k3g6sC7hHRP7S/GPhe2jMzrXmLkFTIa",
		"userName": "Kilanche",
		"confirmPassword": "123456",
		"foodCategory": "lanches",
		"isCompany": true,
		"id": 2
	},
	{
		"email": "skina@mail.com",
		"password": "$2a$10$QzMsphnsHuHbW1h0.jCn5e9fQ1sK4m/BVtcTSf8DINBcDPEDSuK.K",
		"userName": "Skina Lanches",
		"confirmPassword": "123456",
		"foodCategory": "lanches",
		"isCompany": true,
		"id": 3
	}
]

________________________________________________________________________________________________________________

=>GET BUSAR EMPRESA PELO ID

Rota: https://json-server-projeto-front-end.onrender.com/users/{ID da empresa};

Tipo de rota: 'GET' para buscar uma empresa pelo id;

É necessário envio de token de autenticação no formato:
headers: {
            Authorization: `Bearer ${token}`,
          };


Content-Type: application/json;

Body: O corpo de requisição NÃO é necessário;

*Apenas usuários logados podem visualizar as empresas. Não esquecer de passar o ID da empresa na rota e o token do usuário logado no authorization.

Possíveis respostas de erro:
401 Unauthorized - "Missing authorization header": Código token não informado. 
401 Unauthorized - "jwt expired": Código token informado, porém expirado.
401 Unauthorized - "invalid token": Código token informado, porém inválido.
401 Unauthorized - "Bad control character in string literal in JSON at position 'X'": Código token informado, porém inválido.

Resposta de sucesso:
{
	"email": "lanche@mail.com",
	"password": "$2a$10$M1W4mrXrzT5P0o.CESeF7.k3g6sC7hHRP7S/GPhe2jMzrXmLkFTIa",
	"userName": "Kilanche",
	"confirmPassword": "123456",
	"foodCategory": "lanches",
	"isCompany": true,
	"id": 2
}

________________________________________________________________________________________________________________

=>GET (Query Parameters) FILTRAR EMPRESA POR SETOR ALIMENTÍCIO (foodCategory)

Rota:  https://json-server-projeto-front-end.onrender.com/users?foodCategory={informar a categoria desejada};

Tipo de rota: 'GET' para filtrar por categorias;

É necessário envio de token de autenticação no formato:
headers: {
            Authorization: `Bearer ${token}`,
          };

Content-Type: application/json;

Body: O corpo de requisição NÃO é necessário;

*Apenas o usuário logado pode realizar buscas. Não esquecer de passar a categoria na rota e o token do usuário logado no authorization;

*Rol de opções para o foodCategory: padaria, lanches, cafeteria, restaurante, bares e mercado.

Possíveis respostas de erro:
401 Unauthorized - "Missing authorization header": Código token não informado. 
401 Unauthorized - "jwt expired": Código token informado, porém expirado.
401 Unauthorized - "invalid token": Código token informado, porém inválido.
401 Unauthorized - "Bad control character in string literal in JSON at position 'X'": Código token informado, porém inválido.

Resposta de sucesso:
[
	{
		"email": "madalosso@mail.com",
		"password": "$2a$10$LZLOj29rKcSOoo4gGtsSNOPU3i.zg79DoHE/.U8HoQwzJ1UybX1py",
		"userName": "Madalosso",
		"confirmPassword": "123456",
		"foodCategory": "restaurante",
		"isCompany": true,
		"id": 6
	},
	{
		"email": "noma@mail.com",
		"password": "$2a$10$8zAvU3khnqAcQCG9/8I2vuuNvfNy/WqeS5g/REBMZ3dAhUFLr22gi",
		"userName": "Noma",
		"confirmPassword": "123456",
		"foodCategory": "restaurante",
		"isCompany": true,
		"id": 7
	}
]


________________________________________________________________________________________________________________

=>POST LOGIN EMPRESA

Rota: https://json-server-projeto-front-end.onrender.com/signin;

Tipo de rota: 'POST' para realizar o login de uma empresa;

Não é necessário envio de token de autenticação;

Content-Type: application/json;

Body: O corpo de requisição deve ser exatamente no seguinte formato:
{
	"email": "deliciasdaterra@mail.com",
	"password": "123456"
}.

Possíveis respostas de erro:
400 Bad Request - "Cannot find user": Usuário não encontrado.
400 Bad Request - "Email format is invalid": E-mail infromado inválido.
400 Bad Request - "Password is too short": Senha infromada muito curta.
400 Bad Request - "Incorrect password": Senha infromada é incorreta.
400 Bad Request - "Email and password are required": Usuário e/ou email não informado. 

Resposta de sucesso:
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxhbmNoZUBtYWlsLmNvbSIsImlhdCI6MTY4MzM4OTE5MywiZXhwIjoxNjgzMzkyNzkzLCJzdWIiOiIyIn0.LfWt0Y-2id_Hw5lEn8axsrij8m0WGp2iMo6OMPQwt0c",
	"user": {
		"email": "lanche@mail.com",
		"userName": "Kilanche",
		"confirmPassword": "123456",
		"foodCategory": "lanches",
		"isCompany": true,
		"id": 2
	}
}
________________________________________________________________________________________________________________

=>POST CRIAR EMPRESA

Rota: https://json-server-projeto-front-end.onrender.com/signup;

Tipo de rota: 'POST' para criar uma nova empresa;

Não é necessário envio de token de autenticação;

Content-Type: application/json;

Body: O corpo de requisição deve ser exatamente no seguinte formato:
{
	"userName": "No Céu tem pão?",
 	"email": "pao@mail.com",
	"password": "123456",
 	"confirmPassword": "123456",
	"foodCategory": "bar",
 	"isCompany" : true
};

*O campo “id” é preenchido automaticamente pela API;

* a chave "isCompany" deve, obrigatóriamente, estar com o valor 'true';

*Rol de opções para o foodCategory: padaria, lanches, cafeteria, restaurante, bares e mercado.

Possíveis respostas de erro:
400 Bad Request - "Email format is invalid": E-mail informado inválido.
400 Bad Request - "Password is too short": Senha infromada muito curta.
400 Bad Request - "Email already exists": E-mail informado já existente.
400 Bad Request - "Email and password are required": Usuário e/ou email não informado. 

Resposta de sucesso:
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsZGlAbWFpbC5jb20iLCJpYXQiOjE2ODI3MDM5MzEsImV4cCI6MTY4MjcwNzUzMSwic3ViIjoiMTAifQ.a7smdx9ujitt5ZUT6qEuvjYVG7YCN164211Mu8PDmCk",
	"user": {
		"email": "aldi@mail.com",
		"userName": "Aldi",
		"confirmPassword": "123456",
		"foodCategory": "mercado",
		"isCompany": true,
		"id": 10
	}
}

________________________________________________________________________________________________________________

=>PATCH EDITAR EMPRESA

Rota: https://json-server-projeto-front-end.onrender.com/users/{ID da empresa};

Tipo de rota: 'PATCH' para editar uma empresa;

É necessário envio de token de autenticação no formato:
headers: {
            Authorization: `Bearer ${token}`,
          };

Content-Type: application/json;

Body: O corpo de requisição deve contar, ao menos, um dos campos no seguinte formato:
{
	"userName": "No Céu tem pão?",
	"email": "pao@mail.com",
	"password": "123456",
	"confirmPassword": "123456",
	"foodCategory": "bar"
};

*Rol de opções para o foodCategory: padaria, lanches, cafeteria, restaurante, bares e mercado;

*Apenas a empresa logada pode editar as suas próprias informções. Não esquecer de passar o ID da empresa na rota e o token da empresa logada no authorization.

Possíveis respostas de erro:
401 Unauthorized - "Missing authorization header": Código token não informado. 
401 Unauthorized - "jwt expired": Código token informado, porém expirado.
401 Unauthorized - "invalid token": Código token informado, porém inválido.

Resposta de sucesso:
{
	"email": "cafe@mail.com",
	"password": "$2a$10$3GY8UOTernXrcxlqNH4xb.RpXQDZdjFLKusPJfEQrY/EBxi2o9Ea2",
	"userName": "Gourbon Café",
	"confirmPassword": "123456",
	"foodCategory": "cafe",
	"isCompany": true,
	"id": 8
}

________________________________________________________________________________________________________________

=>DELETE EXCLUIR EMPRESA

Rota: https://json-server-projeto-front-end.onrender.com/users/{ID da empresa};

Tipo de rota: 'DELETE' para excluir uma empresa;

É necessário envio de token de autenticação no formato:
headers: {
            Authorization: `Bearer ${token}`,
          };

Content-Type: application/json;

Body: O corpo de requisição NÃO é necessário;

*Apenas a empresa logada pode excluir seu próprio perfil. Não esquecer de passar o ID da empresa na rota e o token da empresa logada no authorization.

Possíveis respostas de erro:
401 Unauthorized - "Missing authorization header": Código token não informado. 
401 Unauthorized - "jwt expired": Código token informado, porém expirado.
401 Unauthorized - "invalid token": Código token informado, porém inválido.

Resposta de sucesso:
{}

________________________________________________________________________________________________________________

=>GET BUSAR TODOS OS PRODUTOS

Rota: https://json-server-projeto-front-end.onrender.com/products;

Tipo de rota: 'GET' para buscar todos os produtos;

É necessário envio de token de autenticação no formato:
headers: {
            Authorization: `Bearer ${token}`,
          };


Content-Type: application/json;

Body: O corpo de requisição NÃO é necessário;

*Apenas usuários logados podem visualizar todos os produtos. Não esquecer o token do usuário logado no authorization.

Resposta de sucesso:
[
	{
		"title": "Panificação",
		"originalPrice": 50,
		"discount": 20,
		"quantity": 5,
		"userId": 10,
		"company": "Aldi",
		"id": 1
	},
	{
		"title": "Alimentos laticínios",
		"originalPrice": 30,
		"discount": 50,
		"quantity": 3,
		"userId": 10,
		"company": "Aldi",
		"id": 2
	}
]
________________________________________________________________________________________________________________

=>GET BUSAR PRODUTO PELO ID

Rota: https://json-server-projeto-front-end.onrender.com/products/{ID do produto};

Tipo de rota: 'GET' para buscar os produtos pelo id;

É necessário envio de token de autenticação no formato:
headers: {
            Authorization: `Bearer ${token}`,
          };


Content-Type: application/json;

Body: O corpo de requisição NÃO é necessário;

*Apenas usuários logados podem visualizar os produtos. Não esquecer de passar o ID do produto na rota e o token da empresa logada no authorization.

Resposta de sucesso:
{
	"title": "Ovo frito",
	"originalPrice": 50,
	"discount": 50,
	"quantity": 3,
	"userId": 1,
	"id": 1
}
________________________________________________________________________________________________________________

=>GET (Query Parameters) BUSCAR PRODUTOS DAS EMPRESAS COM O MESMO FOODCATEGORY

Rota:  https://json-server-projeto-front-end.onrender.com/users?typeOfCompany={informar a categoria desejada}&_embed=products;

Tipo de rota: 'GET' para buscar todas as empresas cadastradas;

É necessário envio de token de autenticação no formato:
headers: {
            Authorization: `Bearer ${token}`,
          };

Content-Type: application/json;

Body: O corpo de requisição NÃO é necessário;

*Apenas o usuário logado pode realizar buscas. Não esquecer de passar a categoria desejada na rota e o token do usuário logado no authorization.

Possíveis respostas de erro:
401 Unauthorized - "Missing authorization header": Código token não informado. 
401 Unauthorized - "jwt expired": Código token informado, porém expirado.
401 Unauthorized - "invalid token": Código token informado, porém inválido.

Resposta de sucesso:
[
	{
		"email": "rewe@mail.com",
		"password": "$2a$10$SwO7fiObkBnaGNzBUJm8auK2P2m7E9Vvx8sS5iJfUBUym6ZYGa3IC",
		"userName": "Rewe",
		"confirmPassword": "123456",
		"foodCategory": "mercado",
		"isCompany": true,
		"id": 9,
		"products": [
			{
				"title": "Salames diversos",
				"originalPrice": 25,
				"discount": 24,
				"quantity": 4,
				"userId": 9,
				"company": "Rewe",
				"id": 3
			}
		]
	},
	{
		"email": "aldi@mail.com",
		"password": "$2a$10$zKgygns1xugyiiyCJRDtieXUf87tMBubvAYvGMT6eWImwQ1tuqW7S",
		"userName": "Aldi",
		"confirmPassword": "123456",
		"foodCategory": "mercado",
		"isCompany": true,
		"id": 10,
		"products": [
			{
				"title": "Material de limpeza",
				"originalPrice": 50,
				"discount": 20,
				"quantity": 5,
				"userId": 10,
				"company": "Aldi",
				"id": 1
			},
			{
				"title": "Alimentos laticínios",
				"originalPrice": 30,
				"discount": 50,
				"quantity": 3,
				"userId": 10,
				"company": "Aldi",
				"id": 2
			}
		]
	}
]

________________________________________________________________________________________________________________

=>POST CRIAR PRODUTO

Rota: https://json-server-projeto-front-end.onrender.com/products;

Tipo de rota: 'POST' para criar um novo produto;

É necessário envio de token de autenticação no formato:
headers: {
            Authorization: `Bearer ${token}`,
          };

Content-Type: application/json;

Body: O corpo de requisição deve ser exatamente no seguinte formato:
{
      "title": "Pão na chapa",
      "originalPrice": 10,
      "discount": 50,
      "quantity": 7,
      "userId": 2,
      "company": "Nero Café"
    };
    
*Apenas a empresa logada pode criar um novo produto. Não esquecer de passar o token da empresa logada no authorization.

* No campo "userId" deve ser informado o id da empresa que está cadastrando o produto;

*O campo “id” é preenchido automaticamente pela API.

Possíveis respostas de erro:
401 Unauthorized - "Missing authorization header": Código token não informado. 
401 Unauthorized - "jwt expired": Código token informado, porém expirado.
401 Unauthorized - "invalid token": Código token informado, porém inválido.

Resposta de sucesso:
{
	"title": "Batata frita",
	"originalPrice": 10,
	"discount": 50,
	"quantity": 2,
	"userId": 2,
	"company": "Kilanche",
	"id": 17
}
________________________________________________________________________________________________________________

=>PATCH EDITAR PRODUTO

Rota: https://json-server-projeto-front-end.onrender.com/products/{ID do produto};

Tipo de rota: 'PATCH' para editar um produto;

É necessário envio de token de autenticação no formato:
headers: {
            Authorization: `Bearer ${token}`,
          };

Content-Type: application/json;

Body: O corpo de requisição deve contar, ao menos, um dos campos no seguinte formato:
{
	"title": "Pão na chapa",
	"originalPrice": 10,
	"discount": 50,
	"quantity": 7
};

*Apenas a empresa logada pode editar o seu próprio produto. Não esquecer de passar o ID do produto na rota e o token da empresa logada no authorization.

Possíveis respostas de erro:
401 Unauthorized - "Missing authorization header": Código token não informado. 
401 Unauthorized - "jwt expired": Código token informado, porém expirado.
401 Unauthorized - "invalid token": Código token informado, porém inválido.

Resposta de sucesso:
{
	"title": "Ovo frito2",
	"originalPrice": 50,
	"discount": 50,
	"quantity": 3,
	"userId": 1,
	"id": 2
}

________________________________________________________________________________________________________________

=>DELETE EXCLUIR PRODUTO

Rota: https://json-server-projeto-front-end.onrender.com/products/{ID do produto};

Tipo de rota: 'DELETE' para excluir um produto;

É necessário envio de token de autenticação no formato:
headers: {
            Authorization: `Bearer ${token}`,
          };

Content-Type: application/json;

Body: O corpo de requisição NÃO é necessário;

*Apenas a empresa logada pode excluir o seu próprio produto. Não esquecer de passar o ID do produto na rota e o token da empresa logada no authorization.

Possíveis respostas de erro:
401 Unauthorized - "Missing authorization header": Código token não informado. 
401 Unauthorized - "jwt expired": Código token informado, porém expirado.
401 Unauthorized - "invalid token": Código token informado, porém inválido.

Resposta de sucesso:
{}

________________________________________________________________________________________________________________
