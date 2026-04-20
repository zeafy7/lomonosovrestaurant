import React from "react";
import { motion } from "framer-motion";

import hallImg from "@assets/HriLwF_QnLXUR3eEGMmsK7Nq2e40jOH_jJ3j_NqmT6qbqSmrCilsNRLJsLNgbH_1776633755776.jpg";
import roomImg from "@assets/5Z5pOE_RPCYA11qRFtfr7dzMCXLdCPapzEeTmPB-hd9XYJUkSBVmdYl_DJTkWC_1776633755775.jpg";
import tableDarkImg from "@assets/NSLFHpHK-wZpy6qqNh8YfDH65EQD1JfZafq7fuI7eXK5hY3fCF3B3NALfJsTAR_1776633755778.jpg";
import tableColorImg from "@assets/kAsnJThkvJry1MGSKYcyS7Xei3Hnv4iJAfTEvND5OlalvqTNw0xajh-tVIiVP4_1776633755777.jpg";
import barImg from "@assets/yPMb9kMkZHNBbfwE0j1UFLb-S3keya-QcKmO6nJukFrCqQ8w1DLfwPp_gen9IL_1776633755778.jpg";
import eventImg from "@assets/Slmy89lkaJ80oUCcfFLbvqQRNbnDxpgaMvKgVS58PBxFZXdJ74Elk-7PCRmV8c_1776634394200.jpg";

export default function Gallery() {
  const images = [
    { src: hallImg, alt: "Main Hall", className: "md:col-span-2 md:row-span-2" },
    { src: roomImg, alt: "Private Room", className: "md:col-span-1 md:row-span-1" },
    { src: tableDarkImg, alt: "Table Details", className: "md:col-span-1 md:row-span-1" },
    { src: tableColorImg, alt: "Colorful Chairs", className: "md:col-span-1 md:row-span-1" },
    { src: barImg, alt: "Bar Area", className: "md:col-span-1 md:row-span-1" },
    { src: eventImg, alt: "Event", className: "md:col-span-2 md:row-span-1" },
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold mb-4">Галерея</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 auto-rows-[160px] md:auto-rows-[250px] max-w-6xl mx-auto">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`relative overflow-hidden group rounded-lg ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
