type AppProps = {
  name: string;
  value?: number;
};

export const App: React.FC<AppProps> = ({ name, value = 454 }) => {
  return (
    <h1>
      {name}, {value}
    </h1>
  );
};
