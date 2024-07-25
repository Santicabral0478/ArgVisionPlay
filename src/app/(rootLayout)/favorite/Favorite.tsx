"use client"
import { useState, useEffect } from "react";
import { GetFavoriteProfile } from "../../../../utils/GetFavoriteProfile/GetFavoriteProfile";
import { IContent } from "../content/Content";
import { useUserContext } from "@/components/context";
import Link from "next/link";
import Image from "next/image";
import { DeleteFavorite } from "../../../../utils/DeleteFavorite/DeleteFavorite";
import SecLoader from "@/components/SecLoader";

export const Favorite = () => {
    const { idUser, token } = useUserContext();
    const userId = idUser;
    const [allContentFavorite, setAllContentFavorite] = useState<IContent[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const handleDeleteFavorite = async (movieId: string) => {
        try {
            const resultRemove = await DeleteFavorite(movieId, userId, token);
            setAllContentFavorite(resultRemove);
        } catch (error) {
            console.error("Error al eliminar los datos del perfil:", error);
        }
    }

    useEffect(() => {
        const fetchContentData = async () => {
            try {
                const data: IContent[] = await GetFavoriteProfile(userId, token);
                setAllContentFavorite(data);
            } catch (error) {
                console.error("Error al obtener los datos del perfil:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchContentData();
    }, [userId, token]);

    if (isLoading) {
        return <SecLoader />;
    }

    if (!allContentFavorite || allContentFavorite.length === 0) {
        return (
            <section className="no-there-fav">
                <h1>No favorites...</h1>
            </section>
        );
    }

    return (
        <section className="favorite">
            <div className="container">
                <div className="space-white-cont"></div>
                <div className="title-wrapper">
                    <h2 className="h2 section-title">Favorites list</h2>
                </div>
                <div className="space-two-cont"></div>
                <ul className="movies-list has-scrollbar">
                    {allContentFavorite.map((content) => (
                        <li key={content._id}>
                            <div className="movie-card">
                                <figure className="card-banner">
                                    <Image width={250} height={250} src={content.poster} alt="ccc" />
                                    <button onClick={() => handleDeleteFavorite(content._id)} className="bin-button">
                                        <svg className="bin-top" viewBox="0 0 39 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1="5" x2="39" y2="5" stroke="white" strokeWidth="4"></line>
                                            <line x1="12" y1="1.5" x2="26.0357" y2="1.5" stroke="white" strokeWidth="3"></line>
                                        </svg>
                                        <svg className="bin-bottom" viewBox="0 0 33 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="path-1-inside-1_8_19" fill="white">
                                                <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
                                            </mask>
                                            <path d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z" fill="white" mask="url(#path-1-inside-1_8_19)"></path>
                                            <path d="M12 6L12 29" stroke="white" strokeWidth="4"></path>
                                            <path d="M21 6V29" stroke="white" strokeWidth="4"></path>
                                        </svg>
                                    </button>
                                </figure>
                                <div className="title-wrapper">
                                    <h3 className="card-title">{content.title}</h3>
                                    <Link href={`content/${content._id}`}>
                                        <h3 className="card-title">Watch now</h3>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Favorite;
