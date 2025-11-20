import React from 'react';
import { useSettings } from '../contexts/SettingsContext';

export const Courses: React.FC = () => {
  const { t } = useSettings();

  // Design based on Screenshot 2: Colorful Cards
  const courses = [
    {
      id: 'applicants',
      title: t.course_applicants_title,
      description: t.course_applicants_desc,
      bgColor: 'bg-[#FCD385]', // Orange/Yellowish
      textColor: 'text-[#4a3b25]',
    },
    {
      id: 'school',
      title: t.course_school_title,
      description: t.course_school_desc,
      bgColor: 'bg-[#D8D4F2]', // Lavender
      textColor: 'text-[#362f5e]',
    },
    {
      id: 'hobby',
      title: t.course_hobby_title,
      description: t.course_hobby_desc,
      bgColor: 'bg-[#bbf7d0]', // Light Green
      textColor: 'text-[#14532d]',
    }
  ];

  return (
    <section id="courses" className="py-12 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vertical Stack of Cards as per Screenshot 2 */}
        <div className="space-y-6">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className={`${course.bgColor} p-8 md:p-10 rounded-[2rem] shadow-sm hover:scale-[1.02] transition-transform duration-300 cursor-pointer`}
            >
              <h3 className={`text-3xl font-extrabold ${course.textColor} mb-4`}>
                {course.title}
              </h3>
              <p className={`text-lg md:text-xl font-medium ${course.textColor} opacity-90 leading-relaxed max-w-2xl`}>
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};