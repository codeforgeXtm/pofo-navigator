import { posts } from "@/data/posts";

const NewsletterSection = () => {
  return (
    <section id="updates" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
              Updates
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              Latest News
            </h2>
          </div>

          <div className="space-y-8">
            {posts.map((post, index) => (
              <article
                key={post.id}
                className="group border-b border-border/50 pb-8 last:border-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <time className="text-xs uppercase tracking-widest text-muted-foreground">
                  {post.date}
                </time>
                <h3 className="text-xl md:text-2xl font-light mt-2 mb-3 group-hover:text-primary/80 transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
