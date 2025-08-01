import React from 'react';
import { User, Code, Award, Heart, Github, Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const skills = [
    {
      category: 'VBA & Office 自动化',
      items: ['Excel 宏开发', 'Word 自动化', 'PowerPoint 脚本', 'Access 数据库'],
      level: 90
    },
    {
      category: 'Oracle APEX 开发',
      items: ['Web 应用开发', 'PL/SQL 编程', '数据库设计', 'REST API 集成'],
      level: 85
    },
    {
      category: 'AI & 机器学习',
      items: ['Python 数据科学', 'TensorFlow/PyTorch', '自然语言处理', '计算机视觉'],
      level: 80
    },
    {
      category: '数据分析',
      items: ['SQL 查询优化', 'Power BI', 'Tableau', '统计分析'],
      level: 88
    }
  ];

  const achievements = [
    {
      icon: <Code className="h-6 w-6" />,
      title: '50+ 技术文章',
      description: '分享实战经验和技术心得'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: '10+ 企业项目',
      description: '成功交付多个自动化解决方案'
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: '1000+ 开发者',
      description: '帮助解决技术问题和职业发展'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <User className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              关于我
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            一个热爱技术分享的开发者，专注于提升工作效率和解决实际问题
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Personal info */}
          <div>
            {/* Profile card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-6">
                  TB
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    技术博主
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    VBA & Oracle APEX & AI 开发者
                  </p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                我是一名专注于办公自动化和企业级应用开发的技术人员，拥有多年的VBA、Oracle APEX和AI技术实战经验。
                通过这个博客，我希望能够分享我在技术学习和项目实践中的心得体会，帮助更多的开发者提升技能，
                解决实际工作中遇到的问题。
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                我相信技术的价值在于解决实际问题，提升工作效率。无论是Excel的自动化处理，
                还是企业级Web应用的快速开发，亦或是AI技术在业务场景中的应用，
                我都致力于将复杂的技术用简单易懂的方式分享给大家。
              </p>

              {/* Social links */}
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="h-4 w-4 mr-2" />
                  邮箱
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-3 flex justify-center">
                    {achievement.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              技能专长
            </h3>
            
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {skill.category}
                    </h4>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  
                  {/* Skill items */}
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-2">
                想要合作或交流？
              </h4>
              <p className="mb-4 opacity-90">
                如果你有技术问题需要讨论，或者想要合作开发项目，欢迎随时联系我！
              </p>
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Mail className="h-4 w-4 mr-2" />
                联系我
              </Button>
            </div>
          </div>
        </div>

        {/* Timeline section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            我的技术成长历程
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-800"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                      <h4 className="font-semibold text-gray-900 dark:text-white">开始VBA学习</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">从Excel宏录制开始，逐步深入VBA编程</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>
                  <div className="flex-1 pl-8">
                    <span className="text-sm text-gray-500 dark:text-gray-400">2022年</span>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <span className="text-sm text-gray-500 dark:text-gray-400">2023年</span>
                  </div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>
                  <div className="flex-1 pl-8">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                      <h4 className="font-semibold text-gray-900 dark:text-white">接触Oracle APEX</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">开始学习低代码开发平台，构建企业应用</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                      <h4 className="font-semibold text-gray-900 dark:text-white">深入AI领域</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">学习机器学习和深度学习，应用于实际项目</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>
                  <div className="flex-1 pl-8">
                    <span className="text-sm text-gray-500 dark:text-gray-400">2024年</span>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <span className="text-sm text-gray-500 dark:text-gray-400">现在</span>
                  </div>
                  <div className="w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>
                  <div className="flex-1 pl-8">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                      <h4 className="font-semibold text-gray-900 dark:text-white">技术博客分享</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">持续分享技术经验，帮助更多开发者成长</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

