const createDetailPageUrl = (title: string) => {
    return `/detail/${title.replace(/\s+/g, '-').toLowerCase()}`;
}

export default createDetailPageUrl;