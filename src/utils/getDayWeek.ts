const getDayWeek = (day: number) => {
  const days: string[] = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  return days[day];
};

export default getDayWeek;
