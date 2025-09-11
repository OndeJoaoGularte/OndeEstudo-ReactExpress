import { createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { SubjectPage } from './pages/SubjectPage';
import { GradePage } from './pages/GradePage';
import { UnitPage } from './pages/UnitPage';

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

const gradeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/materias/$subjectId/$gradeId',
  component: GradePage,
});

const unitRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/materias/$subjectId/$gradeId/$unitId',
  component: UnitPage,
});

const routeTree = rootRoute.addChildren([indexRoute, subjectRoute, gradeRoute, unitRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}