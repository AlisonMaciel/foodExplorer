import { Container} from "./styles.js"

import { useState } from "react"

import {useAuth} from "../../hooks/auth.jsx"

import { Minus, Plus, HeartStraight, PencilSimple } from "@phosphor-icons/react"

import {Button} from "../Button"

import {USER_ROLE} from "../../utils/roles.js"

import { useNavigate } from "react-router-dom"

export function Card({img, span, strong, description, onClick, number, setNumber,oneMore, leastOne, id , alt , handleCardClick, handleAddFavorite, ...rest}) {

    const [likedHeart, setLikedHeart] = useState(false)

    const {user} = useAuth()

    const navigate = useNavigate()

    if(number === -1) {
        setNumber(0)
    }


    return (
        <Container {...rest}>
            {user.role === USER_ROLE.ADMIN &&
                <PencilSimple
                    className="pencil"
                    onClick={() => navigate(`/update/${id}`)}
                />
            }
            {
                user.role === USER_ROLE.ADMIN &&
                <img 
                src={img}
                alt={alt}
                className="img-card"
                onClick={handleCardClick}
                />
            }
            {user.role === USER_ROLE.CUSTOMER &&
            <HeartStraight
                className="heart"
                data-heart-red={likedHeart}
                onClick={() => {
                  setLikedHeart(!likedHeart);
                  handleAddFavorite()
                }}
            />
            }
            {
            user.role === USER_ROLE.CUSTOMER &&
            <img 
                src={img}
                alt={alt}
                onClick={handleCardClick}
            />
            }

            <span onClick={handleCardClick}>{span}</span>

            <p onClick={handleCardClick}>{description}</p>

            <strong onClick={handleCardClick}>{strong}</strong>

            <div className="card-mobile">
                {
                    user.role === USER_ROLE.CUSTOMER &&
                    <div className="add-remove">
                        <Minus onClick={leastOne}/>
                            {number}
                        <Plus onClick={oneMore}/>
                    </div>
                }
                {
                    user.role === USER_ROLE.CUSTOMER &&
                    <Button
                        className="button_card"
                        title="Incluir"
                        onClick={onClick}
                    />
                }
            </div>

            <div className="card-desktop">
            {
                user.role === USER_ROLE.CUSTOMER &&
                <div  className="add-remove">
                    <Minus onClick={leastOne}/>
                        {number}
                    <Plus onClick={oneMore}/>
                </div>
            }
            {
                user.role === USER_ROLE.CUSTOMER &&
                <Button
                    className="button_card" 
                    title="Incluir"
                    onClick={onClick}
                />
            }
            </div>
        </Container>
    )
}