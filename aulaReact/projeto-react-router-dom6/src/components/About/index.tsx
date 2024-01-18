import { useLocation } from "react-router-dom";

export const About = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { state } = useLocation();
  return (
    <div>
      <h1>About</h1>
      <p>Esse é o estado recebido: {state as string}</p>
    </div>
  );
};
