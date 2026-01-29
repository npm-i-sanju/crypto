// format a number as currency default : USD

export const formatCurrency = (value, currency= 'USD', decimals=2)=>{
if (!value && value !== 0) return '-';

// use intl.numberformat for proper formatting
    return new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: currency,
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,

    }).format(value);

}

// format large numbers into compact form (K, M, B, T)

export const formatCompactNumber= (value)=>{
    if (!value && value !== 0) return '-';
    // convart number into readable format

    if (value>= 1e12) return `$${(value/1e12).toFixed(2)}T`// trillion
    if (value >= 1e9) return `$${(value/1e9).toFixed(2)}B`// billion
    if (value >= 1e6) return `$${(value/1e6).toFixed(2)}M`// million
    if (value >= 1e3) return `$${(value/1e3).toFixed(2)}K`// thousand

    // return normal if less than 1000
    return `$${value.toFixed(2)}`;
}

// format number as percentage

export const formatPercentage= (value, decimals)=>{
    // handle null or undefined
    if (!value && value !== 0) return '-';
    const sign = value >= 0 ? '+': '';
    return `${sign}${value.toFixed(decimals)}%`;
}
// format number with commas and fixed decimals
 export const formatNumber = (value, decimals=2)=>{
if (!value && value !== 0) return '-';
return new Intl.NumberFormat('en-US',{
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
}).format(value);
 }