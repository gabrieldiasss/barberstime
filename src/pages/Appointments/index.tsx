import { BottomMenu } from "../../components/BottomMenu";

import {
  Container,
  CardAppointment,
  CardService,
  CardSchedules,
  Loading,
} from "./styles";

import { useAppointment } from "../../Contexts/useAppointments";
import { useEffect, useState } from "react";
import { BarbelModalCancelSchedule } from "../../components/BarbelModalCancelSchedule";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Navbar } from "../../components/Navbar";
import { BarberAppointment } from "../../Interfaces";

export function Appointments() {
  const { appointments, setAppointments } = useAppointment();

  const accessToken = localStorage.getItem("accessToken");

  const [modalCancelIsOpen, setModalCancel] = useState(false);

  const [selectedCancel, setSelectedCancel] = useState(
    {} as BarberAppointment
  );

  const [loadingAppointments, setLoadingAppointments] = useState(false);

  function handleOpenModal(appointmentInfos: BarberAppointment) {
    setModalCancel(true);
    setSelectedCancel(appointmentInfos);
  }

  function handleCloseModal() {
    setModalCancel(false);
  }

  /* console.log(appointments) */

  useEffect(() => {
    let id = localStorage.getItem("infoUserId");

    axios
      .get(`https://api-braga.herokuapp.com/api/appointments`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setAppointments(response.data);
        console.log(response.data);
        setLoadingAppointments(true);
      })
      .catch((err) => {
        console.log(err);
        setLoadingAppointments(true);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleCancelSchedule(DeleteAppointmentById: number) {
    await axios.delete(
      `https://api-braga.herokuapp.com/api/appointments/delete/${DeleteAppointmentById}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    setAppointments(
      appointments.filter((schedule) => schedule.id !== DeleteAppointmentById)
    );

    setModalCancel(false);
    toast.success("O agendamento foi cancelado.");
  }

  if (!loadingAppointments) {
    return (
      <Loading>
        <div className="loadingio-spinner-spin-q9009gkv1x">
          <div className="ldio-6mzwot4130t">
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </Loading>
    );
  }

  return (
    <>
      <Navbar />

      <ToastContainer autoClose={3000} />

      <Container>
        <h1>Meus agendamentos</h1>

        {appointments.length > 0 && appointments.map((info) => (
          <CardAppointment key={info.id}>
            <header>
              <img src={info.avatar_url} alt="" />
              <h2>{info.name}</h2>
            </header>

            <CardService>
              <h3>{info.name}</h3>

              <h3>
                {new Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "BRL",
                }).format(info.price_service)}
              </h3>
            </CardService>

            <CardSchedules>
              <div>
                {info.selectedDay}/{info.selectedMonth}/{info.selectedYear}
              </div>

              <div>{info.selectedHour}</div>
            </CardSchedules>

            <button onClick={() => handleOpenModal(info)}>
              Cancelar agendamento
            </button>

            <BarbelModalCancelSchedule
              isOpen={modalCancelIsOpen}
              onRequestClose={handleCloseModal}
              handleCancelSchedule={handleCancelSchedule}
              selectedCancel={selectedCancel}
            />
          </CardAppointment>
        ))}

        <BottomMenu />
      </Container>
    </>
  );
}
