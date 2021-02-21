import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

const Comics = () => {
    const [dataComics, getDataComics] = useState({});
    const [search, getSearch] = useState("");
    const [paging, getPaging] = useState(0);
    const [isLoading, getIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3100/comics?page=${paging}&search=${search}`
                );
                getDataComics(response.data);
                getIsLoading(false);
            } catch (error) {
                alert(error.message);
            }
        };
        fetchData();
    }, [paging, search]);

    const handleClickOfPaging = (page) => {
        const numberOfPage = dataComics.count / 100;
        if (page === "next" && paging < Math.floor(numberOfPage)) {
            getPaging(paging + 1);
        }
        if (page === "last" && paging > 1) {
            getPaging(paging - 1);
        }
    };

    return isLoading ? (
        <section className="sectionCard comics isLoading"></section>
    ) : (
        <>
            <section className="sectionCard comics">
                <input
                    type="search"
                    placeholder="Recherche ton comics"
                    onChange={(e) => getSearch(e.target.value)}
                />
                <div className="sectionCard comics">
                    {dataComics.results.map((comic) => {
                        return <Card key={comic._id} dataCard={comic} />;
                    })}
                    <div>
                        <button onClick={() => handleClickOfPaging("previous")}>
                            previous
                        </button>
                        <button onClick={() => handleClickOfPaging("next")}>
                            next
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Comics;
