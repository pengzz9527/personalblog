import React from 'react';
import { Github, Mail, Linkedin, Twitter, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    '技术分类': [
      { name: 'VBA 自动化', href: '#vba' },
      { name: 'Oracle APEX', href: '#apex' },
      { name: 'AI 技术', href: '#ai' },
      { name: '数据分析', href: '#data-analysis' }
    ],
    '资源': [
      { name: '精选文章', href: '#featured' },
      { name: '学习路径', href: '#learning' },
      { name: '项目案例', href: '#projects' },
      { name: '工具推荐', href: '#tools' }
    ],
    '关于': [
      { name: '个人简介', href: '#about' },
      { name: '联系方式', href: '#contact' },
      { name: '友情链接', href: '#links' },
      { name: 'RSS 订阅', href: '#rss' }
    ]
  };

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="h-5 w-5" />, href: '#' },
    { name: '邮箱', icon: <Mail className="h-5 w-5" />, href: 'mailto:contact@example.com' },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, href: '#' },
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              TechBlog
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              专注于VBA自动化、Oracle APEX开发和AI技术的实战分享，
              帮助开发者提升技能，解决实际问题。
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter subscription */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-xl font-semibold mb-4">订阅技术更新</h4>
            <p className="text-gray-300 mb-6">
              获取最新的技术文章和实战经验分享
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="输入你的邮箱地址"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-2">
                订阅
              </Button>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-300">技术文章</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">10K+</div>
              <div className="text-gray-300">总阅读量</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-300">帮助开发者</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">2年+</div>
              <div className="text-gray-300">分享经验</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-300 mb-4 md:mb-0">
              <span>© {currentYear} TechBlog. </span>
              <span className="flex items-center ml-1">
                Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by 技术博主
              </span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#privacy" className="text-gray-300 hover:text-white transition-colors duration-200">
                隐私政策
              </a>
              <a href="#terms" className="text-gray-300 hover:text-white transition-colors duration-200">
                使用条款
              </a>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-gray-300 hover:text-white hover:bg-gray-800"
              >
                <ArrowUp className="h-4 w-4 mr-1" />
                回到顶部
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating back to top button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="回到顶部"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </footer>
  );
};

export default Footer;

