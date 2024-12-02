"use client";

import { FaLocationArrow, FaCalendarPlus } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import CanvasContainer from "./CanvasContainer";

// Helper function to format date for Google Calendar
const formatDateForGoogleCalendar = (date: any) => {
  const formattedDate = new Date(date).toISOString().replace(/-|:|\.\d+/g, "");
  return formattedDate;
};

const DatesEvents = () => {
  return (
    <div className="py-20" id="eventos">
      <CanvasContainer />
      <h1 className="heading">
        Siguientes <span className="text-purple">Eventos</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => {
          const startDate = formatDateForGoogleCalendar(item.startDate);
          const endDate = formatDateForGoogleCalendar(item.endDate);
          const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
            item.title
          )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
            item.des
          )}&location=${encodeURIComponent(item.location)}`;

          return (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
              key={item.id}
            >
              <PinContainer title={item.location} href={item.instagram}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="z-10 w-full h-full bottom-0 lg:border-[6px] md:border-[4px] border-[2px]"
                    style={{ borderColor: "#CBACF9" }}
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>
                <div className="flex justify-center items-center space-x-4">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center lg:text-xl md:text-xs text-sm text-purple"
                  >
                    Comprar
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </a>
                  <a
                    href={googleCalendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center lg:text-xl md:text-xs text-sm text-purple"
                  >
                    Añadir al Calendario
                    <FaCalendarPlus className="ms-3" color="#CBACF9" />
                  </a>
                </div>
              </PinContainer>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DatesEvents;
