import React from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiClock, FiCalendar, FiArrowUpRight } from "react-icons/fi";
import { articles } from "../data/articles";
import { getTheme } from "../data/themes";

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold">Article not found</h1>
        <p className="mt-3 text-slate-600">
          The article you're looking for doesn't exist.
        </p>
        <Link
          to="/knowledge-hub"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
        >
          <FiArrowLeft className="h-4 w-4" /> Back to Knowledge Hub
        </Link>
      </div>
    );
  }

  const theme = getTheme(article.category);
  const Icon = theme.icon;
  const related = articles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800">
      <header
        className={`relative overflow-hidden bg-gradient-to-br ${theme.gradient} text-white`}
        style={{ backgroundImage: theme.pattern, backgroundSize: "cover" }}
      >
        <Icon className="pointer-events-none absolute -bottom-14 -right-12 h-72 w-72 text-white/10" />
        <Icon className="pointer-events-none absolute -top-8 -left-8 h-40 w-40 text-white/5" />

        <div className="relative mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20 lg:py-24">
          <Link
            to="/knowledge-hub"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur ring-1 ring-white/20 transition hover:bg-white/20"
          >
            <FiArrowLeft className="h-4 w-4" /> Knowledge Hub
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur ring-1 ring-white/25">
              <Icon className="h-3.5 w-3.5" /> {article.category}
            </span>
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
            {article.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            {article.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80">
            <span className="flex items-center gap-2">
              <FiClock className="h-4 w-4" /> {article.readTime} min read
            </span>
            <span className="flex items-center gap-2">
              <FiCalendar className="h-4 w-4" /> {article.date}
            </span>
            <span className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-[10px] font-bold ring-1 ring-white/30">
                V
              </span>
              By {article.author}
            </span>
          </div>
        </div>
      </header>

      <div className="relative z-10 mx-auto -mt-8 max-w-4xl px-4 pb-16 md:px-6 lg:px-8">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-8 md:p-10">
          <div className="space-y-7 text-lg leading-8 text-slate-700 md:text-xl md:leading-9">
            {article.content.map((block, index) => {
              if (block.type === "h2") {
                return (
                  <div key={`${block.text}-${index}`} className="pt-4">
                    <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                      <span className={`inline-block h-8 w-1.5 rounded-full bg-gradient-to-b ${theme.gradient}`} />
                      <span>{block.text}</span>
                    </h2>
                  </div>
                );
              }

              if (block.type === "ul") {
                return (
                  <ul
                    key={`${block.type}-${index}`}
                    className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-base md:text-lg"
                  >
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className={`mt-2.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br ${theme.gradient}`} />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }

              return (
                <p key={`${block.type}-${index}`} className="text-slate-700">
                  {block.text}
                </p>
              );
            })}
          </div>

          <div className="mt-12 border-t border-slate-200 pt-6">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className={`rounded-full ${theme.chipBg} ${theme.chipText} px-3 py-1.5 text-xs font-semibold md:text-sm`}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="border-t border-slate-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  Continue reading
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                  Related articles
                </h2>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a) => {
                const rTheme = getTheme(a.category);
                const RIcon = rTheme.icon;

                return (
                  <Link
                    key={a.slug}
                    to={`/knowledge-hub/${a.slug}`}
                    className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-200 hover:-translate-y-1 hover:border-transparent hover:shadow-xl ${rTheme.glow}`}
                  >
                    <div className={`h-2 bg-gradient-to-r ${rTheme.gradient}`} />
                    <div className="p-5">
                      <div className="flex items-center gap-2">
                        <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${rTheme.gradient} text-white`}>
                          <RIcon className="h-4 w-4" />
                        </div>
                        <span className={`text-[11px] font-bold uppercase tracking-[0.18em] ${rTheme.accent}`}>
                          {a.category}
                        </span>
                      </div>

                      <h3 className="mt-4 text-xl font-bold leading-snug text-slate-900">
                        {a.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">
                        {a.excerpt}
                      </p>

                      <span className={`mt-5 inline-flex items-center gap-1 text-sm font-semibold ${rTheme.accent}`}>
                        Read article <FiArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </article>
  );
};

// This is the export that was missing before!
export default ArticleDetail; 