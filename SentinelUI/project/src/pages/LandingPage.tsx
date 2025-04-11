import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  ArrowRight,
  Shield,
  Lock,
  Database,
  Cpu,
  Key,
  FileCheck,
  Network,
  Fingerprint,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Shield,
    title: 'AI-Powered Security',
    description:
      'Advanced machine learning algorithms continuously monitor and protect your data from threats.',
  },
  {
    icon: Lock,
    title: 'Zero-Knowledge Encryption',
    description:
      'Your data is encrypted with state-of-the-art zk-SNARKs, ensuring complete privacy.',
  },
  {
    icon: Database,
    title: 'Decentralized Storage',
    description:
      'Files are distributed across IPFS network, eliminating single points of failure.',
  },
  {
    icon: Key,
    title: 'Token-Gated Access',
    description:
      'Control access to your files using NFTs and smart contract-based permissions.',
  },
  {
    icon: FileCheck,
    title: 'Automated Auditing',
    description:
      'Real-time tracking and verification of all file operations and access attempts.',
  },
  {
    icon: Network,
    title: 'Cross-Chain Compatible',
    description:
      'Seamlessly operate across multiple blockchain networks and protocols.',
  },
];

const techStack = [
  {
    name: 'React',
    image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png',
  },
  {
    name: 'TypeScript',
    image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png',
  },
  {
    name: 'IPFS',
    image: 'https://docs.ipfs.tech/images/ipfs-logo.svg',
  },
  {
    name: 'Ethereum',
    image: 'https://imgs.search.brave.com/heF0r9E3LP-qQfb8qbo25oQhimSV4J640ANCnqH2GYw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vdGVlcHVibGlj/L2ltYWdlL3ByaXZh/dGUvcy0tQnFYemY2/VHItLS90X1ByZXZp/ZXcvYl9yZ2I6MjYy/YzNhLGNfbGltaXQs/Zl9hdXRvLGhfNjMw/LHFfYXV0bzpnb29k/OjQyMCx3XzYzMC92/MTQ3MDgyMzA2OS9w/cm9kdWN0aW9uL2Rl/c2lnbnMvNjI1NzIz/XzEuanBn',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-6">
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  AI-Secured.
                </span>{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  zk-Verified.
                </span>{' '}
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-orange-600">
                  Decentralized Data Vault.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                The next generation of secure data storage, powered by AI and
                blockchain technology. Your data, your control, absolute privacy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex gap-4 justify-center"
            >
              <Button asChild size="lg" className="px-8">
                <Link to="/auth">
                  Launch Vault <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href="https://docs.example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-purple-500/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                SentinelVault combines cutting-edge technologies to provide
                unparalleled security and privacy for your data.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div key={feature.title} variants={itemVariants}>
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <feature.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-6">
                Enterprise-Grade Security
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Fingerprint className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      Biometric Authentication
                    </h3>
                    <p className="text-muted-foreground">
                      Multi-factor authentication with biometric verification for
                      enhanced security.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Cpu className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">AI Threat Detection</h3>
                    <p className="text-muted-foreground">
                      Real-time monitoring and threat detection powered by advanced
                      AI algorithms.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative aspect-square rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="h-32 w-32 text-primary" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Powered By</h2>
              <p className="text-muted-foreground">
                Built with cutting-edge technologies for maximum security and
                performance
              </p>
            </div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-12"
            >
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center space-y-2"
                >
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="h-16 w-16 object-contain"
                  />
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-background to-secondary/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Secure Your Data?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of organizations that trust SentinelVault with their
              most sensitive data.
            </p>
            <Button asChild size="lg" className="px-8">
              <Link to="/auth">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}