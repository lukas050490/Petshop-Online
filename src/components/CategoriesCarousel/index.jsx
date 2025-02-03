import { useState, useEffect } from "react"
import { api } from "../../services/api"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Container, ContainerItems, Title, CategoryButton } from "./styles"



function CategoriesCarousel() {
    const [categories, setCategories] = useState([]);

   


    useEffect(() => {
        async function loadCategories() {
            try {
                const { data } = await api.get('/categories');
                setCategories(data);
            } catch (error) {
                console.error("Erro ao carregar categorias:", error);
            }
        }

        loadCategories();
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
            <Title>Categorias</Title>
            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisbile={false}
                itemClass="carousel-item"
                
            >
                {categories.map((category) => (
                    <ContainerItems key={category.id} imageurl={category.url}>
                        <CategoryButton
                            to={{ 
                                pathname: '/cardapio',
                                search: `?categoria=${category.id}`
                                }}
                              
                        >{category.name}</CategoryButton>
                    </ContainerItems>

                ))}

            </Carousel>
        </Container>
    )
}

export default CategoriesCarousel


