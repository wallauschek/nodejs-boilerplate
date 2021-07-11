# Cadastro de carro
**RF**
- Deve ser possível cadastrar um novo carro.

**RN**
- Não deve ser possível cadastrar um carro com um a placa existente.
- O carro deve ser cadastrado disponível por padrão.
- *Cadastro permitido somente por usuário Admin.

# Listagem de carros
**RF**
- Deve ser possível listar todos os carros disponíveis
- Deve ser possível listar todos os carros disponíveis pela categoria.
- Deve ser possível listar todos os carros disponíveis pela marca.
- Deve ser possível listar todos os carros disponíveis pela nome.

**RN**
- O usuário não precisa estar logado no sistema.

# Cadastro de Especificação no carro
**RF**
- Deve ser possível cadastrar uma especificação para um carro.

**RN**
- Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- Não deve ser possível cadastrar a mesma especificação para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário administrador

# Cadastro de imagens do carro

**RF**
- deve ser possível cadastrar imagens do carro.
- Deve ser possível listar todos os carros.

**RNF**
- Utilizar o multer para o upload dos arquivos.

**RN**
- O usuário deve poder cadastrar mais de 1 imagem para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário administrador

# Aluguel de carro

**RF**
- deve ser possível cadastrar um aluguel.

**RN**
- O aluguel deve ter duração mínima de 24 horas.
- Não deva ser possível cadastrar um novo aluguel, caso já exista um aberto para o mesmo usuário.
- Não deva ser possível cadastrar um novo aluguel, caso já exista um aberto para o mesmo carro.
