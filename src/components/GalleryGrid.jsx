import React, { useState } from 'react'
import { X, Calendar, Tag, ZoomIn, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const GalleryGrid = ({ items = [] }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [filter, setFilter] = useState('All')
  const [selectedIndex, setSelectedIndex] = useState(null)

  const categories = ['All', ...new Set(items.map(item => item.category))]

  const filteredItems = filter === 'All' 
    ? items 
    : items.filter(item => item.category === filter)

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const handleImageClick = (item, index) => {
    setSelectedImage(item)
    setSelectedIndex(index)
  }

  const handlePrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + filteredItems.length) % filteredItems.length)
    setSelectedImage(filteredItems[(selectedIndex - 1 + filteredItems.length) % filteredItems.length])
  }

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % filteredItems.length)
    setSelectedImage(filteredItems[(selectedIndex + 1) % filteredItems.length])
  }

  return (
    <div className="space-y-8">
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              filter === category
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item._id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => handleImageClick(item, index)}
            >
              {/* Image */}
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                  {item.title}
                </h3>
                
                {item.description && (
                  <p className="text-sm text-gray-200 mb-3 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {item.description}
                  </p>
                )}

                <div className="flex items-center justify-between text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(item.date)}
                    </div>
                    
                    <div className="flex items-center">
                      <Tag className="h-3 w-3 mr-1" />
                      {item.category}
                    </div>
                  </div>

                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-1">
                    <ZoomIn className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {item.category}
                </span>
              </div>

              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute top-4 right-4">
                  <span className="bg-secondary-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="text-gray-400 mb-4">
            <Tag className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No items found
          </h3>
          <p className="text-gray-600">
            No gallery items match the selected filter.
          </p>
        </motion.div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-screen h-screen z-60 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative flex w-full max-w-6xl h-[80vh] bg-white/10 rounded-xl shadow-2xl overflow-hidden border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10 transition-colors duration-200"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10 transition-colors duration-200"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-16 text-white hover:text-gray-300 transition-colors duration-200 z-10"
                aria-label="Close modal"
              >
                <X className="h-8 w-8" />
              </button>

              {/* Image Section */}
              <div className="w-1/1.5 h-full overflow-hidden">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover rounded-l-xl"
                />
              </div>

              {/* Info Section */}
              <div className="w-1/3 p-6 text-white bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-between">
                <div>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {selectedImage.category}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {selectedImage.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-secondary-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                        <Star className="h-3 w-3 mr-1 fill-current" />
                        Featured
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-semibold mb-4">
                    {selectedImage.title}
                  </h3>

                  {selectedImage.description && (
                    <p className="text-gray-200 mb-4 text-base">
                      {selectedImage.description}
                    </p>
                  )}

                  <div className="flex items-center space-x-6 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-gray-300" />
                      <span className="text-sm">{formatDate(selectedImage.date)}</span>
                    </div>
                    <div className="flex items-center">
                      <Tag className="h-5 w-5 mr-2 text-gray-300" />
                      <span className="text-sm">{selectedImage.category}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  {selectedImage.tags && selectedImage.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {selectedImage.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-md text-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default GalleryGrid