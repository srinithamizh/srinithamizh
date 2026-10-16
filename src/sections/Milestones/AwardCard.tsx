import { Card, Icon } from "@/components/ui";
import type { Award } from "@/types";
import { formatMonthYear, isoMonth } from "@/utils/date";

export default function AwardCard({ award }: { award: Award }) {
  const { title, from, year, month, icon, event, url} = award;

  return (
    // `relative` + the stretched link below make the whole tile clickable when a url exists.
    <Card as="article" interactive className="group relative flex h-full flex-col gap-6 p-[25px]">
      <span className="grid size-12 place-items-center rounded-xl border border-line bg-accent-soft text-accent">
        <Icon name={icon} size={22} />
      </span>
      <div className="flex flex-1 flex-col gap-2">
        <h3 className="font-display text-[19px] leading-[1.35] font-semibold">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} (opens in a new tab)`}
              className="after:absolute after:inset-0 after:rounded-[14px]"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        {event && <h3 className="font-display text-[15px] leading-[1.35] font-semibold">{event}</h3>}
        <p className="text-[13px] text-muted">
          by <span className="text-accent">{from}</span>
        </p>
      </div>
      <div className="flex items-center justify-between gap-4">
        <time
          dateTime={isoMonth(year, month)}
          className="font-mono text-[12px] font-medium tracking-[.12em] text-muted uppercase"
        >
          {formatMonthYear(year, month)}
        </time>
        {url && (
          <span
            aria-hidden="true"
            className="flex items-center gap-1.5 font-mono text-[11px] font-medium tracking-[.08em] text-muted uppercase transition-colors duration-200 group-hover:text-accent"
          >
            View <Icon name="external" size={14} />
          </span>
        )}
      </div>
    </Card>
  );
}
