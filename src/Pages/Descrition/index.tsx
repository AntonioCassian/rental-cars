import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Desc } from "../../components/Desc";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import './style.scss'
import { api } from "../../Provider/api";

export const Descriton = () => {
    const { id } = useParams();
    const [car, setCar] = useState([]);

     useEffect(() => {
        api.get(`/cars/${id}`)
        .then((response) => {
            setCar( response.data)
        })
        .catch(()=> {
            alert('Erro ao consultar ao BD');
        })
    }, [id]);
    console.log(id)
     
    return (
        <>
            <Header />
            <div className="container">
                <section className="sec-desc">

                    <Desc image={undefined} modelo={undefined} nome={undefined} description={undefined} {...car} />
                    <form action="">
                        <label htmlFor="retirada">Data de retirada</label>
                        <input className="inp-dat" type="date" name="" id="retirada" />

                        <label htmlFor="volta">Data de volta</label>
                        <input className="inp-dat" type="date" name="" id="volta" />

                        <div className="result">
                            <input type="number" className="res" placeholder="50,00" />
                                
                            <div className="res">
                                500,00
                            </div>
                        </div>
                        <button className="btn">
                            Alugar
                        </button>
                    </form>
                </section>
            </div>
            <Footer />
        </>
    );
}