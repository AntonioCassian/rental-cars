import { FrameCar } from '../../assets/FrameCar';
import './style.scss'

export const Frame = () => {
    return (
        <>
            <section className='frame-sec'>
                <div className="rounded">
                    <FrameCar />
                </div>
                <div className='text-sec'>
                    <p>
                        Alugue um carro e tenha liberdade para explorar todos os lugares que quiser.
                        Conte com a nossa locadora para te ajudar. Faça da sua viagem uma experiência única com a locação de veículos com facilidade e praticidade.
                        Tenha toda a comodidade durante a sua viagem ao alugar um carro conosco e aproveite um atendimento personalizado.
                    </p>
                </div>
            </section>
        </>
    );
}