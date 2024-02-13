import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Desc } from "../../components/Desc";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { api } from "../../Provider/api";
import { Car } from "../../Provider/Car";
import './style.scss'

export const Descriton = () => {
    const { id } = useParams();
    const [car, setCar] = useState<Car >([]);
    const [retirada, setRetirada] = useState('');
    const [volta, setVolta] = useState('');
    const [aluguel, setAluguel] = useState(0.00);
    //const [valueTotal, setValueTotal] = useState('');

    useEffect(() => {
        api.get(`/cars/${id}`)
            .then((response) => {
                setCar(response.data)
            })
            .catch(() => {
                alert('Erro ao consultar ao BD');
            });
        handleSend();
    }, [id]);

    const handleTotal = (e: { preventDefault: () => void; }): void => {
        e.preventDefault();
        const voltaData = new Date(volta);
        const retiradaData = new Date(retirada)
        const diffSecunds = Math.abs(voltaData - retiradaData);
        const diffDias = Math.ceil(diffSecunds / (1000 * 60 * 60 * 24));
        setAluguel(diffDias * car.valor)
    }

    const handleSend = () => {
        api.post('/handle')
            .then()
    }

    return (
        <>
            <Header />
            <div className="container">
                <section className="sec-desc">

                    <Desc  {...car} />
                    <div className="d-flex-col">
                        <form >
                            <label htmlFor="retirada">Data de retirada</label>
                            <input
                                className="inp-dat"
                                type="date"
                                id="retirada"
                                onChange={event => setRetirada(event.target.value)}
                            />

                            <label htmlFor="volta">Data de volta</label>
                            <input
                                className="inp-dat"
                                type="date"
                                id="volta"
                                onChange={event => setVolta(event.target.value)}
                            />

                            <div className="result">
                                <div className="res">
                                    {car.valor},00
                                </div>

                                <div className="res">
                                    {aluguel.toFixed(2).replace('.', ',')}
                                </div>
                            </div>
                            <button className="btn" onClick={handleTotal}>
                                Alugar
                            </button>
                        </form>

                        {aluguel > 0 && (
                            <div className="pagamento">
                                <div className="credito">
                                    <form className="form-cartao" onSubmit={handleSend}>
                                        <label htmlFor="numero" className="label-cartao">N° do Cartão</label>
                                        <input
                                            type="number"
                                            id="numero"
                                            className="iptn inpt-cartao"
                                        />

                                        <label htmlFor="nome">Nome</label>
                                        <input type="text" id="nome" className="iptn-n" />

                                        <div className="valid-cvv">
                                            <span>
                                                <label htmlFor="validad">Validade</label>
                                                <input type="number" id="validad" className="iptn" />
                                            </span>

                                            <span>
                                                <label htmlFor="cvv">CVV</label>
                                                <input type="number" id="cvv" className="iptn" />
                                            </span>
                                        </div>

                                        <button className="btn">
                                            Salvar
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}