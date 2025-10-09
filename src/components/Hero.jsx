import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Users, Award, Star, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = ({ data }) => {
  const achievements = [
    { icon: Users, number: '5000+', label: 'Active Students' },
    { icon: Award, number: '95%', label: 'Success Rate' },
    { icon: Star, number: '15+', label: 'Years Experience' },
    { icon: BookOpen, number: '25+', label: 'Expert Courses' }
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-violet-200 to-purple-300 rounded-full blur-3xl"
        />
        
        {/* Floating Dots Pattern */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.1, 0.3, 0.1], y: [-20, 20, -20] }}
              transition={{ 
                duration: 3 + i * 0.2, 
                repeat: Infinity,
                delay: i * 0.1 
              }}
              className="absolute w-2 h-2 bg-indigo-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
              />
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-indigo-200 shadow-sm">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-700">Transforming Education Since 2008</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1]">
                Shape Your
                <br />
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
                  Future Today
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
                {data?.content || 'Join thousands of successful students who chose excellence. Our innovative teaching methods and personalized approach guarantee your academic success.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/courses"
                className="group relative inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center font-medium">
                  Start Learning Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <button className="inline-flex items-center justify-center bg-white text-indigo-600 px-8 py-4 rounded-xl border-2 border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-300 font-medium shadow-sm">
                Watch Success Stories
              </button>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative Border */}
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-3xl opacity-20 blur-xl"></div>
              
              {/* Image Container with Glass Effect */}
              <div className="relative bg-white/80 backdrop-blur-sm p-3 rounded-3xl shadow-2xl border border-white/50">
                <img
                  src={data?.image || 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1200'}
                  alt="Students in classroom"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-3 rounded-2xl bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-violet-600 to-purple-600 text-white p-6 rounded-2xl shadow-2xl hidden lg:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold">98%</div>
                    <div className="text-sm text-white/80">Student Satisfaction</div>
                  </div>
                </div>
              </motion.div>

              {/* Top Right Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -top-6 -right-6 bg-white backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-indigo-100 hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900">24/7</div>
                    <div className="text-xs text-slate-600">Expert Support</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-100/50 to-blue-100/50 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/80 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center space-y-4 group"
                >
                  <div className="relative mx-auto w-16 h-16">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                    <div className="relative w-full h-full bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="w-7 h-7 text-indigo-600" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                      {achievement.number}
                    </h3>
                    <p className="text-sm text-slate-600 font-medium">
                      {achievement.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-indigo-400 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-gradient-to-b from-indigo-500 to-blue-500 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero