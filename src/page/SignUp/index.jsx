import { Container } from "./styles";

import { useState } from "react";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";

import foodExplorerImg from "../../assets/Frame 5946.svg";
import { useNavigate } from "react-router-dom";

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const navigate = useNavigate();

    const { create } = useAuth();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageError, setMessageError] = useState(null);

    async function handleCreateUser({ name, email, password }) {
        if ((!name, !email, !password, !role)) {
            setMessageError("preencha todos os campos para continuar");
            setIsModalOpen(true);
            return;
        }

        if (!email.includes("@gmail.com")) {
            setMessageError("Necessário conter o  @gmail.com");
            setIsModalOpen(true);
            return;
        }

        if (password.length < 6) {
            setMessageError("Senha deve ser maior que 6 dígitos");
            setIsModalOpen(true);
            return;
        }

        if(role !== "customer" && role !== "admin") {
            setMessageError("São permitidas entradas apenas de admin e customer")
            setIsModalOpen(true)
            return
        }

        const result = await create({ name, email, password, role });

        if (result.success) {
            setMessageError(result.message);
            setIsModalOpen(true);

            setTimeout(() => {
                navigate("/");
            }, 3000);
        }

        if (!result.success) {
            setMessageError(result.message);
            setIsModalOpen(true);
        }
    }

    return (
        <Container>
            <Modal
                onOpenModal={isModalOpen}
                description={messageError}
                onClosedModal={() => setIsModalOpen(false)}
            />

            <img src={foodExplorerImg} alt="foodExplorerImg" />

            <form>
                <h1>Crie sua conta</h1>

                <Input
                    title="Seu nome"
                    placeholder="Exemplo: Maria da Silva"
                    type="text"
                    className="input-form"
                    onChange={(e) => setName(e.target.value)}
                />

                <Input
                    title="Email"
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="E-mail"
                    className="input-form"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    title="Senha"
                    placeholder="No mínimo 6 caracteres"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Input
                    title="Admin/Customer"
                    placeholder="Escolha como irá se cadastrar"
                    type="text" 
                    onChange={(e) => setRole(e.target.value.toLowerCase())}
                />

                <Button
                    title="Criar conta"
                    className="button-signUp"
                    onClick={(e) => {
                        e.preventDefault();
                        handleCreateUser({ name, email, password });
                    }}
                />

                <a href="/">Já tenho uma conta</a>
            </form>
        </Container>
    );
}
