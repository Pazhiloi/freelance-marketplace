export const writeClassForStatus = (status: string) => {
if (status === "Прийом ставок" || status === "Виконується") {
  return "color-orange";
} else if (status === "Завершено") {
  return "color-green";
} else if (status === "Закритий") {
  return "color-red";
}
}