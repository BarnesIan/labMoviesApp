import React, { useContext } from "react"
import PageTemplate from "../components/templateActorsListPage"
import { ActorsContext } from "../contexts/actorsContext"
import { useQueries } from "react-query"
import { getActor } from "../api/tmdb-api"
import Spinner from "../components/spinner"
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites"


const FavouriteActorsPage = () => {
    const {favourites: actorIds} = useContext(ActorsContext);

    const favouriteActorQueries = useQueries(
        actorIds.map((actorId) => {
            return {
                queryKey: ["actor", { id: actorId }],
                queryFn: getActor,
            };
        })
    );

    const isLoading = favouriteActorQueries.find((m) => m.isLoading === true);

    if (isLoading)
        return <Spinner />;

    const actors = favouriteActorQueries.map((q) => {
        return q.data
    });

    const toDo = () => true;

    return (
        <PageTemplate
            title="Favourite Actors"
           actors={actors}
            action={(actor) => {
                return (
                    <>
                        <RemoveFromFavourites actor={actor} />
                        
                    </>
                )
            }}
        />
    );
};
export default FavouriteActorsPage;