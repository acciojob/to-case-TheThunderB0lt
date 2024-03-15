function toCase(text) {
    if (!text || text.length === 0) {
        return '-';
    }

    const lowerCase = text.toLowerCase();
    const upperCase = text.toUpperCase();

    return lowerCase + '-' + upperCase;
}