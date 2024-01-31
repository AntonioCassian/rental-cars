import { Desc } from "../../components/Desc";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import './style.scss'

export const Descriton = () => {
    return (
        <>
            <Header />
            <div className="container">
                <section className="sec-desc">
                <Desc />
                <form action="">
                    <label htmlFor="retirada">Data de retirada</label>
                    <input type="date" name="" id="retirada" />

                    <label htmlFor="volta">Data de volta</label>
                    <input type="date" name="" id="volta" />

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