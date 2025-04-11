import  { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Terminal, CheckCircle2, AlertCircle, Clock } from 'lucide-react';


type AgentLog = {
  id: number;
  task: string;
  status: 'success' | 'failed' | 'pending';
  description: string;
  timestamp: string;
};

export function AgentsPage() {
  const [logs, setLogs] = useState<AgentLog[]>([]);

  // TODO: Replace with real backend API
  useEffect(() => {
    const dummyLogs: AgentLog[] = [
      {
        id: 1,
        task: 'Summarize Document',
        status: 'success',
        description: 'AI agent summarized file: quarterly_report.pdf',
        timestamp: '2 hours ago',
      },
      {
        id: 2,
        task: 'Tag Classification',
        status: 'failed',
        description: 'Tagging failed for contract_file.docx',
        timestamp: '4 hours ago',
      },
      {
        id: 3,
        task: 'Extract Keywords',
        status: 'pending',
        description: 'Processing marketing_slide_deck.pptx',
        timestamp: 'Just now',
      },
    ];
    setLogs(dummyLogs);
  }, []);

  const getStatusBadge = (status: AgentLog['status']) => {
    switch (status) {
      case 'success':
        return <Badge variant="default"><CheckCircle2 className="h-4 w-4 mr-1" /> Success</Badge>;
      case 'failed':
        return <Badge variant="destructive"><AlertCircle className="h-4 w-4 mr-1" /> Failed</Badge>;
      case 'pending':
        return <Badge variant="secondary"><Clock className="h-4 w-4 mr-1" /> Pending</Badge>;
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-4">AI Agents Activity</h1>
      <p className="text-muted-foreground mb-8">
        Monitor and manage the tasks performed by AI agents like document summarization, tagging, and extraction.
      </p>

      <div className="grid gap-4">
        {logs.length === 0 ? (
          <p className="text-muted-foreground">No agent activity logged yet.</p>
        ) : (
          logs.map((log) => (
            <Card key={log.id} className="p-4 flex items-start space-x-4">
              <Terminal className="h-5 w-5 text-muted-foreground mt-1" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold">{log.task}</h3>
                  {getStatusBadge(log.status)}
                </div>
                <p className="text-sm text-muted-foreground mt-1">{log.description}</p>
                <p className="text-xs text-muted-foreground mt-1">{log.timestamp}</p>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
