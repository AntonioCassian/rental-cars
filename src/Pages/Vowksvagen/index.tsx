import { useEffect, useState } from "react";
import { api } from "../../Provider/api";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import './style.scss'

export const Volkswagen = () => {
    const [volkswagen, setVolkswagen] = useState([]);

    const getVolkswagen = async () => {
        await api.get('/cars', {
            params:{
                modelo: "Volkswagen"
            }
        })
            .then((reponse) => {
                setVolkswagen(reponse.data)
            })
            .catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        getVolkswagen()
    })
    return (
        <>
            <Header />
            <div className="container">
                <section className="sec-cars">
                    {
                        volkswagen.map((data) => (
                            <Card {...data} />
                        ))
                    }
                </section>
            </div>
            <Footer />
        </>
    );
}