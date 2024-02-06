import { useEffect, useState } from "react";
import { api } from "../../Provider/api";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import './style.scss'

export const Fiat = () => {
    const [fiat, setFiat] = useState([]);

    const getFiat = async () => {
        await api.get('/cars', {
            params:{
                modelo: "Fiat"
            }
        })
            .then((reponse) => {
                setFiat(reponse.data)
            })
            .catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        getFiat()
    })
    return (
        <>
            <Header />
            <div className="container">
                <section className="sec-cars">
                    {
                        fiat.map((data) => (
                            <Card {...data} />
                        ))
                    }
                </section>
            </div>
            <Footer />
        </>
    );
}