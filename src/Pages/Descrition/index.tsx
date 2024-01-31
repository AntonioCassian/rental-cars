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
                    
                </form>
                </section>
            </div>
            <Footer />
        </>
    );
}