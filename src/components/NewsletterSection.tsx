import { posts } from "@/data/posts";

const NewsletterSection = () => {
  return (
    <section id="updates" className="py-24 md:py-32 bg-dark">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.3em] text-dark-foreground/50 mb-4 block">
              Updates
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-dark-foreground">
              Latest News
            </h2>
          </div>

          <div className="space-y-8">
            {posts.map((post, index) => (
              <article
                key={post.id}
                className="group border-b border-dark-foreground/10 pb-8 last:border-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <time className="text-xs uppercase tracking-widest text-dark-foreground/50">
                  {post.date}
                </time>
                <h3 className="text-xl md:text-2xl font-light mt-2 mb-3 text-dark-foreground group-hover:text-primary/80 transition-colors">
                  {post.title}
                </h3>
                <p className="text-dark-foreground/70 leading-relaxed">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
