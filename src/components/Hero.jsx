import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, Users, Trophy, BookOpen, GraduationCap, Target, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = ({ data }) => {
  const stats = [
    { icon: Users, label: 'Students Enrolled', value: '5000+' },
    { icon: Trophy, label: 'Success Rate', value: '95%' },
    { icon: BookOpen, label: 'Courses Offered', value: '25+' },
  ]

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23183883' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Geometric Accent */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-[#DFBC2D] to-[#183883] opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-10 w-24 h-24 bg-[#DFBC2D] opacity-5 rounded-full blur-2xl"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-5 py-2 bg-[#183883]/5 border border-[#183883]/10 text-[#183883] rounded-full text-sm font-medium"
              >
                <GraduationCap className="h-4 w-4 mr-2 text-[#DFBC2D]" />
                15+ Years of Educational Excellence
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] tracking-tight"
              >
                {data?.title || (
                  <>
                    Excellence in{' '}
                    <span className="text-[#183883] relative">
                      Education
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#DFBC2D] rounded"></div>
                    </span>
                  </>
                )}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl md:text-2xl text-[#183883] font-medium"
              >
                {data?.subtitle || 'Empowering Minds, Building Futures'}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-lg text-gray-600 leading-relaxed max-w-2xl"
              >
                {data?.content ||
                  'Transform your academic journey with our proven methodology, expert faculty, and personalized approach to learning that prepares you for success.'}
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/courses"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#183883] text-white font-semibold rounded-lg hover:bg-[#183883]/90 transition-all duration-200 group shadow-lg hover:shadow-xl"
              >
                {data?.buttonText || 'Explore Courses'}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#183883] font-semibold rounded-lg border-2 border-[#183883] hover:bg-[#183883] hover:text-white transition-all duration-200 group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.4 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#DFBC2D]/20 rounded-xl mb-3 group-hover:bg-[#DFBC2D]/30 transition-colors">
                    <stat.icon className="h-6 w-6 text-[#183883]" />
                  </div>
                  <div className="text-2xl font-bold text-black mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 bg-white rounded-2xl p-2 shadow-2xl">
                <img
                  src={
                    data?.image ||
                    'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800'
                  }
                  alt="Students learning"
                  className="w-full h-[500px] lg:h-[550px] object-cover rounded-xl"
                />
              </div>

              {/* Achievement Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-20"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#DFBC2D] to-[#DFBC2D]/80 rounded-xl flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-black">95%</div>
                    <div className="text-sm text-gray-600 font-medium">Success Rate</div>
                  </div>
                </div>
              </motion.div>

              {/* Student Count Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7, duration: 0.6 }}
                className="absolute -bottom-4 -right-4 bg-[#183883] p-4 rounded-2xl shadow-xl z-20"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">5000+</div>
                    <div className="text-sm text-white/80 font-medium">Happy Students</div>
                  </div>
                </div>
              </motion.div>

              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#183883]/5 to-[#DFBC2D]/10 rounded-2xl transform rotate-2 scale-105 -z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-[#DFBC2D]/5 to-[#183883]/5 rounded-2xl transform -rotate-1 scale-102 -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-3">
          <span className="text-sm text-gray-500 font-medium">Discover More</span>
          <div className="w-6 h-10 border-2 border-[#183883]/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-[#183883] rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero