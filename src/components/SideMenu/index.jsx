import { Container } from "./styles.js";

import { useState, useEffect } from "react";

import { FiX } from "react-icons/fi";

import { MagnifyingGlass } from "@phosphor-icons/react";

import foodExplorerFooter from "../../assets/Group 5946.svg";

import { Input } from "../Input";

import { USER_ROLE } from "../../utils/roles.js";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth.jsx";
import { useSearch } from "../../hooks/searchContext.jsx";
import { ModalExtra } from "../ModalExtra";

export function SideMenu({ menuIsOpen, onClosedMenu }) {
    const { signOut, user } = useAuth();

    const { search, setSearch } = useSearch();

    const navigate = useNavigate();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [confirm, setConfirm] = useState(null);

    function activeModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    function handleSignOut() {
        setConfirm(true);
    }

    useEffect(() => {
        if (confirm) {
            signOut();
            navigate("/");
        }
    }, [confirm]);

    return (
        <Container data-menu-is-open={menuIsOpen}>
            <ModalExtra
                modalIsOpen={modalIsOpen}
                yes={() => handleSignOut()}
                no={() => closeModal()}
            />

            <header>
                <FiX 
                  onClick={onClosedMenu} 
                  className="x"
                />
                <span>Menu</span>
            </header>

            <div>
                <Input
                    className="search"
                    icon={MagnifyingGlass}
                    placeholder="Busque por pratos ou ingredientes"
                    onChange={(e) => setSearch(e.target.value)}
                />

                {user.role === USER_ROLE.ADMIN && (
                    <div className="create">
                        <a href="/create">Novo prato</a>
                    </div>
                )}

                <div className="favorites">
                    <a href="/favorites">Favoritos</a>
                </div>

                <div className="home">
                    <a href="/">Home</a>
                </div>

                <div className="toGoOut">
                    <span onClick={() => activeModal()}>Sair</span>
                </div>
            </div>

            <footer>
                <img src={foodExplorerFooter} alt="foodExplorer" />

                <p>© 2025 - Todos os direitos reservados.</p>
            </footer>
        </Container>
    );
}
