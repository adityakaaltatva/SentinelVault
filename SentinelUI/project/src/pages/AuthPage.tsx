import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser, SignIn, SignUp } from '@clerk/clerk-react';
import { Card } from '@/components/ui/card';

export function AuthPage() {
  const [mode, setMode] = useState<'sign-in' | 'sign-up'>('sign-in');
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/dashboard');
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <Card className="w-full max-w-md p-6 rounded-xl shadow-lg bg-white">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            {mode === 'sign-in' ? 'Sign in to SentinelVault' : 'Create your SentinelVault account'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">Secure. Decentralized. Intelligent.</p>
        </div>

        {mode === 'sign-in' ? (
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary: 'bg-black hover:bg-gray-800 text-white font-medium py-2',
                card: 'shadow-none',
              },
            }}
            routing="path"
            path="/auth"
            redirectUrl="/dashboard"
          />
        ) : (
          <SignUp
            appearance={{
              elements: {
                formButtonPrimary: 'bg-black hover:bg-gray-800 text-white font-medium py-2',
                card: 'shadow-none',
              },
            }}
            routing="path"
            path="/auth"
            redirectUrl="/dashboard"
          />
        )}

        <div className="mt-6 text-sm text-center text-gray-600">
          {mode === 'sign-in' ? (
            <>
              Don’t have an account?{' '}
              <button
                onClick={() => setMode('sign-up')}
                className="text-blue-600 hover:underline font-medium"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                onClick={() => setMode('sign-in')}
                className="text-blue-600 hover:underline font-medium"
              >
                Sign in
              </button>
            </>
          )}
        </div>
      </Card>
    </div>
  );
}
