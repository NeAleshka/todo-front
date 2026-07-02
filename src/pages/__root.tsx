import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import type { RouterContext } from '../types';
import { checkAuth } from '../services/authService.ts';

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
  beforeLoad: async ({ context }) => {
    const { isAuthenticated } = await checkAuth();
    context.isAuthenticated = isAuthenticated;
  },
});

function RootComponent() {
  return <Outlet />;
}
