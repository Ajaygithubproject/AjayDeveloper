import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-[0_5px_10px_rgba(0,0,0,0.8)] hover:shadow-[0_0px_5px_rgba(0,0,0,0.9)] transition-shadow duration-300"
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-gray-100 rounded-lg shadow-md">
          <Icon size={24} className="text-gray-600" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
