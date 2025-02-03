import { Container, Banner, CategoryMenu, ProductsContainer, CategoryButton, IconBack } from "./styles";
import Pets from "../../assets/banner-pets.png";
import { useEffect, useState } from "react";
import { formatPrice } from "../../utils/formatPrice";
import { CardProducts } from "../../components/CardProducts";
import { api } from "../../services/api";
import {useLocation ,useNavigate } from "react-router-dom";



function Menu() {

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
 

  const navigate = useNavigate();

  const { search } = useLocation();

    const queryParams = new URLSearchParams(search);

    const [activeCategory, setActiveCategory] = useState(() => {
      const categoryId = +queryParams.get('categoria');

      if (categoryId) {
        return categoryId
      }
      return 0;
    });


  useEffect(() => {
    async function loadCategories() {
      try {
        const { data } = await api.get('/categories');

        const newCategories = [{ id: 0, name: 'Todas' }, ...data]
        setCategories(newCategories);
      } catch (error) {
        console.error("Erro ao carregar categorias:", error);
      }
    }


    async function loadProducts() {
      try {
        const { data } = await api.get('/products');

        const newProducts = data.map((product) => ({ currencyValue: formatPrice(product.price), ...product }));

        setProducts(newProducts);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    }

    loadCategories();

    loadProducts();
  }, []);


  useEffect(() => {
    if(activeCategory === 0) {
      setFilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter((products) => 
      products.category_id === activeCategory)

      setFilteredProducts(newFilteredProducts);
    }
  
    
  }, [products, activeCategory])
  

  return (
    <Container>
      <Banner>
        <div>
          <h1>
            A MELHOR
            <br />
            PETSHOP ONLINE
            <br />
            ESTÁ AQUI!
          </h1>
          <span>Confira nossos produtos.</span>
        </div>
        <img src={Pets} alt="foto-pets" />
      </Banner>
      <CategoryMenu>
        <IconBack onClick={() => {navigate('/')}}/>
        {categories.map((category) => (
          <CategoryButton
           $isActiveCategory={category.id === activeCategory}
           key={category.id}
           onClick={() => {
            navigate (
              {
                pathname: '/cardapio',
                search:`?categoria=${category.id}`
              },
              {
                replace: true,
              },
            
            );
            setActiveCategory(category.id)
           }}
           >{category.name}</CategoryButton>
        ))}
      </CategoryMenu>
      <ProductsContainer>
        {filteredProducts.map((product) => (
          <CardProducts product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </Container>
  )
}

export default Menu;