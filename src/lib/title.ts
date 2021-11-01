export default (title: string) => {
    return `${import.meta.env.DEV ? "(DEV) " : ""}${title} - GScale`;
};
