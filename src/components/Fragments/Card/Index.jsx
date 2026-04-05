import { ArrowRight } from "lucide-react";

const Card = ({ image, title, description, href = "#" }) => {
  const batasKarakter = 100;

  return (
    <article className="flex h-full flex-col rounded-2xl bg-white/6 border border-white/12 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 p-6">
      <img
        src={image}
        alt={title}
        width={500}
        className="aspect-3/2 w-full rounded-xl object-cover brightness-85"
      />

      <h3 className="mt-4 mb-2 text-white leading-snug text-lg font-semibold">
        {title}
      </h3>

      <p className="mb-4 text-sm text-white/50 leading-relaxed text-justify">
        {description.substr(0, batasKarakter) + "..."}
      </p>

      <a href={href} className="mt-auto">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400/90">
          Pelajari Selengkapnya
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </a>
    </article>
  );
};

export default Card;
