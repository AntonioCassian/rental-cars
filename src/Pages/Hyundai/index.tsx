import { useEffect, useState } from "react";
import { api } from "../../Provider/api";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import './style.scss'

export const Hyundai = () => {
    const [hyundai, setHyundai] = useState([]);

    const getHyundai = async () => {
        await api.get('/cars', {
            params:{
                modelo: "Hyundai"
            }
        })
            .then((reponse) => {
                setHyundai(reponse.data)
            })
            .catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        getHyundai()
    })
    return (
        <>
            <Header />
            <div className="container">
                <section className="sec-cars">
                    {
                        hyundai.map((data) => (
                            <Card {...data} />
                        ))
                    }
                </section>
            </div>
            <Footer />
        </>
    );
}