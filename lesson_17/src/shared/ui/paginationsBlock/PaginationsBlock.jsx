export function PaginationsBlock({ page, setPage, totalPages }) {
    return (
        <div
            className="
                flex items-center justify-center gap-4 
                p-3 mt-4 
                bg-[var(--cp-surface)] 
                rounded-lg 
                border border-[var(--cp-border)] 
                shadow-[var(--cp-glow-purple)]
            "
        >
            <button
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                disabled={page === 1}
                className="
                    px-3 py-1 rounded-md 
                    bg-[var(--cp-neon-pink)] 
                    text-[var(--cp-bg-0)] 
                    font-semibold 
                    transition 
                    hover:bg-[var(--cp-neon-purple)] 
                    hover:shadow-[var(--cp-glow-pink)] 
                    disabled:opacity-50 disabled:cursor-not-allowed
                "
            >
                Назад
            </button>

            <span
                className="
                    text-[var(--cp-text-main)] 
                    font-medium 
                    text-sm
                "
            >
                Сторінка {page} з {totalPages}
            </span>

            <button
                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                disabled={page === totalPages}
                className="
                    px-3 py-1 rounded-md 
                    bg-[var(--cp-neon-cyan)] 
                    text-[var(--cp-bg-0)] 
                    font-semibold 
                    transition 
                    hover:bg-[var(--cp-neon-blue)] 
                    hover:text-[var(--cp-text-main)] 
                    hover:shadow-[var(--cp-glow-cyan)] 
                    disabled:opacity-50 disabled:cursor-not-allowed
                "
            >
                Вперед
            </button>
        </div>
    )
}
