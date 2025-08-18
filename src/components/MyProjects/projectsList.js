import { languages } from "eslint-plugin-prettier";
import habitflowImg from "../../assets/projectsImgs/habitflow.png";
import shapeviewImg from "../../assets/projectsImgs/shapeview.png";

export const projects = [
  {
    projectId: "habitflow",
    name: "Habitflow",
    img: habitflowImg,
    link: "https://habitflow-phi.vercel.app",
    description:
      "Aplicação que auxilia a moldar novos hábitos, com um gráfico de gastos desnecessários, dinheiro poupado e tarefas diárias com histórico dos últimos 7 dias.",
    languages: ["React.js", "JavaScript", "Tailwind CSS"],
    month: "Junho",
    year: 2025,
  },
  {
    projectId: "shapeview",
    name: "Shapeview",
    img: shapeviewImg,
    link: "https://shapeview.vercel.app",
    description:
      "O ShapeView é um site para pessoas que frequentam academia e possuem dificuldades com certos exercícios. Ele auxilia com o passo a passo de cada exercício que desejar, contando com vídeos explicativos (com os devidos créditos)!",
    languages: ["Next.js", "TypeScript", "Tailwind CSS"],
    month: "Agosto",
    year: 2025,
  },
];
