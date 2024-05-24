import { Stack, Heading, List, ListItem, ListIcon, Button, useColorModeValue, Image } from "@chakra-ui/react";
import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import trator_img from '../../../assets/produtos/trator_example.png'

interface PackageTierProps {
    title: string
    options: Array<{ id: number; desc: string }>
    title2: string
    checked?: boolean
}

export function ItemListaGenerica ({ title, title2, options, checked = false }: PackageTierProps) {
    const colorTextLight = checked ? 'green.700' : 'green.600'
    const bgColorLight = checked ? 'green.400' : 'gray.300'

    const colorTextDark = checked ? 'green.700' : 'green.500'
    const bgColorDark = checked ? 'green.400' : 'gray.300'

    return (
        <Stack
            p={3}
            py={3}
            justifyContent={{
                base: 'flex-start',
                md: 'space-around',
            }}
            direction={{
                base: 'column',
                md: 'row',
            }}
            alignItems={{ md: 'center' }}>
            <Heading size={'md'}>{title}</Heading>
            <List spacing={3} textAlign="start">
                {options.map((desc, id) => (
                    <ListItem key={desc.id}>
                        <ListIcon as={id === 0 ? FaCheckCircle : FaRegCheckCircle} color="green.500" />
                        {desc.desc}
                    </ListItem>
                ))}
            </List>
            <Heading size={'xl'}>{title2}</Heading>
            <Image boxSize='150px' objectFit="contain" src={trator_img} alt="Tractor" />
            <Stack>
                <Link to='/produto/verificarEntrada'>
                    <Button
                        size="md"
                        color={useColorModeValue(colorTextLight, colorTextDark)}
                        bgColor={useColorModeValue(bgColorLight, bgColorDark)}>
                        Verificar
                    </Button>
                </Link>
            </Stack>
        </Stack>
    )
}