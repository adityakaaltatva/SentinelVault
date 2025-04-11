import { useCallback } from 'react';
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
  Connection,
} from '@xyflow/react';

import { Card } from '@/components/ui/card';

export function AccessVisualizerPage() {
  // 🔐 Dummy data: Replace with real file-user access data from backend
  const initialNodes: Node[] = [
    {
      id: 'file-1',
      type: 'default',
      data: { label: '📁 report.pdf' },
      position: { x: 100, y: 100 },
      style: { backgroundColor: '#f0f4ff', border: '1px solid #c7d2fe' },
    },
    {
      id: 'file-2',
      type: 'default',
      data: { label: '📁 contract.docx' },
      position: { x: 100, y: 250 },
      style: { backgroundColor: '#f0f4ff', border: '1px solid #c7d2fe' },
    },
    {
      id: 'user-1',
      type: 'default',
      data: { label: '👤 user@example.com' },
      position: { x: 400, y: 100 },
      style: { backgroundColor: '#ecfdf5', border: '1px solid #6ee7b7' },
    },
    {
      id: 'user-2',
      type: 'default',
      data: { label: '👤 0xAbc...E123' },
      position: { x: 400, y: 250 },
      style: { backgroundColor: '#ecfdf5', border: '1px solid #6ee7b7' },
    },
  ];

  const initialEdges: Edge[] = [
    {
      id: 'edge-1',
      source: 'file-1',
      target: 'user-1',
      label: 'read',
      style: { stroke: '#60a5fa' },
      labelStyle: { fill: '#3b82f6', fontWeight: 600 },
    },
    {
      id: 'edge-2',
      source: 'file-2',
      target: 'user-2',
      label: 'write',
      style: { stroke: '#facc15' },
      labelStyle: { fill: '#ca8a04', fontWeight: 600 },
    },
  ];

  const [nodes] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection: Connection) =>
      setEdges((eds) =>
        addEdge(
          {
            ...connection,
            id: `${connection.source}-${connection.target}`,
            label: 'new',
          },
          eds
        )
      ),
    [setEdges]
  );

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-4">Access Visualizer</h1>
      <p className="text-muted-foreground mb-6">
        Visual representation of which users have access to which files.
      </p>

      <Card className="h-[600px] w-full p-0 overflow-hidden">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background variant={BackgroundVariant.Dots} gap={16} size={1} />
        </ReactFlow>
      </Card>
    </div>
  );
}
