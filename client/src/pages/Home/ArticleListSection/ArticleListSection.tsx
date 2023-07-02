import { Col, Empty } from "antd";
import { useArticleListSection } from "./useArticleListSection"
import { CardItem } from "./components/CardItem";
import './ArticleListSection.scss'
import { Article } from "../../services/interfaces";



export const ArticleListSection = () => {
    const { articles } = useArticleListSection();

    if (articles.length === 0) {
        return (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )
    }

    return (<div className="row">
        {articles?.map((article: Article, index: number) => (
            <Col xs={24} md={10} xl={5} key={index}>
                <CardItem title={article.title}
                    key={index}
                    imageUrl={article.imageUrl}
                    price={article?.price} />
            </Col>
        ))}
    </div>);
}