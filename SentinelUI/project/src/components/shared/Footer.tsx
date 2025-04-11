import { Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t py-12 mt-24 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">SentinelVault</h3>
            <p className="text-sm text-gray-500">
              AI-Secured. zk-Verified. Decentralized Data Vault.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
              <li><Link to="/upload" className="hover:underline">Upload</Link></li>
              <li><Link to="/agents" className="hover:underline">Agents</Link></li>
              <li><Link to="/access" className="hover:underline">Access Control</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Documentation</a></li>
              <li><a href="#" className="hover:underline">API Reference</a></li>
              <li><a href="#" className="hover:underline">Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-500">
          <p>
            Built with <span className="text-red-500">❤️</span> by{' '}
            <a
              href="https://terminal-portfolio-roan.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline text-gray-800"
            >
              Aditya Pandey
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
