import { useEffect, useState } from "react";
import { api } from "../../Provider/api";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import './style.scss'

export const Toyota = () => {
    const [toyota, setToyota] = useState([]);

    const getToyota = async () => {
        await api.get('/cars', {
            params:{
                modelo: "Toyota"
            }
        })
            .then((reponse) => {
                setToyota(reponse.data)
            })
            .catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        getToyota()
    })
    return (
        <>
            <Header />
            <div className="container">
                <section className="sec-cars">
                    {
                        toyota.map((data) => (
                            <Card {...data} />
                        ))
                    }
                </section>
            </div>
            <Footer />
        </>
    );
}