interface Amount {
    amount: number;
}

const FormattedPrice = ({ amount }: Amount) => {
    const fromatedtAmount = new Number(amount).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2,
    });
    return <span>{fromatedtAmount}</span>;
};

export default FormattedPrice;
