export function formatMoney(price) {
    return Intl.NumberFormat("en-us", {
        style: "currency",
        currency: "USD",
    }).format(price);
}
