import React from 'react';
import { UserPlus, Music2, Star, Calendar, Users } from 'lucide-react';
import abstract from '../assets/abstract.png';
import panjikaran from '../assets/Panjikaran.png';

const features = [
  {
    icon: Music2,
    title: "कला का डिजिटल प्रदर्शन",
    description: "अपनी कला का विवरण, फोटो और वीडियो अपलोड करें"
  },
  {
    icon: Star,
    title: "विशेषज्ञता प्रदर्शित करें",
    description: "अपनी कला विधा और अनुभव को हाइलाइट करें"
  },
  {
    icon: Calendar,
    title: "कार्यक्रम अवसर",
    description: "सीधे आयोजकों से जुड़ें और प्रस्तुति के अवसर पाएं"
  },
  {
    icon: Users,
    title: "कलाकार समुदाय",
    description: "अन्य कलाकारों से जुड़ें और अनुभव साझा करें"
  }
];

const ArtistRegistration = () => {
  return (
    <div className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#903603] font-['Baloo_2'] mb-4">
            कलाकार पंजीयन
          </h1>
          <img
            src={abstract}
            alt="Abstract Design"
            className="w-32 md:w-40"
          />
        </div>

        <div className="md:flex md:gap-12 items-start">
          <div className="md:w-1/2 space-y-8 mb-12 md:mb-0">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#903603]/10 rounded-xl">
                <UserPlus className="w-8 h-8 text-[#903603]" />
              </div>
              <h2 className="text-3xl font-bold text-[#5A1616] font-['Baloo_2']">
                कलाकारों के लिए डिजिटल मंच
              </h2>
            </div>
            
            <div className="space-y-4 text-lg leading-relaxed font-['Baloo_2'] text-[#5A1616]/80 text-justify">
              <p>
                बदलते समय के साथ पारंपरिक सांस्कृतिक कलाकारों को पहचान और अवसर मिलना कठिन होता जा रहा है। बहुत से कलाकार आर्थिक संकट और मंच की कमी का सामना कर रहे हैं।
              </p>
              <p>
                <span className="font-semibold">संस्कृति विभाग, उत्तर प्रदेश</span> द्वारा इन कलाकारों को सम्मान और सहयोग देने के उद्देश्य से एक डिजिटल पोर्टल शुरू किया गया है। इस पोर्टल पर कलाकार स्वयं को पंजीकृत कर सकते हैं, अपनी कला, अनुभव और प्रस्तुतियाँ साझा कर सकते हैं।
              </p>
            </div>

            <button className="w-full md:w-auto px-8 py-4 bg-[#903603] text-white rounded-xl font-['Baloo_2'] font-semibold hover:bg-[#5A1616] transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.02] hover:shadow-lg group">
              <UserPlus className="w-5 h-5 group-hover:scale-110 transition-transform" />
              पंजीयन करें
            </button>
          </div>

          <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-xl bg-white/50 hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border border-[#903603]/10 flex items-start gap-4"
                >
                  <div className="p-3 bg-[#903603]/10 rounded-lg shrink-0">
                    <feature.icon className="w-6 h-6 text-[#903603]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#5A1616] mb-2 text-xl font-['Baloo_2']">{feature.title}</h3>
                    <p className="text-[#5A1616]/70 text-lg">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistRegistration;