import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { articles } from "../data/articles";
import { getTheme, themes } from "../data/themes";

const categories = ["All", ...new Set(articles.map((article) => article.category))];

const Knowledge = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("service") || "All";
  const [activeCategory, setActiveCategory] = useState(
    categories.includes(initialCategory) ? initialCategory : "All"
  );

  const filteredArticles = useMemo(() => {
    if (activeCategory === "All") return articles;
    return articles.filter((article) => article.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-slate-50 text-slate-800">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
              Knowledge Hub
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Insights for smarter digital decisions
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Practical guidance on software, web strategy, automation, AI, APIs,
              and cloud systems — designed for founders and teams growing with
              technology.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            const theme = category === "All" ? null : themes[category];

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  isActive
                    ? category === "All"
                      ? "bg-slate-900 text-white"
                      : `bg-gradient-to-r ${theme.gradient} text-white shadow-md`
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredArticles.map((article) => {
            const theme = getTheme(article.category);
            const Icon = theme.icon;

            return (
              <Link
                key={article.slug}
                to={`/knowledge-hub/${article.slug}`}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
              >
                <div className={`h-2 bg-gradient-to-r ${theme.gradient}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${theme.gradient} text-white`}>
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className={`text-xs font-bold uppercase tracking-[0.18em] ${theme.accent}`}>
                        {article.category}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500">{article.readTime} min</span>
                  </div>

                  <h2 className="mt-5 text-xl font-bold leading-snug text-slate-900">
                    {article.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {article.excerpt}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full ${theme.chipBg} ${theme.chipText} px-2.5 py-1 text-[11px] font-medium`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-sm text-slate-500">
                    <span>{article.date}</span>
                    <span className="font-semibold text-slate-800 group-hover:text-indigo-600">
                      Read article →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Knowledge;
