import React from 'react';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ArticleCard = ({ article, featured = false }) => {
  const getCategoryColor = (category) => {
    const colors = {
      'VBA': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      'Oracle APEX': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      'AI': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      '数据分析': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      '职业发展': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  };

  if (featured) {
    return (
      <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
        <div className="p-8">
          {/* Category badge */}
          <div className="flex items-center justify-between mb-4">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
              {article.category}
            </span>
            {article.featured && (
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                精选
              </span>
            )}
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
            {article.title}
          </h2>

          {/* Excerpt */}
          <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
            {article.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>

          {/* Meta info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {article.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {article.readTime}
              </div>
            </div>
            <Button variant="ghost" size="sm" className="group-hover:bg-blue-50 dark:group-hover:bg-blue-900">
              阅读更多
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
      <div className="p-6">
        {/* Category badge */}
        <div className="flex items-center justify-between mb-3">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-2">
          {article.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {article.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Meta info */}
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {article.date}
          </div>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {article.readTime}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;

