import { Revenue } from "./definitions";

export const formatCurrency = (amount: number) => {
  return (amount / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const formatDate = (dateStr: string, locale: string = "en-US") => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  const formatter = new Intl.DateTimeFormat(locale, options);

  return formatter.format(date);
};

export const generateYAxis = (revenu: Revenue[]) => {
  const yAsisLabels = [];
  const highestRecord = Math.max(...revenu.map((month: any) => month.revenue));
  const topLabel = Math.ceil(highestRecord / 1000);

  for (let i = topLabel; i >= 0; i -= 1000) {
    yAsisLabels.push(`$${i / 1000}K`);
  }

  return { yAsisLabels, topLabel };
};

export const generatePagination = (currentPage: number, totalPages: number) => {
if(totalPages <= 7) {
    return Array.from({length: totalPages}, (_, i) => i + 1)
}

if(currentPage >= totalPages -2 ){
    return [1, 2, "...", totalPages -2, totalPages -1]
}

return [
    1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages
]
}