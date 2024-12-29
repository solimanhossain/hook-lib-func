export function formatAllDate(date) {
    return new Intl.DateTimeFormat("en-US", {
        dateStyle: "short",
    }).format(date);
}
