import { useEffect } from "react";

interface Heading {
  depth: number;
  slug: string;
  text: string;
}

interface Props {
  headings: Heading[];
  className?: string;
}

export default function TableOfContents({ headings, className }: Props) {
  // Normalize depth so the smallest depth starts at 0
  const minDepth = Math.min(...headings.map((h) => h.depth));
  const normalized = headings.map((h) => ({
    ...h,
    depth: h.depth - minDepth,
  }));

  useEffect(() => {
    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".toc-link")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).id;
          const link = links.find((l) => l.dataset.slug === id);

          if (entry.isIntersecting) {
            links.forEach((l) =>
              l.classList.remove("!text-blue-700", "font-semibold")
            );
            link?.classList.add("!text-blue-700", "font-semibold");
          }
        });
      },
      {
        rootMargin: "0px 0px -70% 0px",
        threshold: 0.1,
      }
    );

    // Observe headings in the document
    links.forEach((link) => {
      const el = document.getElementById(link.dataset.slug || "");
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`shrink-0 sticky overflow-y-auto ${className ?? ""}`}>

      <p className="text-sm font-semibold mb-3 text-gray-900">
        On this page
      </p>

      <ul className="space-y-1 text-sm">
        {normalized.map((h) => (
          <li
            key={h.slug}
            className="transition-colors"
            style={{ marginLeft: `${h.depth * 0.75}rem` }}
          >
            <a
              href={`#${h.slug}`}
              className="block py-1 text-gray-600 hover:text-gray-900 toc-link"
              data-slug={h.slug}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>

    </nav>
  );
}
