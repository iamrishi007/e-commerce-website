import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card, CardBody, CardFooter, Heading, Stack, Image, Text, ButtonGroup, Divider, Button, Center } from '@chakra-ui/react'
import "../App.css"
function Products() {
     const [data, setData] = useState([])
     const [serch, setSearch] = useState('')
     async function fetchData() {
          try {
               let res = await axios({
                    method: "get",
                    url: "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products"
               })


               setData(res.data.data)
          } catch (error) {
               console.log(error);
          }
     }

     useEffect(() => {
          fetchData()
     }, [])


     return (

          <>
               {/* <Center>
                    <section>
                         <option value=""></option>
                         <option value="desc">desc</option>
                         <option value="asc">asc</option>
                    </section>
               </Center> */}

               <div id='card'>

                    {data.map((elm) => (
                         <Card maxW='sm' key={elm.id}>
                              <CardBody>
                                   <Image
                                        src={elm.image}
                                        alt='Product Image'
                                        borderRadius='lg'
                                   />
                                   <Stack mt='6' spacing='3'>
                                        <Heading size='md'>{elm.title}</Heading>
                                        <Text>
                                             {elm.brand}
                                        </Text>
                                        <Text color='blue.600' fontSize='2xl'>
                                             {elm.price}
                                        </Text>
                                   </Stack>
                              </CardBody>
                              <Divider />
                              <CardFooter>
                                   <ButtonGroup spacing='2'>
                                        <Button variant='solid' colorScheme='blue'>
                                             Buy now
                                        </Button>
                                        <Button variant='ghost' colorScheme='blue'>
                                             Add to cart
                                        </Button>
                                   </ButtonGroup>
                              </CardFooter>
                         </Card>
                    ))}
               </div>
          </>

     )
}

export default Products
