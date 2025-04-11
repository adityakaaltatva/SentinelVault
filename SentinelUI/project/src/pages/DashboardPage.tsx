/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  BarChart,
  FileText,
  HardDrive,
  Key,
  Shield,
  Cloud,
  Lock,
  Wifi,
  Terminal,
  Activity,
  Upload,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'; // ShadCN UI

const allStats = [
  { title: 'Total Files', value: '0', icon: FileText, change: '+0%', color: 'text-blue-600' },
  { title: 'Storage Used', value: '0 GB', icon: HardDrive, change: '+0%', color: 'text-purple-600' },
  { title: 'Access Tokens', value: '0', icon: Key, change: '+0%', color: 'text-green-600' },
  { title: 'Security Score', value: '0%', icon: Shield, change: '+0%', color: 'text-amber-600' },
  { title: 'Cloud Syncs', value: '0', icon: Cloud, change: '+0%', color: 'text-cyan-600' },
  { title: 'Encrypted Files', value: '0', icon: Lock, change: '+0%', color: 'text-rose-600' },
  { title: 'Connected Devices', value: '0', icon: Wifi, change: '+0%', color: 'text-indigo-600' },
  { title: 'AI Agent Calls', value: '0', icon: Terminal, change: '+0%', color: 'text-yellow-500' },
  { title: 'Alerts Triggered', value: '0', icon: Activity, change: '+0%', color: 'text-red-500' },
  { title: 'Total Uploads', value: '0', icon: Upload, change: '+0%', color: 'text-teal-500' },
];

// TODO: Populate recentActivity from backend

export function DashboardPage() {
  const [statPage, setStatPage] = useState(0); // 0 = first 4, 1 = next 4, etc.
  const [recentActivity, setRecentActivity] = useState<{ id: string; action: string; description: string; timestamp: string }[]>([]); // TODO: Populate from backend

  const pageSize = 4;
  const totalPages = Math.ceil(allStats.length / pageSize);
  const visibleStats = allStats.slice(statPage * pageSize, statPage * pageSize + pageSize);

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Overview of your vault status and recent activity
          </p>
        </div>
        <Button asChild>
          <Link to="/upload">
            <Upload className="mr-2 h-4 w-4" />
            Upload Files
          </Link>
        </Button>
      </div>

      {/* Stat Set Dropdown */}
      <div className="flex justify-end mb-4">
        <Select value={String(statPage)} onValueChange={(val) => setStatPage(Number(val))}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select Stat Set" />
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: totalPages }).map((_, index) => (
              <SelectItem key={index} value={String(index)}>
                {`Stats ${index * pageSize + 1} - ${Math.min((index + 1) * pageSize, allStats.length)}`}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {visibleStats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
                </div>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <div className="mt-4">
                <p className="text-sm text-green-600">{stat.change} this month</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Storage + Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Storage Usage</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Documents</span>
                <span>0 GB / 10 GB</span>
              </div>
              <Progress value={0} />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Media</span>
                <span>0 GB / 5 GB</span>
              </div>
              <Progress value={0} />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Other</span>
                <span>0 GB / 2 GB</span>
              </div>
              <Progress value={0} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.length === 0 ? (
              <p className="text-sm text-muted-foreground">No activity yet.</p>
            ) : (
              recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <BarChart className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                    <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
