import { createRoot } from 'react-dom/client';

import { AppView } from './views/app.view';

createRoot(document.getElementById('admin-app') as HTMLElement).render(<AppView />);