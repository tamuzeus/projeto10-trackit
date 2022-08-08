import Header from "../components/header"
import Footer from "../components/footer"
import styled from "styled-components";
import Createhabit from "../components/createhabit";
import Habits from "../components/habits";
import { useContext } from "react";
import UserContext from "../context/context";

export default function Habitslist() {

    const { id, setId } = useContext(UserContext);
    const { name, setName } = useContext(UserContext);
    const { image, setImage } = useContext(UserContext);
    const { token, setToken } = useContext(UserContext);
    const { bearertoken, setBearerToken } = useContext(UserContext);

    console.log(id)
    console.log(name)
    console.log(image)
    console.log(token)
    console.log(bearertoken)


    return (
        <>
            <Header />
            <HabitsBody>
                <MyHabitsBody>
                    <MyHabits>
                        <p>Meus hábitos</p>
                        <Buttonplus><p>+</p></Buttonplus>
                    </MyHabits>

                    <Createhabit/>
                    <Habits/>

                    <Nohabits>
                        <p>
                            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                        </p>
                    </Nohabits>

                </MyHabitsBody>
            </HabitsBody>
            <Footer />

        </>
    )
}

const HabitsBody = styled.div`
    background-color: #f2f2f2;
    height: 100vh;
    width: 100vw;
`

const MyHabitsBody = styled.div `
    padding-top: 95px;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  `
const MyHabits = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
    width: 100vw;

    p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    }
`

const Buttonplus = styled.button`
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;

    margin-right: 40px;
    width: 40px;
    height: 35px;
    left: 317px;
    top: 92px;
    background-color: #52B6FF;
    border-radius: 4.63636px;

    p{
        color: white;
    }
`
const Nohabits = styled.div `
    width: 338px;
    height: 74px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;

`
