import React from 'react';
import { Star } from 'lucide-react';
import ArticleCard from './ArticleCard';
import { getFeaturedArticles } from '../data/articles';

const FeaturedArticles = () => {
  const featuredArticles = getFeaturedArticles();

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Star className="h-6 w-6 text-yellow-500 mr-2" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              精选文章
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            深度技术分享，实战经验总结，帮助你在技术路上走得更远
          </p>
        </div>

        {/* Featured articles grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredArticles.slice(0, 2).map((article) => (
            <ArticleCard key={article.id} article={article} featured={true} />
          ))}
        </div>

        {/* Additional featured article */}
        {featuredArticles.length > 2 && (
          <div className="max-w-4xl mx-auto">
            <ArticleCard article={featuredArticles[2]} featured={true} />
          </div>
        )}

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              想要获取更多技术干货？
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              订阅我的博客，第一时间获取最新的技术文章和实战经验分享
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="输入你的邮箱地址"
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                订阅更新
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;

