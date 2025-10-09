// NEW HOME PAGE - Matching Hero Section Design

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Trophy,
  BookOpen,
  Star,
  Quote,
  Calendar,
  Award,
  Target,
  Eye,
  Sparkles,
} from "lucide-react";

import Hero from "../components/Hero";
import CourseCard from "../components/CourseCard";
import { useApi } from "../context/ApiContext";

const Home = () => {
  const { fetchHomeSections, fetchCourses, fetchToppers, fetchAchievements } =
    useApi();
  const [homeData, setHomeData] = useState({});
  const [courses, setCourses] = useState([]);
  const [toppers, setToppers] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        const [homeSections, coursesData, toppersData, achievementsData] =
          await Promise.all([
            fetchHomeSections(),
            fetchCourses({ limit: 3 }),
            fetchToppers({ featured: true, limit: 3 }),
            fetchAchievements({ featured: true, limit: 3 }),
          ]);

        const sectionsMap = {};
        homeSections.forEach((section) => {
          sectionsMap[section.section] = section;
        });
        setHomeData(sectionsMap);

        setCourses(coursesData.courses || []);
        setToppers(toppersData.toppers || []);
        setAchievements(achievementsData.achievements || []);
      } catch (error) {
        console.error("Error loading home data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="pt-16 md:pt-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <Hero data={homeData.hero} />

      {/* About Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-violet-200 to-purple-300 rounded-full blur-3xl opacity-30" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-3xl opacity-20 blur-xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-3 rounded-3xl shadow-2xl border border-white/50">
                <img
                  src={
                    homeData.about?.image ||
                    "https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=800"
                  }
                  alt="About Masters Academy"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
                />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                  {homeData.about?.title || "About Masters Academy"}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {homeData.about?.content ||
                    "Masters Academy has been a beacon of educational excellence for over a decade. We specialize in competitive exam preparation, academic support, and skill development programs that prepare students for success in their academic and professional journeys."}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 backdrop-blur-sm p-6 rounded-2xl border border-indigo-100 shadow-lg">
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                    15+
                  </div>
                  <div className="text-sm text-slate-600 font-medium mt-1">
                    Years Experience
                  </div>
                </div>
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 backdrop-blur-sm p-6 rounded-2xl border border-violet-100 shadow-lg">
                  <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                    5000+
                  </div>
                  <div className="text-sm text-slate-600 font-medium mt-1">
                    Students Taught
                  </div>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200 to-indigo-300 rounded-full blur-3xl opacity-30" />

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              <div className="relative bg-white/70 backdrop-blur-md p-8 rounded-3xl border border-white/80 shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {homeData.vision?.title || "Our Vision"}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {homeData.vision?.content ||
                    "To be the leading educational institution that transforms lives through innovative teaching methodologies, personalized attention, and comprehensive development programs."}
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-br from-violet-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              <div className="relative bg-white/70 backdrop-blur-md p-8 rounded-3xl border border-white/80 shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-violet-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {homeData.mission?.title || "Our Mission"}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {homeData.mission?.content ||
                    "To provide world-class education that nurtures intellectual curiosity, develops critical thinking skills, and prepares students to become responsible global citizens and future leaders."}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {homeData.stats && (
        <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-violet-600">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl opacity-10"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-10"></div>
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16 space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">
                  Our Impact
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {homeData.stats.title}
              </h2>
              <p className="text-xl text-blue-100">{homeData.stats.content}</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {homeData.stats.stats?.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-white rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                    <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                        {stat.value}
                      </div>
                      <div className="text-blue-100 text-sm">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Courses */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-200 to-blue-300 rounded-full blur-3xl opacity-30" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-indigo-200 shadow-sm">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-medium text-indigo-700">
                Our Courses
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              Popular Courses
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our comprehensive range of courses designed to help you
              achieve your academic goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {courses.map((course, index) => (
              <CourseCard
                key={course._id}
                course={course}
                index={index}
                shouldAnimate={false} // Add this prop to disable animations on homepage
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/courses"
              className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View All Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Toppers Section */}
      {toppers.length > 0 && (
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-violet-200 to-purple-300 rounded-full blur-3xl opacity-30" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16 space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-indigo-200 shadow-sm">
                <Trophy className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-700">
                  Success Stories
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                Our Star Performers
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Meet our successful students who have achieved remarkable
                results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {toppers.map((topper, index) => (
                <motion.div
                  key={topper._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -inset-2 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                  <div className="relative bg-white/70 backdrop-blur-md p-6 rounded-3xl border border-white/80 shadow-xl text-center space-y-4">
                    <div className="relative inline-block">
                      <div className="absolute -inset-2 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-full blur-lg opacity-50"></div>
                      <img
                        src={topper.photo}
                        alt={topper.name}
                        className="relative w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {topper.name}
                      </h3>
                      <p className="font-medium bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">
                        {topper.achievement}
                      </p>
                      <p className="text-slate-600 text-sm mb-4">
                        {topper.exam} • {topper.year}
                      </p>
                    </div>
                    {topper.testimonial && (
                      <div className="relative">
                        <Quote className="absolute -top-2 -left-2 w-6 h-6 text-indigo-200" />
                        <p className="text-slate-600 text-sm italic px-4">
                          {topper.testimonial}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/achievements"
                className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-xl border-2 border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-300 font-medium shadow-sm"
              >
                View All Achievements
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Recent Achievements */}
      {achievements.length > 0 && (
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-200 to-indigo-300 rounded-full blur-3xl opacity-30" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16 space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-indigo-200 shadow-sm">
                <Award className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-700">
                  Milestones
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                Recent Achievements
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Celebrating our latest milestones and recognitions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -inset-2 bg-gradient-to-br from-violet-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                  <div className="relative bg-white/70 backdrop-blur-md rounded-3xl overflow-hidden border border-white/80 shadow-xl">
                    <div className="relative overflow-hidden">
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-700 rounded-full text-xs font-medium border border-indigo-200">
                          {achievement.category}
                        </span>
                        <div className="flex items-center text-slate-500 text-xs">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(achievement.date).toLocaleDateString()}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {achievement.title}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-violet-600">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-blue-100">
                Join thousands of successful students who have achieved their
                dreams with Masters Academy
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center bg-white text-indigo-600 px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Explore Courses
                <BookOpen className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300 font-medium"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
