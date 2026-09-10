<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:06B6D4,100:0F172A&height=180&section=header&text=API%20Restful&fontSize=36&fontColor=ffffff&animation=fadeIn&fontAlignY=35&desc=Brayan%20R.%20Silveira&descAlignY=55&descSize=16" width="100%"/>

### Express · MongoDB · CRUD de produtos

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)

<br/>

[![Portfolio](https://img.shields.io/badge/Portfolio-10b981?style=for-the-badge&logo=googlechrome&logoColor=white)](https://brayansilver.github.io)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/BrayanSilver)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/brayan-r-silveira-b80636150/)
[![Email](https://img.shields.io/badge/Email-000000?style=for-the-badge&logo=gmail&logoColor=white)](mailto:brayansilver.teen@gmail.com)
![Last Commit](https://img.shields.io/github/last-commit/BrayanSilver/API_Restful?style=for-the-badge&color=06B6D4&labelColor=000000)
![Stars](https://img.shields.io/github/stars/BrayanSilver/API_Restful?style=for-the-badge&color=06B6D4&labelColor=000000)
![Top Language](https://img.shields.io/github/languages/top/BrayanSilver/API_Restful?style=for-the-badge&labelColor=000000)

</div>

---

## 📌 Sobre

API REST introdutória com **Express + Mongoose** para CRUD de produtos: rotas, controllers, models e conexão MongoDB.

## 📊 Status cards

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=BrayanSilver&repo=API_Restful&theme=tokyonight&hide_border=true" height="140" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=BrayanSilver&layout=compact&theme=tokyonight&hide_border=true&repos=API_Restful" height="140" />
</div>

## 🔄 Arquitetura

```mermaid
flowchart LR
  Client([Cliente HTTP]) --> Express[Express Server]
  Express --> Routes[routes.js]
  Routes --> Ctrl[products controller]
  Ctrl --> Model[Mongoose Model]
  Model --> Mongo[(MongoDB)]
```

## ▶️ Como rodar

```bash
npm install
# configure MONGODB_URI no ambiente / db.js
npm run dev
```

API tipicamente em `http://localhost:3000`

## 📁 Estrutura

```
API_Restful/
├── src/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── database/
└── package.json
```

> 💡 Dica: grave um GIF curto do Insomnia/Postman batendo nos endpoints e salve como `demo.gif` na raiz para enriquecer este README.

---

<div align="center">

**Brayan R. Silveira** · Full Stack Developer

[Portfolio](https://brayansilver.github.io) · [GitHub](https://github.com/BrayanSilver) · [LinkedIn](https://www.linkedin.com/in/brayan-r-silveira-b80636150/)

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0F172A,100:06B6D4&height=100&section=footer" width="100%"/>

</div>
