import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { UploadCloud } from 'lucide-react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

export function UploadPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [metadata, setMetadata] = useState('');
  const [accessType, setAccessType] = useState<'private' | 'public' | 'token-gated'>('private');
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedFile(file || null);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setMessage('Please select a file to upload.');
      setStatus('error');
      return;
    }

    try {
      setStatus('uploading');
      setMessage('Uploading file...');

      // 📦 TODO: Replace with actual API call
      // const formData = new FormData();
      // formData.append('file', selectedFile);
      // formData.append('accessType', accessType);
      // formData.append('metadata', metadata);
      // await fetch('/api/upload', { method: 'POST', body: formData });

      setSelectedFile(null);
      setMetadata('');
      setStatus('success');
      setMessage('File uploaded successfully.');
    } catch {
      setStatus('error');
      setMessage('Upload failed. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-4">Upload Files</h1>
      <p className="text-muted-foreground mb-8">
        Securely upload files with access control, metadata, and validation.
      </p>

      <Card className="p-6 space-y-6 max-w-2xl">
        <div className="space-y-2">
          <Label htmlFor="file">Select File</Label>
          <Input id="file" type="file" onChange={handleFileChange} />
          {selectedFile && <p className="text-sm text-muted-foreground">Selected: {selectedFile.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="accessType">Access Type</Label>
          <Select value={accessType} onValueChange={(val: 'private' | 'public' | 'token-gated') => setAccessType(val)}>
            <SelectTrigger>
              <SelectValue placeholder="Choose access type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="private">Private</SelectItem>
              <SelectItem value="public">Public</SelectItem>
              <SelectItem value="token-gated">Token-Gated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="metadata">Metadata (optional)</Label>
          <Textarea
            id="metadata"
            placeholder="e.g., Client reports, Legal docs..."
            value={metadata}
            onChange={(e) => setMetadata(e.target.value)}
          />
        </div>

        <div className="pt-4">
          <Button onClick={handleUpload} className="w-full" disabled={status === 'uploading'}>
            <UploadCloud className="mr-2 h-4 w-4" />
            {status === 'uploading' ? 'Uploading...' : 'Upload File'}
          </Button>

          {message && (
            <p
              className={`mt-3 text-sm ${
                status === 'error'
                  ? 'text-red-600'
                  : status === 'success'
                  ? 'text-green-600'
                  : 'text-gray-600'
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </Card>
    </div>
  );
}
