import { HashRouter } from 'react-router-dom';
import { RoutesService } from '../utils/routes/routes.service';
import { appRoutes } from './app.routes';

const App = () => {
  return (
    <div className="min-h-screen">
      <HashRouter>{RoutesService.renderRoutes(appRoutes)}</HashRouter>
    </div>
  );
};

export default App;