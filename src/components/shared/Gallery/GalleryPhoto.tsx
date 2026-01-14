/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import { motion, easeOut, Variants } from "framer-motion";
import { galleryService } from "@/services/gallery.service";

interface GalleryItem {
  id: string;
  videoUrl?: string;
  image: string[];
}

const GalleryPage = () => {
  const [galleries, setGalleries] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setIsLoading(true);
        const response = await galleryService.getAll();
        if (response.success) {
          setGalleries(response.data || []);
        } else {
          setError("Failed to fetch gallery");
        }
      } catch (err) {
        setError("Error fetching gallery");
        console.error("Gallery fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGallery();
  }, []);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: easeOut },
    },
  };

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");

  // Filter data based on tab
  const photoItems = galleries.filter(item => item.image && item.image.length > 0);
  const videoItems = galleries.filter(item => item.videoUrl);

  // Convert YouTube URL to embed format
  const convertToEmbedUrl = (url: string): string => {
    if (!url) return '';
    
    if (url.includes('youtube.com/embed')) {
      return url;
    }
    
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 
      ? `https://www.youtube.com/embed/${match[7]}` 
      : url;
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="animate-spin h-10 w-10 border-b-2 border-red-600 rounded-full"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <p className="text-white text-xl">{error}</p>
      </div>
    );
  }

  if (galleries.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <p className="text-white text-xl">No gallery items available.</p>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("photos")}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === "photos"
                  ? "bg-red-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Photos ({photoItems.reduce((acc, item) => acc + item.image.length, 0)})
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === "videos"
                  ? "bg-red-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Videos ({videoItems.length})
            </button>
          </div>
        </div>

        {/* Photos Tab */}
        {activeTab === "photos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {photoItems.map((gallery) =>
              gallery.image.map((imageUrl, index) => (
                <motion.div
                  key={`${gallery.id}-${index}`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative group cursor-pointer overflow-hidden rounded-lg"
                  onClick={() => setSelectedImage(imageUrl)}
                >
                  <img
                    src={imageUrl}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoItems.map((gallery) => (
              <motion.div
                key={gallery.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
              >
                <iframe
                  src={convertToEmbedUrl(gallery.videoUrl || '')}
                  className="w-full h-64 rounded-lg"
                  allowFullScreen
                  title={`Video ${gallery.id}`}
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Selected gallery image"
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
