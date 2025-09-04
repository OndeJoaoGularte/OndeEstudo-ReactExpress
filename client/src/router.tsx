import {
  createRouter,
  createRoute,
  createRootRoute,
  Outlet,
} from '@tanstack/react-router';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { SubjectPage } from './pages/SubjectPage';

const rootRoute = createRootRoute({
  component: () => (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const subjectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/materias/$subjectId',
  component: SubjectPage,
});

const routeTree = rootRoute.addChildren([indexRoute, subjectRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}