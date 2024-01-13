import { Card, CardBody } from '@chakra-ui/react';
import { Image, Stack, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import card from '../assets/card.png';

const Materi = () => {
  return (
    <div className='mx-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 lg:gap-3 place-items-center'>
      {[...Array(10)].map((_, index) => (
        <Card key={index} maxW='md' borderRadius='xs' mt='5' className='w-10/12 md:w-11/12 lg:w-11/12'>
          <Image
            src={card}
            alt='Green double couch with wooden legs'
            borderRadius='sm'
            objectFit='cover'
          />
          <CardBody px='3'>
            <Stack spacing='1'>
              <Link to="/">
                <Heading size='md'>Matematika</Heading>
              </Link>

              <Heading size='md'>Kelas 1</Heading>

              <Text>2 videos</Text>
              <Text fontSize='xl'>
                100
              </Text>
              <Text fontSize='xl'>
                4,71/5
              </Text>
            </Stack>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default Materi;
