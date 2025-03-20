import { Container, AvatarDish } from "./styles.js";

import { Input } from "../../components/Input/index.jsx";
import { Header } from "../../components/Header/index.jsx";
import { InputSelector } from "../../components/InputSelector/index.jsx";
import { BookMarkers } from "../../components/BookMarkers/index.jsx";
import { TextArea } from "../../components/TextArea/index.jsx";
import { Button } from "../../components/Button/index.jsx";
import { Footer } from "../../components/Footer/index.jsx";
import { SideMenu } from "../../components/SideMenu/index.jsx";
import {Modal} from "../../components/Modal/index.jsx"

import { api } from "../../server";

import { RiArrowLeftSLine } from "react-icons/ri";
import { UploadSimple } from "@phosphor-icons/react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Create() {
    const options = ["Refeição", "Bebidas", "Sobremesas"]; 
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [messageError, setMessageError] = useState(null)

    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [ingredient, setIgredient] = useState([])
    const [newIngredient, setNewIngredient] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const [avatarFile, setAvatarFile] = useState(null)

    const navigate = useNavigate()
    
    function handleAddIngredient(newIngredient) {
      setIgredient(prevState => [...prevState, newIngredient])
      setNewIngredient("")
    }

    function handleDeleteIngredient(removeIngredient) {
      setIgredient(ingredient => ingredient.filter((removeIn) => removeIn !== removeIngredient))
    }

    function formatPrice(value) {
    
      let numericValue = value.replace(/\D/g, "")
  
      let formattedValue = (Number(numericValue) / 100).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 2,
      });
  
      return setPrice(formattedValue)
  }
  
    function handleChangeAvatar(event) {
      const file = event.target.files[0]
      setAvatarFile(file)
      
    }

    async function handleCreate() {

      if(!name, !category, !ingredient, !price) {
        setMessageError("Preencha os campos para continuar, em exceção a descrição")
        setIsModalOpen(true)
        return
      }

      if(newIngredient) {
        setMessageError("Adicione a tag para continuar")
        setIsModalOpen(true)
        return
      }

      const dish = {
        name,
        category,
        ingredient,
        price,
        description
      }
      
      try {

        const response = await api.post("/dish", dish)  
        const id = response.data.id

        if(avatarFile) {
            const fileUploads = new FormData()
            fileUploads.append("avatar_dish", avatarFile)

            await api.patch(`/dish/avatar_dish/${id}`, fileUploads)
          }

        setIsModalOpen(true)
        
      } catch (error) {
        if(error.response) {
          setMessageError(error.response.data.message)
          setIsModalOpen(true)
        }
      }

      setName("")
      setDescription("")
      setPrice("")
      setIgredient([])
    }
   
    return (
        <Container>
            <SideMenu
                menuIsOpen={menuIsOpen}
                onClosedMenu={() => setMenuIsOpen(false)}
            />
            <Header onOpenMenu={() => setMenuIsOpen(true)} />

            <section className="create-mobile">
                <a href="/">
                    <RiArrowLeftSLine /> Voltar
                </a>

                <h1>Novo prato</h1>

                <AvatarDish>
                    <span>Imagem do prato</span>

                    <label htmlFor="dishImage">
                        <UploadSimple />

                        <span>Selecione imagem</span>

                        <input
                            type="file"
                            id="dishImage"
                            style={{ display: "none" }}
                            onChange={handleChangeAvatar}
                        />
                    </label>
                </AvatarDish>

                <Input
                    title="Nome"
                    placeholder="Ex: Salada Ceasar"
                    type="text"
                    style={{ background: "#0D161B" }}
                    onChange={(e) => setName(e.target.value)}
                />

                <InputSelector 
                  title="Categoria" 
                  options={options}
                  onChange={(e) => setCategory(e.target.value)}
                />

                <div className="markers">
                    <span>Ingredients</span>

                    <div className="bookmarkers">
                      {
                        ingredient && ingredient.map((tags, index) => (
                          <BookMarkers 
                            key={index}
                            value={tags}
                          />
                        ))
                      }

                        <BookMarkers 
                        isNew 
                        placeholder="Adicionar"
                        value={newIngredient}
                        onChange={(e) => setNewIngredient(e.target.value)}
                        onClick={() => handleAddIngredient(newIngredient)}
                        />
                    </div>
                </div>

                <Input
                    title="Preço"
                    placeholder="R$ 00,00"
                    value={price}
                    style={{ background: "#0D161B" }}
                    onChange={e => formatPrice(e.target.value)}
                />

                <span>Descrição</span>

                <TextArea 
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" 
                    className="textarea"
                    onChange={e => setDescription(e.target.value)}
                />

                <Button 
                    className="button-rose" 
                    title="Salvar alterações"
                    onClick={() => handleCreate()}
                />
            </section>
            
            <section className="create-desktop">

                <Modal
                  onOpenModal={isModalOpen}
                  description={messageError ? messageError : "Prato criado com sucesso"}
                  onClosedModal={() => setIsModalOpen(false)}
                />

                <a href="/">
                    <RiArrowLeftSLine /> voltar
                </a>

                <h1>Adicionar prato</h1>
      
                <div className="dish-create">

                    <AvatarDish>
                        
                        <span>Imagem do prato</span>
                        
                        <label htmlFor="dish" style={{ cursor: "pointer" }}>
                            <UploadSimple />
                            <span>Selecione imagem</span>
                        </label>

                        <input
                            type="file"
                            id="dish"
                            onChange={handleChangeAvatar}
                            style={{display: "none"}}
                        />

                    </AvatarDish>

                    <Input
                        title="Nome"
                        placeholder="Ex: Salada Ceasar"
                        type="text"
                        style={{ background: "#0D161B" }}
                        className="input-create"
                        onChange={e => setName(e.target.value)}
                    />

                    <InputSelector 
                        title="Categoria" 
                        options={options}
                        onChange={e => setCategory(e.target.value)}
                    />
                </div>

                <div className="dish-create">
                    <div className="markers">
                        <span>Ingredients</span>
                        <div className="bookmarkers">
                          {
                            ingredient && ingredient.map((ingredient, index) => (
                              <BookMarkers 
                                  key={index}
                                  value={ingredient}
                                  onClick={() => handleDeleteIngredient(ingredient)}
                              />

                            ))
                          }
                            <BookMarkers 
                                isNew 
                                placeholder="Adicionar"
                                value={newIngredient}
                                onChange={e => setNewIngredient(e.target.value)}
                                onClick={() => handleAddIngredient(newIngredient)}
                            />
                        </div>
                    </div>
                    <div className="input-price">
                        <Input
                            title="Preço"
                            placeholder="R$ 00,00"
                            value={price}
                            style={{ background: "#0D161B" }}
                            onChange={e => formatPrice(e.target.value)}
                        />
                    </div>
                </div>

                <span>Descrição</span>

                <TextArea
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" 
                    className="textarea"
                    onChange={e => setDescription(e.target.value)}
                />

                <div className="button-rose-end">
                    <Button
                        className="button-rose"
                        title="Salvar alterações"
                        onClick={() => handleCreate()}
                    />
                </div>
            </section>

            <Footer/>
        </Container>
    );
}
