# 📞 Projeto de Chamados de Suporte – Frontend

Este repositório contém o **frontend** de um sistema de **Chamados de Suporte**, desenvolvido em **React.js**, com foco em organização, autenticação de usuários e gerenciamento de categorias e chamados.

O projeto foi pensado para fins **acadêmicos e de portfólio**, simulando um sistema real utilizado em empresas para controle de atendimentos e solicitações técnicas.

---

## 🚀 Tecnologias Utilizadas

* **React.js**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**
* **Axios** (requisições HTTP)
* **React Router DOM** (navegação entre páginas)

---

## 📂 Estrutura do Projeto

```bash
Projeto-Chamados-de-suporte-Frontend
├── public/
│   ├── index.html
│   └── assets e ícones
│
├── src/
│   ├── components/
│   │   └── CookieBanner.jsx
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── CadastroUsuario.jsx
│   │   ├── Usuarios.jsx
│   │   ├── EditarUsuario.jsx
│   │   ├── Categorias.jsx
│   │   └── CategoriaForm.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── index.js
│   └── estilos (CSS)
│
├── package.json
└── README.md
```

---

## 🧩 Funcionalidades

* 🔐 **Login de usuários**
* 👤 **Cadastro, listagem e edição de usuários**
* 🗂️ **Gerenciamento de categorias de chamados**
* 🍪 **Banner de consentimento de cookies (LGPD)**
* 🔗 Integração com **API backend** via Axios

---

## 🌐 Integração com Backend

O frontend se comunica com o backend através do arquivo:

```bash
src/services/api.js
```

Nesse arquivo é configurada a **URL base da API**, além de possíveis headers (como autenticação).

Exemplo:

```js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true
});

export default api;
```

---

## ▶️ Como Executar o Projeto

### Pré-requisitos

* Node.js instalado
* NPM ou Yarn

### Passos

```bash
# Instale as dependências
npm install

# Execute o projeto
npm start
```

O sistema estará disponível em:

```
http://localhost:3000
```

---

## 🍪 Cookies e LGPD

O sistema conta com um **banner de cookies**, permitindo que o usuário aceite o uso, armazenando o consentimento no navegador, seguindo boas práticas da **LGPD**.

---

## 🎯 Objetivo do Projeto

* Praticar desenvolvimento frontend com React
* Simular um sistema real de chamados
* Aplicar organização de pastas (pages, components, services)
* Demonstrar integração frontend + backend

---

## 📌 Observações

* Este projeto representa **apenas o frontend**
* É necessário que o **backend esteja em execução** para funcionamento completo
* Ideal para demonstração em **GitHub e portfólio profissional**

---

## 👨‍💻 Autor

Desenvolvido por **Felipe Fallk**
Com base no projeto de **Edinilson Vida**

📎 Projeto criado para fins educacionais e demonstração técnica.
