import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Frame } from "../../components/Frame";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { api } from "../../Provider/api";
import './style.scss'

export const Home = () => {
    const [cars, setCars] = useState([]);

    const getCard = async () => {
        await api.get('/cars', {
            params: {
                _page: 1,
                _limit: 3
            }
        })
            .then((reponse) => {
                setCars(reponse.data)
            })
            .catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        getCard()
    })
    return (
        <>
            <Header />
            <div className="container">
                <Frame />

                <section className="card-sec">
                    <h3 className="title-sec">Carros</h3>
                    <div className="container-sec">
                        {
                            cars.map((data) => (
                                <Card {...data} />
                            ))
                        }
                    </div>
                </section>
            </div>
            <Section />
            <Footer />
        </>
    );
}