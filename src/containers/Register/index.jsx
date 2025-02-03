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


function Register() {
  const navigate = useNavigate();

  const schema = yup.object({
    name: yup.string().required('O nome é obrigatório'),
    email: yup.string().email().required('Digite um email válido'),
    password: yup.string().min(6, 'A senha tem que ter 6 caracteres').required('Digite uma senha'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas devem ser iguais').required('Confirma sua senha'),
  }).required();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });


  const onSubmit = async data => {
    try {
      const { status } = await api.post('/users', {
        name: data.name,
        email: data.email,
        password: data.password,
      },
        {
          validateStatus: () => true,
        },
      )

      if (status === 200 || status === 201) {
        setTimeout(() => {
          navigate("/login")
        },2000);
        toast.success('Conta criada com sucesso!')
      } else if (status === 409) {
        toast.error('Email já cadastrado!')
      } else {
        throw new Error()
       }

    } catch (error) {
      toast.error('❌Falha no sistema ! Tente novamente.')
    }
  }


  return (
    <>
      <Container>
        <LeftContainer>
          <img src={Logo} alt="foto-logo" />
        </LeftContainer>
        <RightContainer>
          <Title>Criar Conta </Title>
          <FormContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputForm>
                <label>Name</label>
                <input type="text" {...register("name")} />
                <p>{errors?.name?.message}</p>
              </InputForm>
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
              <InputForm>
                <label>Confirmar Senha</label>
                <input type="password" {...register("confirmPassword")} />
                <p>{errors?.confirmPassword?.message}</p>
              </InputForm>
              <Button type="submit">Criar Conta</Button>
              <p>Já possui conta? <Link to="/login">Click aqui</Link></p>
            </form>
          </FormContainer>
        </RightContainer>
      </Container>
    </>
  )
}

export default Register