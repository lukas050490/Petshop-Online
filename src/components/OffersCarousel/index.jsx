import { useState, useEffect } from "react"
import { api } from "../../services/api"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Container, Title } from "./styles"


import { formatPrice } from "../../utils/formatPrice"
import { CardProducts } from "../CardProducts"


function OffersCarousel() {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            try {
                const { data } = await api.get('/products');

                const onlyOffers = data.filter((product) => product.offer)
                    .map((product) => ({ currencyValue: formatPrice(product.price), ...product }));

                setOffers(onlyOffers);
            } catch (error) {
                console.error("Erro ao carregar ofertas:", error);
            }
        }

        loadProducts();
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1280, min: 690 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 690, min: 0 },
            items: 2
        }
    };

    return (
        <Container>
            <Title>Ofertas</Title>
            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisbile={false}
                itemClass="carousel-item"
                containerClass="carousel-container"
            >
                {offers.map((product) => (
                    <CardProducts key={product.id} product={product} />
                ))}

            </Carousel>
        </Container>
    )
}

export default OffersCarousel