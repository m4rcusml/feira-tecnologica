import { Link, useRouteError } from 'react-router-dom';

export function ErrorPage() {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <h1>Ops!</h1>
      <p>Sentimos muito, um erro inesperado ocorreu.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to='/' className='header-button' style={{ width: 280 }}>
        Voltar para a página inicial
      </Link>
    </div>
  );
}