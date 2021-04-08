import { FunctionComponent } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { AppRouter } from './router';

const App: FunctionComponent = () => (
    <>
        <CssBaseline />
        <AppRouter />
    </>
);

export default App;
