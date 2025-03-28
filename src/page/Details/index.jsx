import { Container } from "./styles.js";

import { useEffect, useState } from "react";

import { useAuth } from "../../hooks/auth.jsx";

import { useNavigate, useParams } from "react-router-dom";

import { Header } from "../../components/Header/index.jsx";
import { Tags } from "../../components/Tags/index.jsx";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { SideMenu } from "../../components/SideMenu/index.jsx";
import { Modal } from "../../components/Modal";

import { RiArrowLeftSLine } from "react-icons/ri";
import { Minus, Plus, Receipt } from "@phosphor-icons/react";

import { USER_ROLE } from "../../utils/roles.js";

import { api } from "../../server/index.js";

export function Details() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageError, setMessageError] = useState(null);

    const [dish, setDish] = useState(null);
    const [tags, setTags] = useState([]);
    const [data, setData] = useState([]);
    const [orders, setOrders] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    let items = [...data];

    const [oneMore, setOneMore] = useState(0);
    let number = oneMore;

    let ask = `pedir R$ ${number},00`;

    const { user } = useAuth();

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const navigate = useNavigate();
    const params = useParams();

    function handleAdd(dish) {
        setOrders((prevState) => {
            const exist = prevState.some((orders) => orders.span === dish.span);

            if (exist) {
                const existDish = prevState.map((order) =>
                    order.span === dish.span
                        ? { ...order, quantity: order.quantity + dish.quantity }
                        : order
                );

                localStorage.setItem("@dish", JSON.stringify(existDish));
                setOneMore(0);
                setMessageError("A quantidade desse prato foi aumentada!");
                setIsLoaded(true);
                setIsModalOpen(true);
            } else {
                const addDish = [...prevState, dish];
                localStorage.setItem("@dish", JSON.stringify(addDish));
                setOneMore(0);
                const price = dish.strong
                    ? String(dish.strong).replace("R$ ", "").replace(",", ".")
                    : "0";
                const priceNumber = Number(price);
                setMessageError(
                    `Prato adicionado para pedidos com o total de R$ ${(
                        priceNumber * dish.quantity
                    ).toFixed(2)}. Obrigado!`
                );
                setIsLoaded(true);
                setIsModalOpen(true);
            }
        });
    }

    useEffect(() => {
        async function fetchDish() {
            const response = await api.get(`/dish/${params.id}`);
            setDish(response.data.dish ? [response.data.dish] : []);
            setTags(response.data.tags);
        }

        fetchDish();
    }, []);

    useEffect(() => {
        const dish = localStorage.getItem("@dish");

        if (dish) {
            setData(JSON.parse(dish));
        }

        if (dish) {
            setOrders(JSON.parse(dish));
        }
    }, []);

    useEffect(() => {
        if (isLoaded) {
            const dish = localStorage.getItem("@dish");
            setData(JSON.parse(dish));
            items = [...data];
        }
    }, [isLoaded]);

    return (
        <Container>
            <SideMenu
                menuIsOpen={menuIsOpen}
                onClosedMenu={() => setMenuIsOpen(false)}
            />

            <Modal
                onOpenModal={isModalOpen}
                description={
                    messageError
                        ? messageError
                        : "Pagamento efetuado com sucesso"
                }
                onClosedModal={() => setIsModalOpen(false)}
            />
            <Header
                onOpenMenu={() => setMenuIsOpen(true)}
                order={items.length}
                quantity={items.length}
            />

            {dish &&
                dish.map((dish) => (
                    <section className="details-mobile" key={dish.id}>
                        <a href="/">
                            <RiArrowLeftSLine /> Voltar
                        </a>
                        <img
                            src={`${api.defaults.baseURL}/files/${dish.avatar_dish}`}
                        />

                        <h2>{dish.name}</h2>

                        <p>{dish.description}</p>
                        <div className="tags">
                            {tags &&
                                tags.map((tag) => (
                                    <Tags title={tag.tag_name} key={tag.id} />
                                ))}
                        </div>
                        {user.role === USER_ROLE.CUSTOMER && (
                            <div>
                                <div className="add-decrease">
                                    <Minus
                                        onClick={() =>
                                            setOneMore(
                                                oneMore === 0
                                                    ? oneMore
                                                    : oneMore - 1
                                            )
                                        }
                                    />
                                    {number}
                                    <Plus
                                        onClick={() => setOneMore(oneMore + 1)}
                                    />
                                </div>
                                <Button
                                    icon={Receipt}
                                    title={`pedir ${dish.price}`}
                                    className="mobile"
                                    onClick={() =>
                                        handleAdd({
                                            id: dish.id,
                                            img: dish.avatar_dish,
                                            span: dish.name,
                                            strong: dish.price,
                                            description: dish.description,
                                            quantity: oneMore,
                                        })
                                    }
                                />
                            </div>
                        )}
                        {user.role === USER_ROLE.ADMIN && (
                            <Button
                                title="Editar prato"
                                onClick={() => navigate(`/update/${dish.id}`)}
                                className="button-edit"
                            />
                        )}
                    </section>
            ))}

            <section className="details-desktop">
                <a href="/">
                    <RiArrowLeftSLine /> Voltar
                </a>
                {dish &&
                    dish.map((dish) => (
                        <div className="meal-info-desktop" key={dish.id}>
                            <img
                                src={`${api.defaults.baseURL}/files/${dish.avatar_dish}`}
                                alt={dish.name}
                            />

                            <div className="dish-description">
                                <h2>{dish.name}</h2>
                                <p>{dish.description}</p>
                                <div className="tags">
                                    {tags &&
                                        tags.map((tag) => (
                                            <Tags
                                                title={tag.tag_name}
                                                key={tag.id}
                                            />
                                        ))}
                                </div>
                                {user.role === USER_ROLE.CUSTOMER && (
                                    <div>
                                        <div className="add-decrease">
                                            <Minus
                                                onClick={() =>
                                                    setOneMore(
                                                        oneMore === 0
                                                            ? oneMore
                                                            : oneMore - 1
                                                    )
                                                }
                                            />
                                            {number}
                                            <Plus
                                                onClick={() =>
                                                    setOneMore(oneMore + 1)
                                                }
                                            />
                                        </div>
                                        <Button
                                            title={`Incluir ${dish.price}`}
                                            className="button-desktop"
                                            onClick={() =>
                                                handleAdd({
                                                    id: dish.id,
                                                    img: dish.avatar_dish,
                                                    span: dish.name,
                                                    strong: dish.price,
                                                    description:
                                                        dish.description,
                                                    quantity: oneMore,
                                                })
                                            }
                                        />
                                    </div>
                                )}
                                {user.role === USER_ROLE.ADMIN && (
                                    <Button
                                        title="Editar prato"
                                        className="button-edit"
                                        onClick={() =>
                                            navigate(`/update/${dish.id}`)
                                        }
                                    />
                                )}
                            </div>
                        </div>
                    ))}
            </section>

            <Footer className="details" />
        </Container>
    );
}
