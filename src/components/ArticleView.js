"use client";

import React from 'react';

const ArticleView = ({ article }) => {
  if (!article) return (
    <div className="p-10 text-center text-slate-500 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
      <p>Article content not available.</p>
    </div>
  );

  const { title, content, author, date, img, category, tags } = article;

  return (
    <article className="  mx-auto bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden m-6">
      {/* Hero Image Section */}
      {img && (
        <div className="relative w-full h-[350px] sm:h-[450px] overflow-hidden group">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {category && (
            <div className="absolute top-5 left-5 bg-teal-600/90 backdrop-blur-sm text-white text-xs font-black px-4 py-2 rounded-lg shadow-lg uppercase tracking-wider">
              {category}
            </div>
          )}
          {/* Subtle gradient overlay for depth */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>
      )}

      <div className="p-6 sm:p-10 lg:p-12">
        {/* Title & Metadata */}
        <header className="mb-8 border-b border-slate-100 pb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-800 leading-[1.2] mb-8">
            {title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 font-bold text-xl border border-teal-100 shadow-sm">
                {author ? author.charAt(0).toUpperCase() : 'RC'}
              </div>
              <div>
                <p className="text-base font-bold text-slate-800">{author || 'राचित चेतना डेस्क'}</p>
                <div className="flex items-center gap-2 text-sm text-slate-500 font-medium mt-0.5">
                  <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  {date || 'हाल ही में प्रकाशित'}
                </div>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-2.5">
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest mr-1">
                Share
              </span>

              {/* WhatsApp */}
              <button
                className="w-10 h-10 rounded-full bg-slate-50 hover:bg-green-600 hover:scale-110 border border-slate-100 hover:border-green-600 flex items-center justify-center text-green-600 hover:text-white transition-all shadow-sm"
                title="Share on WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.002 1.298.393 2.536 1.146 3.568l-.934 3.4 3.465-.921a5.72 5.72 0 002.091.397h.001c3.18 0 5.767-2.585 5.767-5.766 0-3.18-2.586-5.767-5.768-5.767zm3.22 8.327c-.135.381-.787.728-1.077.749-.244.018-.616.091-1.921-.448-1.579-.652-2.617-2.261-2.695-2.366-.078-.104-.643-.857-.643-1.632 0-.775.404-1.157.545-1.3.136-.139.3-.173.398-.173s.199.002.285.006c.092.004.218-.035.342.26.128.305.438 1.066.477 1.144.039.078.065.17.013.272-.052.102-.078.167-.156.257-.078.09-.164.2-.234.281-.078.09-.168.188-.078.343.089.155.398.665.856 1.072.593.528 1.096.694 1.25.772.156.078.246.065.343-.046.096-.111.415-.483.528-.649.112-.166.223-.138.366-.084.143.054.912.43 1.068.508.156.078.26.117.299.182.039.065.039.382-.096.763z" />
                </svg>
              </button>

              {/* X (reference – unchanged) */}
              <button
                className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-900 hover:scale-110 border border-slate-100 hover:border-slate-800 flex items-center justify-center text-slate-700 hover:text-white transition-all shadow-sm"
                title="Share on X"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>

              {/* Facebook */}
              <button
                className="w-10 h-10 rounded-full bg-slate-50 hover:bg-blue-600 hover:scale-110 border border-slate-100 hover:border-blue-600 flex items-center justify-center text-blue-600 hover:text-white transition-all shadow-sm"
                title="Share on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <div className="text-[17px] sm:text-[19px] text-slate-700 leading-[1.8] space-y-6 mb-12">
          {typeof content === 'string' ? (
            <div
              className="whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          ) : (
            content
          )}
        </div>

        {/* Footer / Tags */}
        {tags && tags.length > 0 && (
          <div className="pt-8 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
              संबंधित विषय (Tags)
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {tags.map((tag, idx) => (
                <span key={idx} className="bg-slate-50 hover:bg-teal-50 hover:text-teal-700 text-slate-600 px-4 py-1.5 rounded-lg text-[13px] font-bold cursor-pointer transition-colors border border-slate-200 hover:border-teal-200 shadow-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default ArticleView;
