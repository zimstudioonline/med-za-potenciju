import { DocumentRenderer, type DocumentRendererProps } from "@keystatic/core/renderer";

/**
 * Tekst posta stiže iz CMS-a kao struktura, ne kao HTML — pa se svaki element
 * crta ovde, sopstvenim klasama. Time je nemoguće da neko kroz admin ubaci
 * proizvoljan HTML u stranicu.
 *
 * Naslovi su ograničeni na h2 i h3 u konfiguraciji, jer h1 pripada naslovu teksta.
 */
const renderers: DocumentRendererProps["renderers"] = {
  inline: {
    bold: ({ children }) => <strong className="font-bold text-foreground">{children}</strong>,
    italic: ({ children }) => <em className="italic">{children}</em>,
    link: ({ href, children }) => (
      <a
        href={href}
        /* Linkovi u tekstu su plavi, a ne narandžasti kao `primary` — narandžasta
           je boja dugmadi za kupovinu, pa je čitaocu jasnije kada je nešto link
           u tekstu a kada poziv na akciju. */
        className="font-medium text-blue-700 underline underline-offset-2 hover:no-underline dark:text-blue-400"
      >
        {children}
      </a>
    ),
  },
  block: {
    paragraph: ({ children }) => <p className="mb-5 text-muted-foreground">{children}</p>,
    heading: ({ level, children }) => {
      const Tag = `h${level}` as "h2" | "h3";
      return (
        <Tag
          className={
            level === 2
              ? "mt-12 mb-4 text-2xl font-black tracking-tight md:text-3xl"
              : "mt-8 mb-3 text-xl font-bold tracking-tight"
          }
        >
          {children}
        </Tag>
      );
    },
    list: ({ type, children }) => {
      const Tag = type === "ordered" ? "ol" : "ul";
      return (
        <Tag
          className={`mb-6 space-y-2 pl-6 text-muted-foreground ${
            type === "ordered" ? "list-decimal" : "list-disc"
          }`}
        >
          {children.map((child, index) => (
            <li key={index} className="leading-8">
              {child}
            </li>
          ))}
        </Tag>
      );
    },
    image: ({ src, alt }) => (
      <img
        src={src}
        alt={alt}
        /* Slike u tekstu su iste širine kao tekst; visina ide iz same slike, pa
           se grafike raznih odnosa ne izobličuju. */
        className="mb-8 mt-4 w-full rounded-[20px] border border-border"
      />
    ),
    blockquote: ({ children }) => (
      <blockquote className="mb-6 border-l-4 border-primary/40 pl-5 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
  },
};

export function PostBody({ document }: { document: DocumentRendererProps["document"] }) {
  return (
    <div className="mt-10 max-w-none text-lg leading-8">
      <DocumentRenderer document={document} renderers={renderers} />
    </div>
  );
}
