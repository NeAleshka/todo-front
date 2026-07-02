import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import type { RouterContext } from '../types';

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  return <Outlet />;
}
