import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LayoutDashboard } from 'lucide-react';

// Inside the component return block
<div className="flex justify-between items-center mb-6">
  <div>
    <h1 className="text-3xl font-bold">Access Control</h1>
    <p className="text-muted-foreground mt-1">
      Grant, manage, and view access control for sensitive files or folders.
    </p>
  </div>

  <Button variant="outline" asChild>
    <Link to="/access/visualizer">
      <LayoutDashboard className="mr-2 h-4 w-4" />
      Visualize Access
    </Link>
  </Button>
</div>

type AccessEntry = {
  id: number;
  recipient: string;
  role: 'read' | 'write' | 'admin';
  method: 'wallet' | 'email';
  grantedAt: string;
};

export function AccessPage() {
  const [accessList, setAccessList] = useState<AccessEntry[]>([]);
  const [recipient, setRecipient] = useState('');
  const [role, setRole] = useState<'read' | 'write' | 'admin'>('read');
  const [method, setMethod] = useState<'wallet' | 'email'>('wallet');

  const handleGrantAccess = () => {
    if (!recipient) return;

    const newEntry: AccessEntry = {
      id: accessList.length + 1,
      recipient,
      role,
      method,
      grantedAt: new Date().toLocaleString(),
    };

    // TODO: Call backend API (or smart contract) to grant access
    setAccessList([newEntry, ...accessList]);
    setRecipient('');
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-4">Access Control</h1>
      <p className="text-muted-foreground mb-6">
        Grant, manage, and view access control for sensitive files or folders.
      </p>

      <Card className="p-6 mb-8 space-y-4 max-w-2xl">
        <h2 className="text-lg font-semibold">Grant Access</h2>

        <div className="space-y-2">
          <Label htmlFor="recipient">Recipient (Wallet Address or Email)</Label>
          <Input
            id="recipient"
            placeholder={method === 'wallet' ? '0xABC...' : 'user@example.com'}
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
        </div>

        <div className="flex space-x-4">
          <div className="space-y-2">
            <Label>Role</Label>
            <select
              className="border rounded-md px-3 py-2 text-sm"
              value={role}
              onChange={(e) => setRole(e.target.value as 'read' | 'write' | 'admin')}
            >
              <option value="read">Read</option>
              <option value="write">Write</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label>Method</Label>
            <select
              className="border rounded-md px-3 py-2 text-sm"
              value={method}
              onChange={(e) => setMethod(e.target.value as 'wallet' | 'email')}
            >
              <option value="wallet">Wallet</option>
              <option value="email">Email</option>
            </select>
          </div>
        </div>

        <Button onClick={handleGrantAccess} className="mt-4">
          Grant Access
        </Button>
      </Card>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Active Access Grants</h2>

        {accessList.length === 0 ? (
          <p className="text-sm text-muted-foreground">No access granted yet.</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Recipient</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Granted At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {accessList.map((entry) => (
                <TableRow key={entry.id}>
                  <TableCell>{entry.recipient}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{entry.role}</Badge>
                  </TableCell>
                  <TableCell>{entry.method}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{entry.grantedAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Card>
    </div>
  );
}
