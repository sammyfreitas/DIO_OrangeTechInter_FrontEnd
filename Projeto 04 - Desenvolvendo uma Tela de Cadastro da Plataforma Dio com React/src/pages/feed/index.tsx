import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header"

import {Container, Column, Title, TitleHightLight} from "./styles";

const Feed = () => {
    return (
        <>
            <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Column>
                <Column flex={1}>
                    <TitleHightLight># RANKING 5 TOP DA SEMANA</TitleHightLight>
                    <UserInfo percentual={80} nome="Anthony Samuel Sobral de Freitas" image="https://avatars.githubusercontent.com/u/84025181?v=4"/>
                    <UserInfo percentual={30} nome="Anthony Samuel Sobral de Freitas" image="https://avatars.githubusercontent.com/u/84025181?v=4"/>
                    <UserInfo percentual={50} nome="Anthony Samuel Sobral de Freitas" image="https://avatars.githubusercontent.com/u/84025181?v=4"/>
                    <UserInfo percentual={56} nome="Anthony Samuel Sobral de Freitas" image="https://avatars.githubusercontent.com/u/84025181?v=4"/>
                    <UserInfo percentual={39} nome="Anthony Samuel Sobral de Freitas" image="https://avatars.githubusercontent.com/u/84025181?v=4"/>
                    <UserInfo percentual={99} nome="Anthony Samuel Sobral de Freitas" image="https://avatars.githubusercontent.com/u/84025181?v=4"/>
                    <UserInfo percentual={49} nome="Anthony Samuel Sobral de Freitas" image="https://avatars.githubusercontent.com/u/84025181?v=4"/>
                </Column>
            </Container >  
        </>
    )
}

export { Feed } 