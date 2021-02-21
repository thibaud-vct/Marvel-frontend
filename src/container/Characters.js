import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

const Characters = () => {
    const [dataCharacter, getDataCharacter] = useState({});
    const [search, getSearch] = useState("");
    const [paging, getPaging] = useState(0);
    const [isLoading, getIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://marvel-api-vct.herokuapp.com?page=${paging}&search=${search}`
                );
                getDataCharacter(response.data);
                getIsLoading(false);
            } catch (error) {
                alert(error.message);
            }
        };
        fetchData();
    }, [paging, search]);

    const handleClickOfPaging = (page) => {
        const numberOfPage = dataCharacter.count / 100;
        if (page === "next" && paging < Math.floor(numberOfPage)) {
            getPaging(paging + 1);
        }
        if (page === "last" && paging > 1) {
            getPaging(paging - 1);
        }
    };

    return isLoading ? (
        <section className="sectionCard characters isLoading"></section>
    ) : (
        <>
            <section className="sectionCard characters">
                <input
                    type="search"
                    placeholder="Recherche ton personnage"
                    onChange={(e) => getSearch(e.target.value)}
                />
                <div className="sectionCard characters">
                    {dataCharacter.results.map((character) => {
                        return (
                            <Card key={character._id} dataCard={character} />
                        );
                    })}
                </div>
                <div>
                    <button onClick={() => handleClickOfPaging("previous")}>
                        previous
                    </button>
                    <button onClick={() => handleClickOfPaging("next")}>
                        next
                    </button>
                </div>
            </section>
        </>
    );
};
export default Characters;
