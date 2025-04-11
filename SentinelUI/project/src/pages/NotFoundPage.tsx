import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center px-4">
      <div className="text-center max-w-md space-y-6">
        <div>
          <h1 className="text-8xl font-extrabold text-blue-600 tracking-tight">404</h1>
          <p className="mt-2 text-2xl font-semibold text-gray-800">Oops! Page not found</p>
          <p className="text-sm text-gray-500 mt-2">
            The page you are looking for doesn’t exist or has been moved.
          </p>
        </div>

        <div className="flex justify-center">
          <Button asChild>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Go to Home
            </Link>
          </Button>
        </div>

        <div className="text-xs text-gray-400">
          If you think this is a bug, let the devs know — preferably with snacks 🍕.
        </div>
      </div>
    </div>
  );
}
