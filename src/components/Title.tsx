interface Props {
    children: React.ReactNode;
    className?: string;
}

const Title = ({ children, className }: Props) => {
    return (
        <div className={`text-[40px] font-semibold ${className}`}>
            {children}
        </div>
    );
};

export default Title;
