import {
  Header,
  Buttons,
  ButtonRegister,
  ButtonLogin,
  Container,
} from "./styles";

import { Link } from "react-router-dom";

import Scissors from "../../images/bi_scissors.svg";
import Line from "../../images/line.svg";
import ArrowTop from "../../images/arrow-top.svg";
import ArrowRight from "../../images/arrow-right.svg";

export function Welcome() {
  return (
    <Container>
      <Header>
        <div className="headline">
          <h1>
            <span>O melhor</span> <br /> corte é na SR
          </h1>
          <img src={Scissors} alt="" />
        </div>

        <div className="subtitle">
          <img src={Line} alt="" />

          <p>Agende seu horário e tenha uma experiência transformadora</p>
        </div>
      </Header>

      <Buttons>
        <Link to="/register">
          <ButtonRegister>
            <img src={ArrowTop} alt="" />
            Criar <br /> cadastro
          </ButtonRegister>
        </Link>

        <Link to="/login">
          <ButtonLogin>
            <img src={ArrowRight} alt="" />
            Fazer <br /> login
          </ButtonLogin>
        </Link>
      </Buttons>
    </Container>
  );
}
