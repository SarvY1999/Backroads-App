import { Title } from './Title'
import { Service } from './Service'
import { services } from '../data'


const Services = () => {
    return <>
        <section className="section services" id="services">
            <Title title='our' subtitle='services'></Title>
            <div className="section-center services-center">
                {services.map((service) => (
                    <Service key={service.id} icon={service.icon} title={service.title} text={service.text}>{/*<p>this is a children</p>*/}</Service>
                ))}
            </div>
        </section>
    </>
}

export default Services;