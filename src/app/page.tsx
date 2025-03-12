import { motion } from 'framer-motion'
import { RiShieldCheckLine, RiComputerLine, RiTeamLine, RiBrainLine } from 'react-icons/ri'
import dynamic from 'next/dynamic'
import FeatureCard from '@/components/FeatureCard'

// Create a client component wrapper for Scene3D
const Scene3DWrapper = dynamic(
  () => import('@/components/Scene3DWrapper'),
  { loading: () => <div>Loading 3D Scene...</div> }
)

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 z-0">
          <Scene3DWrapper />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Stay Safe in the Digital World
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              DIGITS Inc helps senior citizens navigate the digital landscape safely with AI-powered learning and cybersecurity education.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors"
            >
              Start Learning Today
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How We Help You</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<RiShieldCheckLine className="h-10 w-10" />}
              title="Cybersecurity Education"
              description="Learn how to protect yourself from online threats and scams with our easy-to-follow guides."
            />
            <FeatureCard
              icon={<RiComputerLine className="h-10 w-10" />}
              title="Tech Literacy"
              description="Master the basics of computers, smartphones, and the internet at your own pace."
            />
            <FeatureCard
              icon={<RiTeamLine className="h-10 w-10" />}
              title="Community Support"
              description="Join our supportive community of seniors learning technology together."
            />
            <FeatureCard
              icon={<RiBrainLine className="h-10 w-10" />}
              title="AI-Powered Learning"
              description="Experience personalized learning with our AI tutors that adapt to your needs."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Begin Your Digital Journey?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of seniors who are already benefiting from our AI-powered learning platform.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors"
          >
            Get Started Free
          </motion.button>
        </div>
      </section>
    </div>
  )
} 