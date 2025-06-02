import React from 'react';
import { Music4, Palette, Book, Landmark, PartyPopper } from 'lucide-react';
import TranslatableText from './TranslatableText';
const abstract = new URL('../assets/abstract.png', import.meta.url).href;
const img1 = new URL('../assets/img1.png', import.meta.url).href;
const img2 = new URL('../assets/img2.png', import.meta.url).href;
const img3 = new URL('../assets/img3.png', import.meta.url).href;
const img4 = new URL('../assets/img4.png', import.meta.url).href;

const sections = [
  {
    title: "धार्मिक एवं आध्यात्मिक विरासत",
    content: "काशी, अयोध्या, मथुरा, वृंदावन, प्रयागराज जैसे तीर्थस्थल न केवल भारत में, बल्कि पूरी दुनिया में धार्मिक आस्था के केंद्र रहे हैं। रामायण और महाभारत की कथाएँ यहीं की धरती से जुड़ी हुई हैं।",
    image: img1,
    icon: Landmark
  },
  {
    title: "लोक कला और हस्तशिल्प",
    content: "उत्तर प्रदेश की लोक कलाएँ जैसे अवधी, ब्रज और बुंदेली लोकगीत, नौटंकी, रासलीला और झोला नृत्य जनजीवन का अभिन्न अंग हैं। बनारसी साड़ी, चिकनकारी, कांच की चूड़ियाँ विश्वप्रसिद्ध हैं।",
    image: img2,
    icon: Palette
  },
  {
    title: "भाषा और साहित्य",
    content: "उत्तर प्रदेश हिंदी भाषा का गढ़ है। यहाँ अवधी, ब्रज, बुंदेली, भोजपुरी जैसी लोक भाषाओं में अमूल्य साहित्य रचा गया है। गोस्वामी तुलसीदास, कबीरदास, सूरदास, प्रेमचंद जैसे महाकवियों ने इस भूमि को गौरवान्वित किया है।",
    image: img3,
    icon: Book
  },
  {
    title: "संगीत और नृत्य",
    content: "उत्तर प्रदेश की संगीत परंपरा में ठुमरी, दादरा, कजरी, भजन और शास्त्रीय गायन की अद्वितीय शैलियाँ शामिल हैं। काशी की गायन शैली और अयोध्या की रासलीला भारतीय सांस्कृतिक विरासत का आधार हैं।",
    image: img4,
    icon: Music4
  }
];

const CulturalSections = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <div className="w-full px-4 flex flex-col items-center mb-16">
        <h4 className="font-['Baloo 2'] text-md md:text-5xl font-bold text-center mt-4 text-[#5A1616]">
          उत्तर प्रदेश की समृद्ध संस्कृति
        </h4>
                <img 
          src={abstract} 
          alt="Abstract Design"
          className="w-24 md:w-32 mt-4"
        />
      </div>
      <div className="grid gap-8 md:gap-12">
        {sections.map((section, index) => (
          <div 
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
          >
            <div className="w-full md:w-1/2">
              <div className="relative group">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-[240px] md:h-[320px] object-cover rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/20 rounded-2xl transition-opacity duration-300 group-hover:opacity-0" />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <div className="flex items-center gap-3">
                <section.icon className="w-8 h-8 text-red-800" />
                <h2 className="text-2xl md:text-3xl font-bold font-['Baloo 2'] text-[#5A1616]">{section.title}</h2>
              </div>
              <p className="text-lg leading-relaxed font-['Baloo 2']">{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CulturalSections;