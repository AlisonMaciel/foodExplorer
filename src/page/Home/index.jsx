import { useRef, useState, useEffect } from "react";

import { Container } from "./styles.js";

import { Header } from "../../components/Header/index.jsx";
import { Footer } from "../../components/Footer/index.jsx";
import { Card } from "../../components/Card/index.jsx";
import { Loading } from "../../components/Loading";

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import img from "../../assets/pngegg 1.svg";

import { SideMenu } from "../../components/SideMenu/index.jsx";

import { useNavigate } from "react-router-dom";

import { api } from "../../server/index.js";

import { useSearch } from "../../hooks/searchContext.jsx";

export function Home() {
    const mealsRef = useRef(null);
    const dessertsRef = useRef(null);
    const drinksRef = useRef(null);
    const [dataDrinks, setDataDrinks] = useState([]);
    const [dataDesserts, setDataDesserts] = useState([]);
    const [dataMeal, setDataMeal] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [quantities, setQuantities] = useState({});
    const { search } = useSearch();

    const navigate = useNavigate();

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const [number, setNumber] = useState(0);

    const [orders, setOrdwers] = useState([]);

    const items = [...orders];

    const scrollLeft = (ref) => {
        if (ref.current) {
            ref.current.scrollBy({ left: -200, behavior: "smooth" });
        }
    };

    const scrollRight = (ref) => {
        if (ref.current) {
            ref.current.scrollBy({ left: 200, bahavior: "smooth" });
        }
    };

    function handleAdd(newOrders) {
        setOrdwers((prevSatate) => {
            const exists = prevSatate.find(
                (order) => order.span === newOrders.span
            );

            if (exists) {
                return prevSatate.map((order) =>
                    order.span === newOrders.span
                        ? {
                              ...order,
                              quantity: order.quantity + newOrders.quantity,
                          }
                        : order
                );
            }

            return [...prevSatate, newOrders];
        });
    }

    function handleFavorites(dish) {
        setFavorites((prevState) => {
            const existFavorites = prevState.some(
                (favorites) => favorites.name === dish.name
            );

            let updateFavorites;

            if (existFavorites) {
                return prevState.filter(
                    (favorites) => favorites.name !== dish.name
                );
            } else {
                updateFavorites = [...prevState, dish];
            }

            localStorage.setItem("@favorites", JSON.stringify(updateFavorites));

            return updateFavorites;
        });
    }

    function handleCardClick(id) {
        navigate(`/details/${id}`);
    }

    const updateTotalQuantity = (newQuantities) => {
        const total = Object.values(newQuantities).reduce(
            (sum, qty) => sum + qty,
            0
        );
        setNumber(total);
    };

    const increaseQuantity = (id) => {
        setQuantities((prev) => {
            const newQuantity = (prev[id] || 0) + 1;
            const updatedQuantities = { ...prev, [id]: newQuantity };

            updateTotalQuantity(updatedQuantities);
            return updatedQuantities;
        });
    };

    const decreaseQuantity = (id) => {
        setQuantities((prev) => {
            if (!prev[id]) return prev;

            const newQuantity = prev[id] - 1;
            const updatedQuantities = { ...prev };

            if (newQuantity === 0) {
                delete updatedQuantities[id];
            } else {
                updatedQuantities[id] = newQuantity;
            }

            updateTotalQuantity(updatedQuantities);
            return updatedQuantities;
        });
    };
    useEffect(() => {
        async function lookForDishes() {
            const response = await api.get("/dish");
            setDataDrinks(
                response.data.filter(
                    (response) => response.category === "Bebidas"
                )
            );
            setDataDesserts(
                response.data.filter(
                    (response) => response.category === "Sobremesas"
                )
            );
            setDataMeal(
                response.data.filter(
                    (response) => response.category === "Refeição"
                )
            );
        }

        lookForDishes();
    }, []);

    useEffect(() => {
        localStorage.setItem("@dish", JSON.stringify(orders));
    }, [orders]);

    useEffect(() => {
        try {
            async function fetchData() {
                const endpoint = search ? `/dish?name=${search}` : "/dish";
                const response = await api.get(endpoint);
                setDataDesserts(
                    response.data.filter(
                        (response) => response.category === "Sobremesas"
                    )
                );
                setDataDrinks(
                    response.data.filter(
                        (response) => response.category === "Bebidas"
                    )
                );
                setDataMeal(
                    response.data.filter(
                        (response) => response.category === "Refeição"
                    )
                );
            }
            fetchData();
        } catch (error) {
            console.error("Erro ao buscar os pratos:", error);
            alert(`Não foi possível consultar o prato. Tente novamente`);
        }
    }, [search]);

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
            {dataDrinks && dataMeal && dataDesserts ? (
                <main>
                    <div className="Unmatched-flavors">
                        <img
                            src={img}
                            alt="Vários sabores em uma única imagem"
                        />

                        <div>
                            <span>Sabores inigualáveis</span>
                            <strong>
                                Sinta o cuidado do preparo com ingredientes
                                selecionados.
                            </strong>
                        </div>
                    </div>

                    <section className="meals">
                        <h2>Refeições</h2>
                        <div className="card-container" ref={mealsRef}>
                            {dataMeal &&
                                dataMeal.map((meal) => (
                                    <Card
                                        key={meal.id}
                                        img={`${api.defaults.baseURL}/files/${meal.avatar_dish}`}
                                        span={meal.name}
                                        strong={meal.price}
                                        description={meal.description}
                                        id={meal.id}
                                        alt={meal.name}
                                        number={quantities[meal.id] || 0}
                                        handleAddFavorite={() =>
                                            handleFavorites({
                                                img: meal.avatar_dish,
                                                name: meal.name,
                                            })
                                        }
                                        leastOne={() =>
                                            decreaseQuantity(meal.id)
                                        }
                                        oneMore={() =>
                                            increaseQuantity(meal.id)
                                        }
                                        setNumber={setNumber}
                                        handleCardClick={() =>
                                            handleCardClick(meal.id)
                                        }
                                        onClick={() =>
                                            handleAdd({
                                                id: meal.id,
                                                img: meal.avatar_dish,
                                                span: meal.name,
                                                strong: meal.price,
                                                description: meal.description,
                                                quantity: quantities[meal.id],
                                            })
                                        }
                                    />
                                ))}
                        </div>

                        <RiArrowLeftSLine
                            className="left"
                            onClick={() => scrollLeft(mealsRef)}
                        />
                        <RiArrowRightSLine
                            className="right"
                            onClick={() => scrollRight(mealsRef)}
                        />
                    </section>

                    <section className="desserts">
                        <h2>Sobremesas</h2>
                        <div className="card-container" ref={dessertsRef}>
                            {dataDesserts &&
                                dataDesserts.map((desserts) => (
                                    <Card
                                        key={desserts.id}
                                        img={`${api.defaults.baseURL}/files/${desserts.avatar_dish}`}
                                        span={desserts.name}
                                        strong={desserts.price}
                                        description={desserts.description}
                                        number={quantities[desserts.id] || 0}
                                        leastOne={() =>
                                            decreaseQuantity(desserts.id)
                                        }
                                        oneMore={() =>
                                            increaseQuantity(desserts.id)
                                        }
                                        handleAddFavorite={() =>
                                            handleFavorites({
                                                img: desserts.avatar_dish,
                                                name: desserts.name,
                                            })
                                        }
                                        handleCardClick={() =>
                                            handleCardClick(desserts.id)
                                        }
                                        id={desserts.id}
                                        alt={desserts.name}
                                        onClick={() =>
                                            handleAdd({
                                                id: desserts.id,
                                                img: desserts.avatar_dish,
                                                span: desserts.name,
                                                strong: desserts.price,
                                                description:
                                                    desserts.description,
                                                quantity:
                                                    quantities[desserts.id],
                                            })
                                        }
                                    />
                                ))}
                        </div>
                        <RiArrowLeftSLine
                            className="left"
                            onClick={() => scrollLeft(dessertsRef)}
                        />
                        <RiArrowRightSLine
                            className="right"
                            onClick={() => scrollRight(dessertsRef)}
                        />
                    </section>

                    <section className="drinks">
                        <h2>Bebidas</h2>
                        <div className="card-container" ref={drinksRef}>
                            {dataDrinks &&
                                dataDrinks.map((drinks) => (
                                    <Card
                                        key={drinks.id}
                                        img={`${api.defaults.baseURL}/files/${drinks.avatar_dish}`}
                                        span={drinks.name}
                                        strong={drinks.price}
                                        description={drinks.description}
                                        alt={drinks.name}
                                        id={drinks.id}
                                        number={quantities[drinks.id] || 0}
                                        leastOne={() =>
                                            decreaseQuantity(drinks.id)
                                        }
                                        oneMore={() =>
                                            increaseQuantity(drinks.id)
                                        }
                                        handleAddFavorite={() =>
                                            handleFavorites({
                                                img: drinks.avatar_dish,
                                                name: drinks.name,
                                            })
                                        }
                                        handleCardClick={() =>
                                            handleCardClick(drinks.id)
                                        }
                                        onClick={() =>
                                            handleAdd({
                                                id: drinks.id,
                                                img: drinks.avatar_dish,
                                                span: drinks.name,
                                                strong: drinks.price,
                                                description: drinks.description,
                                                quantity: quantities[drinks.id],
                                            })
                                        }
                                    />
                                ))}
                        </div>
                        <RiArrowLeftSLine
                            className="left"
                            onClick={() => scrollLeft(drinksRef)}
                        />
                        <RiArrowRightSLine
                            className="right"
                            onClick={() => scrollRight(drinksRef)}
                        />
                    </section>
                </main>
            ) : (
                <Loading />
            )}

            <Footer />
        </Container>
    );
}
