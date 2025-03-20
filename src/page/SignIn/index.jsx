import { Container } from "./styles"

import { useState } from "react"

import {useAuth} from "../../hooks/auth"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Modal } from "../../components/Modal"

import foodExplorerImg from "../../assets/Frame 5946.svg"

export function SignIn() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [messageError, setMessageError] = useState(null)

  const {signIn} = useAuth()

  async function handleSignIn({email, password}) {
    const result = await signIn({email, password})
    
    if (!result.success) {
      setMessageError(result.message)
      setIsModalOpen(true)
    }
  }

    return (
        <Container>

             <Modal
              onOpenModal={isModalOpen}
              description={messageError}
              onClosedModal={() => setIsModalOpen(false)}
            />

            <img 
            src={foodExplorerImg}
            alt="foodExplorerImg" />

            <form>

            <h1>Faça login</h1>

            <Input
            title="Email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="E-mail"
            className="input-form"
            onChange={e => setEmail(e.target.value)}
            />
            
            <Input
            title="Senha"
            placeholder="No mínimo 6 caracteres"
            type="password"
            className="input-form"
            onChange={e => setPassword(e.target.value)}
            />

            <Button
                title={"Entrar"}
                onClick={() => handleSignIn({email, password})}
            />

            <a href="/register">Criar uma conta</a>

            </form>

        </Container>
    )
}