import { Container, VStack, Button ,Text} from "@chakra-ui/react"
import { Input } from '@chakra-ui/react'
import axios from "axios"
import { useContext, useState } from "react"
import { AuthContext } from "../Authcontext/AuthProvider"

// consume login With AuthContext 

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { login } = useContext(AuthContext)

  async function handleLogin() {

    try {
      let res = await axios({
        method: "post",
        url: "https://reqres.in/api/login",
        data: ({
          email, password
        })
      })
      console.log(res.data);
      login(res.data.token)

    } catch (error) {
      console.log(email);
    }

  }

  return (
    <>
      <Container p={10}>

        <VStack>
          <Input placeholder='email' size='md' onChange={(e) => {
            setEmail(e.target.value)
          }} />

          <Input placeholder='password' size='md' onChange={(e) => {
            setPassword(e.target.value)
          }} />
          <Button colorScheme='red' variant='outline' onClick={handleLogin}>
            login
          </Button>
        </VStack>
        <Text>
         email: eve.holt@reqres.in
           password: cityslicka
          
         

        </Text>

      </Container>
    </>
  )
}

export default Login
