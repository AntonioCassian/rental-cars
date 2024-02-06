import { useEffect, useState } from "react";
import { api } from "../../Provider/api";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import './style.scss'

export const Chevrolet = () => {
    const [chevrolet, setChevrolet] = useState([]);

    const getChevrolet = async () => {
        await api.get('/cars', {
            params:{
                modelo: "Chevrolet"
            }
        })
            .then((reponse) => {
                setChevrolet(reponse.data)
            })
            .catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        getChevrolet()
    })
    return (
        <>
            <Header />
            <div className="container">
                <section className="sec-cars">
                    {
                        chevrolet.map((data) => (
                            <Card {...data} />
                        ))
                    }
                </section>
            </div>
            <Footer />
        </>
    );
}