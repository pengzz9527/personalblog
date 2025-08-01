import React from 'react';
import { ArrowRight, Code, Database, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const skills = [
    {
      icon: <Code className="h-6 w-6" />,
      name: 'VBA',
      description: 'Excel自动化与宏开发'
    },
    {
      icon: <Database className="h-6 w-6" />,
      name: 'Oracle APEX',
      description: '企业级Web应用开发'
    },
    {
      icon: <Brain className="h-6 w-6" />,
      name: 'AI',
      description: '人工智能与机器学习'
    }
  ];

  return (
    <section id="home" className="pt-16 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            分享技术，
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              传递价值
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            专注于VBA自动化、Oracle APEX开发和AI技术的实战分享，
            帮助开发者提升技能，解决实际问题
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              onClick={() => window.location.href = '#articles'} 
              开始阅读
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              关于我
            </Button>
          </div>

          {/* Skills showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mb-4">
                    <div className="text-blue-600 dark:text-blue-400">
                      {skill.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300">技术文章</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10K+</div>
              <div className="text-gray-600 dark:text-gray-300">阅读量</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
              <div className="text-gray-600 dark:text-gray-300">技术领域</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2年+</div>
              <div className="text-gray-600 dark:text-gray-300">分享经验</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

