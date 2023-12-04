export const getSingleNews = async (id) => {
    try {
        const res = await fetch(
            `https://the-news-portal-server.vercel.app/news/${id}`,
            {
                cache: "no-store",
            }
        );

        if (!res.ok) {
            throw new Error(`Failed to fetch data. Status: ${res.status}`);
        }

        return res.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        // You can return a default value or rethrow the error here
        throw error;
    }
};
