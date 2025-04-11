import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/components/layouts/RootLayout';
import { ProtectedRoute } from '@/components/shared/ProtectedRoute';

import { LandingPage } from '@/pages/LandingPage';
import { AuthPage } from '@/pages/AuthPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { UploadPage } from '@/pages/UploadPage';
import { AgentsPage } from '@/pages/AgentsPage';
import { AccessPage } from '@/pages/AccessPage';
import { SettingsPage } from '@/pages/SettingsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { AccessVisualizerPage } from '@/pages/AccessVisualizerPage'; // ✅ ✅ NEW

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'auth',
        element: <AuthPage />,
      },
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'upload',
        element: (
          <ProtectedRoute>
            <UploadPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'agents',
        element: (
          <ProtectedRoute>
            <AgentsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'access',
        element: (
          <ProtectedRoute>
            <AccessPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'access/visualizer',
        element: (
          <ProtectedRoute>
            <AccessVisualizerPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'settings',
        element: (
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
