import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Users, Award, Star, ChevronDown, Play, Lightbulb, Target, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = ({ data }) => {
  const achievements = [
    { icon: Users, number: '5000+', label: 'Active Students' },
    { icon: Award, number: '95%', label: 'Success Rate' },
    { icon: Star, number: '15+', label: 'Years Experience' },
    { icon: BookOpen, number: '25+', label: 'Expert Courses' }
  ]

  const floatingElements = [
    { icon: Lightbulb, delay: 2, position: 'top-1/4 left-1/4' },
    { icon: Target, delay: 2.5, position: 'top-1/3 right-1/4' },
    { icon: BookOpen, delay: 3, position: 'bottom-1/3 left-1/3' }
  ]

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Large Geometric Shapes */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-64 h-64 border border-[#183883]/10 rounded-full"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-20 left-20 w-32 h-32 bg-[#DFBC2D]/20 rounded-xl transform rotate-45"
        />
        
        {/* Floating Educational Icons */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.1, y: 0 }}
            transition={{ delay: element.delay, duration: 1 }}
            className={`absolute ${element.position} text-[#183883]`}
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
            >
              <element.icon className="w-12 h-12" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="container-custom relative z-10 pt-20 pb-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-3 bg-gradient-to-r from-[#183883]/10 to-[#DFBC2D]/10 text-[#183883] rounded-full text-sm font-semibold border border-[#183883]/20">
              🎓 Transforming Education Since 2008
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6"
          >
            <span className="text-black">Shape Your</span>
            <br />
            <span className="text-[#183883] relative inline-block">
              Future Today
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom- left-0 h-2 bg-[#DFBC2D] rounded-full"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            {data?.content || 'Join thousands of successful students who chose excellence. Our innovative teaching methods and personalized approach guarantee your academic success.'}
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
        >
          <Link
            to="/courses"
            className="group relative px-10 py-5 bg-[#183883] text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center">
              Start Learning Now
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-black rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </Link>

          <button className="group flex items-center px-8 py-5 bg-white border-2 border-[#183883] text-[#183883] font-bold text-lg rounded-2xl hover:bg-[#183883] hover:text-white transition-all duration-300">
            <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            Watch Success Stories
          </button>
        </motion.div>

        {/* Achievement Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="group text-center"
            >
              <div className="relative">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-white to-gray-50 rounded-3xl flex items-center justify-center shadow-lg border border-gray-100 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  <achievement.icon className="w-10 h-10 text-[#183883] group-hover:text-[#DFBC2D] transition-colors duration-300" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#DFBC2D] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-3xl font-black text-black mb-2 group-hover:text-[#183883] transition-colors duration-300">
                {achievement.number}
              </h3>
              <p className="text-gray-600 font-semibold">{achievement.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative bg-gradient-to-br from-[#183883] to-black rounded-3xl p-3 shadow-2xl">
              <img
                src={data?.image || 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1200'}
                alt="Students in classroom"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-3 rounded-2xl bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Excellence in Every Lesson</h3>
                  <p className="text-white/90 text-lg">Modern classrooms, expert faculty, proven results</p>
                </div>
              </div>
            </div>

            {/* Floating Success Metrics */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hidden lg:block"
            >
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#DFBC2D] to-[#DFBC2D]/80 rounded-xl flex items-center justify-center">
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-black text-black">98%</div>
                  <div className="text-gray-600 font-semibold">Student Satisfaction</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="absolute -right-6 bottom-1/4 bg-[#183883] rounded-2xl p-6 shadow-xl text-white hidden lg:block"
            >
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-black">24/7</div>
                  <div className="text-white/80 font-semibold">Expert Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="text-gray-500 text-sm font-semibold mb-3">Explore Our Programs</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-8 mx-auto bg-[#183883] rounded-full flex items-center justify-center cursor-pointer hover:bg-black transition-colors duration-300"
        >
          <ChevronDown className="w-5 h-5 text-white" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero