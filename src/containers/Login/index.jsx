import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logopetshop.png"
import Button from "../../components/Button"
import {
  Container,
  LeftContainer,
  RightContainer,
  Title,
  FormContainer,
  InputForm,
  Link,
} from "./styles"
import { useUser } from "../../hooks/UserContext";


function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();

  const schema = yup.object({
    email: yup.string().email().required('Digite um email válido'),
    password: yup.string().min(6,'A senha tem que ter 6 caracteres').required('Digite uma senha'),
  }).required();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });


  const onSubmit = async data => {
    const {data: userData} = await toast.promise(
      api.post('/session', {
        email: data.email,
        password: data.password,
      }), 
      {
        pending: 'Verificando seus dados',
        success: {
          render() {
            setTimeout(() => {
              if (userData?.admin) {
                navigate("/admin/pedidos")
              } else {
                navigate("/")
              }
              
            },2000);
            return 'Seja bem vindo(a) 👌';
          },
        },
        error: 'Email ou Senha Incorretos 🤯'
      },
    );
    
    putUserData(userData);
    
  }


  return (
    <>
      <Container>
        <LeftContainer>
          <img src={Logo} alt="foto-logo" />
        </LeftContainer>
        <RightContainer>
          <Title>Olá, seja bem vindo ao <span>Pluma&Ninho.Petshop</span>!
            <br />
            Acesse com seu <span>login e senha</span>.
          </Title>
          <FormContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputForm>
                <label>Email</label>
                <input type="email" {...register("email")} />
                <p>{errors?.email?.message}</p>
              </InputForm>
              <InputForm>
                <label>Senha</label>
                <input type="password" {...register("password")} />
                <p>{errors?.password?.message}</p>
              </InputForm>
              <Button type="submit">Entrar</Button>
              <p>Não possui conta? <Link to="/cadastro">Click aqui</Link></p>
            </form>
          </FormContainer>
        </RightContainer>
      </Container>
    </>
  )
}

export default Login