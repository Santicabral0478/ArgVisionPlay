import { IContent } from "@/app/(rootLayout)/content/Content";
import Image from "next/image";

interface ContentCardProps {
  content: IContent;
}

export const ContentCard: React.FC<ContentCardProps> = ({ content }) => {

  return (
    <li key={content._id}>
      <a href={`/content/${content._id}`}>
        <div className="movie-card">
          <figure className="card-banner">
            <Image width={280} height={280} src={content.poster}  alt="ccc" ></Image>
          </figure>
          <div className="title-wrapper">
            <h3 className="card-title">{content.title}</h3>
            <time>{content.year}</time>
          </div>
          <div className="card-meta">
            <div className="badge badge-outline">HD</div>
            <div className="duration">
              <time>{content.duration}</time>
            </div>
            <div className="rating">
              <data>{content.rate}</data>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};

export default ContentCard;
