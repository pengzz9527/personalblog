import React, { useState } from 'react';
import { ChevronRight, Filter } from 'lucide-react';
import ArticleCard from './ArticleCard';
import { getAllArticles, getAllCategories } from '../data/articles';
import { Button } from '@/components/ui/button';

const CategorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [visibleCount, setVisibleCount] = useState(6);
  
  const allArticles = getAllArticles();
  const categories = ['全部', ...getAllCategories()];
  
  const filteredArticles = selectedCategory === '全部' 
    ? allArticles 
    : allArticles.filter(article => article.category === selectedCategory);
  
  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = filteredArticles.length > visibleCount;

  const getCategoryIcon = (category) => {
    const icons = {
      'VBA': '📊',
      'Oracle APEX': '🏢',
      'AI': '🤖',
      '数据分析': '📈',
      '职业发展': '🚀'
    };
    return icons[category] || '📝';
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Filter className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              技术文章
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            按技术领域分类，找到你感兴趣的内容
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setVisibleCount(6);
              }}
              className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category !== '全部' && (
                <span className="mr-2">{getCategoryIcon(category)}</span>
              )}
              {category}
              {category !== '全部' && (
                <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                  {allArticles.filter(article => article.category === category).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Load more button */}
        {hasMore && (
          <div className="text-center">
            <Button
              onClick={() => setVisibleCount(prev => prev + 6)}
              variant="outline"
              size="lg"
              className="px-8 py-3"
            >
              加载更多文章
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Empty state */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              暂无相关文章
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              该分类下还没有文章，请选择其他分类或稍后再来查看
            </p>
          </div>
        )}

        {/* Category highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-xl p-6">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              VBA 自动化
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Excel宏开发、自动化脚本、办公效率提升的实战经验分享
            </p>
            <div className="text-sm text-green-600 dark:text-green-400 font-medium">
              {allArticles.filter(article => article.category === 'VBA').length} 篇文章
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900 dark:to-red-800 rounded-xl p-6">
            <div className="text-3xl mb-4">🏢</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Oracle APEX
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              企业级Web应用开发、低代码平台应用、数据库集成最佳实践
            </p>
            <div className="text-sm text-red-600 dark:text-red-400 font-medium">
              {allArticles.filter(article => article.category === 'Oracle APEX').length} 篇文章
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-xl p-6">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              AI 技术
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              人工智能、机器学习、深度学习在实际项目中的应用经验
            </p>
            <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">
              {allArticles.filter(article => article.category === 'AI').length} 篇文章
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;

