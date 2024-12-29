export function formatNumber(num) {
    return Intl.NumberFormat("en-US", {
        maximumFractionDigits: 2,
        compactDisplay: "short",
        notation: "compact",
        style: "decimal",
    }).format(num);
}
