const convertBytes = (value) => {
    if (value === 0) return 0;

    const bytes = parseInt(Math.floor(Math.log(value) / Math.log(1024)));
    const bytesSize = `${Math.round(value / Math.pow(1024, bytes), 2)}`;

    return (
        bytesSize + ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'][bytes]
    );
};

module.exports = { convertBytes };
