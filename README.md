
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
      
  </a>
  
   <h1 align="center">BARBERSTIME</h1>

  <p align="center">
   Sistema para agendamentos de horários e serviços para uma barbearia
  </p>
</p>

<!-- ABOUT THE PROJECT -->
# 📚 Sobre o Projeto
Esse é um projeto que fiz para um trabalho de escola, que é um sistema para agendar horários e serviços de uma barbearia, então o usuário pode escolher o barbeiro, o serviço e o horário que ele deseja.

# 💻 O que tem no projeto?

## Autenticação 
* Primeiro tem uma autenticação, no qual o usuário pode se cadastrar na plataforma, colocando seu Nome, Email e senha. (Se o usuário cadastrar um nome ou email que já exista, o cadastro não será permitido)
* O usuário também pode logar com sua conta colocando seu email e senha (Caso o email ou senha estiver errado, não é permitido o usuário se logar)
* O Backend dessa autenticação foi feita com NodeJS e MongoDB, e gerei uma chave JWT para quem se cadastra.

![barberstime-1](https://user-images.githubusercontent.com/71296002/163698317-e64111f6-b424-472f-aea0-4c38922773ad.gif) 

![barberstime-6](https://user-images.githubusercontent.com/71296002/163700778-5afb1c62-42c8-49c8-9f81-b59a118029f3.gif)

## Selecionando barbeiro, horário e serviço
* Na home está listando os barbeiros.
* Quando o barbeiro é selecionado aparece todos os serviços que ele presta.
* E depois os dias e os horários que aquele barbeiro tem disponível. (O cadastro do barbeiro e sas informações foram feitos através de uma FAKE API manualmente)
* No final o usuário finaliza o agendamento e ele é redirecionado automaticamente para a rota "/myappointments", onde vai ter seus agendamentos marcados (Só aparecerá os agendamentos específico para cada usuário).

![barberstime-2](https://user-images.githubusercontent.com/71296002/163700937-03cd9c56-bf19-4d64-8f43-a4f436dbf9ed.gif)

* Cliente pode cancelar seu agendamento se quiser.

![barberstime-7](https://user-images.githubusercontent.com/71296002/163701333-4e2e5edd-0485-43ca-969b-a2bb2bee6bf2.gif)

## Logout 

* Cliente pode fazer o logout da sua conta

![barberstime-8](https://user-images.githubusercontent.com/71296002/163701386-0ba39eea-26a3-4bf6-b91d-69e97885bb7f.gif)

## Administração da barbearia
Essa parte do projeto já uma aplicação separada da outra, focado para a Administração da barbearia. A outra era focado para o cliente.
* Aqui aparecerá todos os agendamentos marcados pelos clientes, e todas informações daquele determinado agendamento (Cliente, serviço, horário, barbeiro).

![barberstime-4](https://user-images.githubusercontent.com/71296002/163701710-9055c39f-9211-4dc3-8851-fcc1bd1caeac.gif)

## Responsividade
O projeto também está responsivo! A plataforma é adaptado para todos os dispositivos.

### ⚠️ Mais informações sobre o projeto...
* O projeto foi construído com ReactJS e integrado com Typescript. 
* A autenticação foi feita com NodeJS e MongoDB.
* O restante da base dados foi feito com <a href="https://jsonplaceholder.typicode.com" >Json Placeholder</a>, que é uma Fake Api, no qual conseguimos guardar informações simulando uma Api. (Os barbeiros e suas informações como serviços e horários foram escritos manualmente). Quando agendamos um serviço essas informações também são guardadas na Fake Api.

