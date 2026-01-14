import GalleryPhoto from "@/components/shared/Gallery/GalleryPhoto";
import Testimonials from "@/components/shared/Home/Testimonials";
import LandownerBanner from "@/components/shared/Landowner/LandownerBanner";
import React from "react";

const Gallery = () => {
  return (
    <div>
      <LandownerBanner
        img={
          "https://job-task-2-backend-eight.vercel.app/images/1766054311360_gallery.png"
        }
        title="Gallery
"
        text="Going Back To The Memories"
      ></LandownerBanner>
      <GalleryPhoto />
      <Testimonials />
      {/* <OurAwardsandRecognition /> */}
    </div>
  );
};

export default Gallery;
