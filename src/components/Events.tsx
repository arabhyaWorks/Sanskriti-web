import React from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import backgroundImage from '../assets/VibhgaBG.avif';
import abstract from '../assets/abstract.png';

interface EventsProps {
  onClose?: () => void;
}

const Events: React.FC<EventsProps> = ({ onClose }) => {
  const [currentMonth, setCurrentMonth] = React.useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = React.useState(new Date().getFullYear());
  const [selectedEvent, setSelectedEvent] = React.useState(null);

  const monthNames = [
    "जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून",
    "जुलाई", "अगस्त", "सितम्बर", "अक्टूबर", "नवम्बर", "दिसम्बर"
  ];

  const weekDays = ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"];

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Placeholder events data
  const events = [
    {
      date: "14.06.2025",
      name: "भारतरत्न डॉ भीमराव अंबेडकर जयंती पर कार्यक्रम",
      organizer: "राज्य संग्रहालय, लखनऊ",
      venue: "राज्य संग्रहालय, लखनऊ",
      image: "https://i.ytimg.com/vi/8rp61KrzuRo/sddefault.jpg",
      description: "भारतरत्न डॉ भीमराव अंबेडकर जी की जयंती के अवसर पर एक विशेष कार्यक्रम का आयोजन किया जा रहा है। इस कार्यक्रम में उनके जीवन और योगदान पर प्रकाश डाला जाएगा।",
      time: "सुबह 10:00 बजे",
      contact: "फोन: 0522-2286672\nईमेल: directorcultureup@gmail.com",
      registrationLink: "https://forms.gle/example"
    }
  ];

  const renderCalendar = () => {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const eventDate = new Date(2025, 5, 14); // June 14, 2025
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(<div key={`empty-${i}`} className="text-center py-2"></div>);
    }
    
    // Add cells for each day of the month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const isEventDay = i === eventDate.getDate() && 
                        currentMonth === eventDate.getMonth() && 
                        currentYear === eventDate.getFullYear();
      days.push(
        <div 
          key={i}
          className={`text-center py-2 rounded-lg cursor-pointer transition-colors relative
            ${isEventDay ? 'bg-[#903603] text-white' : 'hover:bg-[#903603]/10'}`}
        >
          {isEventDay && 
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />}
          {i}
        </div>
      );
    }
    
    return days;
  };

  return (
    <>
      <div
        className="relative bg-transparent overflow-y-auto">
                <div className="flex flex-col items-center py-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#903603] font-['Baloo_2'] mb-4">
          सांस्कृतिक कार्यक्रम
          </h1>
          <img
            src={abstract}
            alt="Abstract Design"
            className="w-32 md:w-40"
          />
        </div>
        <div
          className="p-4 md:p-8 max-w-7xl mx-auto">
          <div className="bg-[#FFF8F0]/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-[#5A1616]/10">
            {/* <div className="flex flex-col items-center mb-12">
              <h1 className="text-3xl font-bold text-[#903603] font-['Baloo_2'] mb-4">
                सांस्कृतिक कार्यक्रम
              </h1>
              <img
                src={abstract}
                alt="Abstract Design"
                className="w-32"
              />
            </div> */}

            <div className="md:flex md:gap-8">
              <div className="md:w-1/2 mb-8 md:mb-0">                
                <div className="flex items-center justify-between mb-6">
                  <button 
                    onClick={handlePrevMonth}
                    className="p-2 hover:bg-black/5 rounded-full transition-colors active:scale-95"
                  >
                    <ChevronLeft className="w-5 h-5 text-[#903603]" />
                  </button>
                  <h2 className="text-xl font-bold text-[#903603] font-['Baloo_2']">
                    {monthNames[currentMonth]} {currentYear}
                  </h2>
                  <button 
                    onClick={handleNextMonth}
                    className="p-2 hover:bg-black/5 rounded-full transition-colors active:scale-95"
                  >
                    <ChevronRight className="w-5 h-5 text-[#903603]" />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-2">
                  {weekDays.map(day => (
                    <div key={day} className="text-center text-sm text-[#903603]/70 font-semibold font-['Baloo_2']">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-2 mb-8">
                  {renderCalendar()}
                </div>
              </div>

              <div className="md:w-1/2 md:border-l md:border-[#903603]/20 md:pl-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-[#903603] font-['Baloo_2'] border-l-4 border-[#903603] pl-3">
                    आगामी कार्यक्रम
                  </h3>
                  
                  {events.map((event, index) => (
                    <div 
                      key={index}
                      className="bg-[#903603]/5 rounded-xl p-4 hover:bg-[#903603]/10 transition-all cursor-pointer transform hover:scale-[1.02] duration-300"
                    >
                      <div className="space-y-4">
                        <div className="w-full aspect-video rounded-lg overflow-hidden">
                          <img
                            src={event.image}
                            alt={event.name}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[#903603] bg-white/50 w-fit px-3 py-1.5 rounded-full">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <h4 className="font-bold text-xl text-[#5A1616] font-['Baloo_2']">
                          {event.name}
                        </h4>
                        <div className="space-y-1 text-[#5A1616]/80">
                          <p className="text-sm">
                            <span className="font-medium">आयोजक:</span> {event.organizer}
                          </p>
                          <p className="text-sm">
                            <span className="font-medium">स्थान:</span> {event.venue}
                          </p>
                          <p className="text-sm">
                            <span className="font-medium">समय:</span> {event.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;