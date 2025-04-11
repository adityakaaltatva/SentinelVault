import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="border-b bg-white text-gray-900 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Shield className="h-6 w-6 text-blue-600" />
          <span className="font-semibold text-xl tracking-tight">
            SentinelVault
          </span>
        </Link>

        <div className="flex items-center space-x-3">
          <SignedIn>
            <Link to="/dashboard">
              <Button variant="default">Dashboard</Button>
            </Link>
            <Link to="/upload">
              <Button variant="default">Upload</Button>
            </Link>
            <Link to="/agents">
              <Button variant="default">Agents</Button>
            </Link>
            <Link to="/access">
              <Button variant="default">Access</Button>
            </Link>
            <Link to="/settings">
              <Button variant="default">Settings</Button>
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          <SignedOut>
            <Link to="/auth">
              <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white">
                Login
              </Button>
            </Link>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}
