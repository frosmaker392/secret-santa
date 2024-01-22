const generateRandomId = (): string => {
    const array = new Uint8Array(8);
    window.crypto.getRandomValues(array);

    return Array.from(array, (num) => num.toString(16).padStart(2, '0')).join(
        '',
    );
};

export default generateRandomId;
