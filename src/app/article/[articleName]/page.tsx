export default async function ArticlePage({params}: Params) {
    const { articleName } = await params;
    return (
        <div>
            Article page: {articleName}
        </div>
    );
}