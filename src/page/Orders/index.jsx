import { Container, Payment, Section, Pix, Credit } from "./styles.js";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { SideMenu } from "../../components/SideMenu";
import { PaymenBtutton } from "../../components/PaymentButton";
import { Modal } from "../../components/Modal";

import { PixLogo, CreditCard } from "@phosphor-icons/react";

import img from "../../assets/qrcode 1.svg";


import { useEffect, useState } from "react";
import { api } from "../../server/index.js";

export function Orders() {

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [messageError, setMessageError] = useState(null)

    const [sectionIsOpen, setSectionIsOpen] = useState(true);
    const [pix, setPix] = useState(false);
    const [credit, setCredit] = useState(false);
    const [payment, setPayment] = useState(false);
    const [pixDesktop, setPixDesktop] = useState(true);
    const [creditDesktop, setCreditDesktop] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false)
    const favorites = true;

    const [data, setData] = useState([])
    let items = [...data]

    const [totalPrice, setTotalPrice] = useState()

    const [numberCard, setNumberCard] = useState("");
    const [numberMMAA, setNumberMMAA] = useState("");
    const [numberCVC, setNumberCVC] = useState("");

    function handleCardInput(e) {
        let value = e.target.value.replace(/\D/g, "");
        value = value.replace(/(\d{4})/g, "$1 ").trim();
        setNumberCard(value.slice(0, 19));
    }

    function handleMMAA(e) {
        let value = e.target.value.replace(/\D/g, "");
        setNumberMMAA(value.slice(0, 4));
    }

    function handleCVC(e) {
        let value = e.target.value.replace(/\D/g, "");
        setNumberCVC(value.slice(0, 3));
    }

    function handleSectionClose() {
        setPix(true);
        setPayment(true);
        setSectionIsOpen(false);
    }

    function handleCredit() {
        setCredit(true);
        setCreditDesktop(true);
        setPix(false);
        setPixDesktop(false);
    }

    function handlePix() {
        setPix(true)
        setPixDesktop(true)
        setCreditDesktop(false)
        setCredit(false)
        setNumberCVC("")
        setNumberCard("")
        setNumberMMAA("")
    } 

    function handleDeleteDish(dish) {
      setData(prevState => prevState.filter(orders => orders.id !== dish.id))
      localStorage.setItem("@dish", JSON.stringify(data))
    }

    async function handlePayment(value) {
      if(!setNumberMMAA || !setNumberCVC || !setNumberCard) {
        setMessageError("Por favor preencha todos os campos de pagamento")
        setIsModalOpen(true)
        return
      }

      if(data == 0) {
        setMessageError("sem pedidos para realizar a compra")
        setIsModalOpen(true)
        return
      }

      const Card = numberCard
      const MMAA =  numberMMAA
      const CVC = numberCVC
      
      try {
        await api.post("/payment", {value, Card, MMAA, CVC})
        setIsModalOpen(true)
        setData([])
        setNumberCVC("")
        setNumberCard("")
        setNumberMMAA("")
      } catch (error) {
        if(error.response) {
          setMessageError(error.response.data.message)
          setIsModalOpen(true)
        }
      }
    }

    useEffect(() => {
      const dish = localStorage.getItem("@dish")

      if(dish) {
        setData(JSON.parse(dish)) 
      }
      setIsLoaded(true)
    }, [])

    useEffect(() => {
      if(isLoaded) {
        const price = data.reduce((total, dish) => {
          const dishPrice = Number(
            dish.strong
              .replace('R$', '')
              .replace(/[.]/g, '') 
              .replace(',', '.') 
              .trim()
          );
        return total + (dishPrice * Number(dish.quantity));
        }, 0);
        
        setTotalPrice(price.toFixed(2));
        
    }

    }, [isLoaded, data])
    
    return (
        <Container>
            <SideMenu
                menuIsOpen={menuIsOpen}
                onClosedMenu={() => setMenuIsOpen(false)}
            />
            
            <Modal
              onOpenModal={isModalOpen}
              description={messageError ? messageError : "Pagamento efetuado com sucesso"}
              onClosedModal={() => setIsModalOpen(false)}
            />
            <Header
                onOpenMenu={() => setMenuIsOpen(true)}
                favorites={favorites}
                order={items.length}
                quantity={items.length}
            />

            <div className="section-mobile">
                <Section data-orders={sectionIsOpen}>
                    <h1>Meu pedido</h1>

              { data && data.map(dish => (
                    <div className="orders" key={dish.id}>
                        <img src={`${api.defaults.baseURL}/files/${dish.img}`} alt="Imagem do prato" />
                        <div>
                            <span> {dish.quantity} x {dish.span}</span>
                            <button onClick={() => handleDeleteDish(dish)}>
                              Remover dos Favoritos
                            </button>
                        </div>
                    </div>
              ))}
                    <h2>Total: R${totalPrice}</h2>

                </Section>
                

                {sectionIsOpen === true && (
                    <Button
                        title="Avançar"
                        className="button-advance"
                        onClick={() => handleSectionClose()}
                    />
                )}

                <Payment data-payment={payment}>
                    <h1>Pagamento</h1>
                    <Pix data-pix={pix}>
                        <div className="payment">
                            <div>
                                <PaymenBtutton icon={PixLogo} title="PIX" />
                                <PaymenBtutton
                                    icon={CreditCard}
                                    title="Crédito"
                                    onClick={() => handleCredit()}
                                />
                            </div>
                            <img src={img} alt="QR CODE" />
                        </div>
                    </Pix>
                    <Credit data-credit={credit}>
                        <div className="payment">
                            <div>
                                <PaymenBtutton
                                    icon={PixLogo}
                                    title="PIX"
                                    onClick={() => handlePix()}
                                />
                                <PaymenBtutton
                                    icon={CreditCard}
                                    title="Crédito"
                                />
                            </div>
                            <form>
                                <Input
                                    title="Número do Cartão"
                                    inputMode="numeric"
                                    maxLength="19"
                                    placeholder="1234 5678 9012 3456"
                                    value={numberCard}
                                    onChange={handleCardInput}
                                    required
                                />
                                <div className="mmaa-cvc">
                                    <Input
                                        title="Validade (MM/AA)"
                                        placeholder="MMAA"
                                        inputMode="numeric"
                                        value={numberMMAA}
                                        onChange={handleMMAA}
                                        pattern="[0-9] {4}"
                                        maxLength="4"
                                        required
                                    />
                                    <Input
                                        title="CVC"
                                        inputMode="numeric"
                                        placeholder="123"
                                        value={numberCVC}
                                        onChange={handleCVC}
                                        pattern="[0-9] {3}"
                                        maxLength="3"
                                        required
                                    />
                                </div>
                                <Button 
                                  title="Finalizar pagamento"
                                  onClick={() => handlePayment(totalPrice)}
                                />
                            </form>
                        </div>
                    </Credit>
                </Payment>
            </div>

            <div className="section-desktop">
                <Section>
                    <h1>Meu pedido</h1>
                    {
                    data && data.map(dish => (
                      <div className="orders" key={dish.id}>
                          <img src={`${api.defaults.baseURL}/files/${dish.img}`} alt={dish.span} />
                          <div>
                              <span> {dish.quantity} x {dish.span}</span>
                              <strong>{dish.strong}</strong>
                              <button onClick={() => handleDeleteDish(dish)}>
                                Excluir
                              </button>
                          </div>
                      </div>
                    ))}
                      <h2>Total: R${totalPrice}</h2>
                </Section>

                <Payment>
                    <h1>Pagamento</h1>
                    <Pix data-pix-desktop={pixDesktop}>
                        <div className="payment">
                            <div>
                                <PaymenBtutton 
                                    icon={PixLogo} 
                                    title="PIX"
                                />
                                <PaymenBtutton
                                    icon={CreditCard}
                                    title="Crédito"
                                    onClick={() => handleCredit()}
                                />
                            </div>
                            <img src={img} alt="QR CODE" />
                        </div>
                    </Pix>
                    <Credit data-credit-desktop={creditDesktop}>
                        <div className="payment">
                            <div>
                                <PaymenBtutton
                                    icon={PixLogo}
                                    title="PIX"
                                    onClick={() => handlePix()}
                                />
                                <PaymenBtutton
                                    icon={CreditCard}
                                    title="Crédito"
                                />
                            </div>
                            <form>
                                <Input
                                    className="input-payment"
                                    title="Número do Cartão"
                                    inputMode="numeric"
                                    maxLength="19"
                                    placeholder="1234 5678 9012 3456"
                                    value={numberCard}
                                    onChange={handleCardInput}
                                    required
                                />
                                <div className="mmaa-cvc">
                                    <Input
                                        className="input-payment"
                                        title="Validade (MM/AA)"
                                        placeholder="MMAA"
                                        inputMode="numeric"
                                        value={numberMMAA}
                                        onChange={handleMMAA}
                                        pattern="[0-9] {4}"
                                        maxLength="4"
                                        required
                                    />
                                    <Input
                                        className="input-payment"
                                        title="CVC"
                                        inputMode="numeric"
                                        placeholder="123"
                                        value={numberCVC}
                                        onChange={handleCVC}
                                        pattern="[0-9] {3}"
                                        maxLength="3"
                                        required
                                    />
                                </div>
                                <Button 
                                  title="Finalizar pagamento"
                                  onClick={() => handlePayment(totalPrice)} 
                                />
                            </form>
                        </div>
                    </Credit>
                </Payment>
            </div>
            <Footer />
        </Container>
    );
}
