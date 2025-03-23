import { Container } from "./styles.js";

import { List, Receipt, MagnifyingGlass, SignOut  } from "@phosphor-icons/react";

import foodExplorerImg from "../../assets/Frame 7619.svg";

import { USER_ROLE } from "../../utils/roles.js";

import { Input } from "../Input/index.jsx";
import { Button } from "../Button/index.jsx";
import { ModalExtra } from "../ModalExtra/index.jsx";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth.jsx";

import {useSearch} from "../../hooks/searchContext.jsx"

import {useEffect, useState} from "react"

export function Header({onOpenMenu, favorites, order, quantity}) {

    const navigate = useNavigate()
    const orders = `pedidos (${order})`
    const {signOut, user} = useAuth()
    const {search, setSearch} = useSearch()
    
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [confirm, setConfirm] = useState(null)

    function activeModal() {
      setModalIsOpen(true)
    }
    
    function closeModal() {
      setModalIsOpen(false)
    }

    function handleSignOut() {
      setConfirm(true)
    }

    useEffect(() => {
      if(confirm) {
        signOut()
        navigate("/")
      }
    }, [confirm])

    return (
        <Container>
            <>
            <ModalExtra
              modalIsOpen={modalIsOpen}
              yes={() => handleSignOut()}
              no={() => closeModal()}
            />
            </>
            
            <List 
            onClick={onOpenMenu}
            className="list"
            />

          
            <img
                src={foodExplorerImg}
                alt="foodExplorerImg"
                className="foodExplorerImg"
                onClick={() => navigate("/")}
            />  
            {user.role === USER_ROLE.ADMIN &&
                <span className="span-mobile">
                    admin
                </span>
            }
            {user.role === USER_ROLE.CUSTOMER &&
             <div className="receipt-container">
              <Receipt className="receipt" onClick={() => navigate(`/orders`)} />
              <span className="quantity">{quantity}</span>
            </div>
            }

            <div>
                {
                    user.role === USER_ROLE.CUSTOMER && 
                    <div className="image-text-box">
                        <img
                            src={foodExplorerImg}
                            alt="foodExplorerImg"
                            onClick={() => navigate("/")}
                        />
                    </div>
                }

                {
                    user.role === USER_ROLE.ADMIN &&
                    <div className="image-text-box">
                        <img
                            src={foodExplorerImg}
                            alt="foodExplorerImg"
                            onClick={() => navigate("/")}
                        />
                        {
                            user.role === USER_ROLE.ADMIN &&
                            <span className="span-desktop">
                                admin
                            </span>
                        }
                    </div>
                }
                <Input
                    icon={MagnifyingGlass}
                    placeholder="Busque por pratos ou ingredients"
                    className="input-header"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <span 
                  className="favorites"
                  data-favorites={favorites}
                  onClick={() => navigate("/favorites")}
                >
                  Meus favoritos
                </span>
                {
                    user.role === USER_ROLE.CUSTOMER &&
                    <Button
                        icon={Receipt}
                        title={orders}
                        className="button-header"
                        onClick={() => navigate("/orders")}
                    />
                }
                {
                    user.role === USER_ROLE.ADMIN &&
                    <Button
                        title="Novo prato"
                        className="button-header"
                        onClick={() => navigate("/create")}
                    />
                }

                <SignOut
                    className="signOut"
                    onClick={() => activeModal()}
                />

            </div>
        </Container>
    );
}
