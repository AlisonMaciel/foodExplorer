import { Container, Section } from "./styles.js";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SideMenu } from "../../components/SideMenu";

import { useEffect, useState } from "react";
import { api } from "../../server/index.js";
import { useNavigate } from "react-router-dom";

export function Favorites() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [favorites, setFavorites] = useState([]);

    const [data, setData] = useState([]);
    const items = [...data];

    const [isLoaded, setIsLoaded] = useState(false);

    const navigate = useNavigate()

    function handleRemove(dish) {
        setFavorites((prevState) =>
            prevState.filter((orders) => orders.name !== dish.name)
        );
    }

    useEffect(() => {
        const favorites = localStorage.getItem("@favorites");

        if (favorites) {
            setFavorites(JSON.parse(favorites));
        }

        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("@favorites", JSON.stringify(favorites));
        }
    }, [favorites, isLoaded]);

    useState(() => {
        const dish = localStorage.getItem("@dish");

        if (dish) {
            setData(JSON.parse(dish));
        }
    }, []);

    return (
        <Container>
            <SideMenu
                menuIsOpen={menuIsOpen}
                onClosedMenu={() => setMenuIsOpen(false)}
            />
            <Header
                onOpenMenu={() => setMenuIsOpen(true)}
                order={items.length}
                quantity={items.length}
            />
            <div>
                <h1 className="h1-div">Meus favoritos</h1>
                <Section>
                    <h1>Meus favoritos</h1>
                    {favorites &&
                        favorites.map((dish) => (
                            <div className="orders" key={dish.id}>
                                <img
                                    src={`${api.defaults.baseURL}/files/${dish.img}`}
                                    alt={dish.name}
                                />
                                <div>
                                    <span onClick={navigate(`/details/${dish.id}`)}>
                                      {dish.name}
                                    </span>
                                    <button onClick={() => handleRemove(dish)}>
                                        Remover dos Favoritos
                                    </button>
                                </div>
                            </div>
                        ))}
                </Section>
            </div>
            <Footer />
        </Container>
    );
}
