import { Text, HStack } from '@chakra-ui/react'

type Props = {
  children: string
  name: string
}

export const BookAttribute = (props: Props) => {
  const maxLength = 50
  const slicedText =
    props.children.length > maxLength ? `${props.children.slice(0, maxLength)}...` : props.children
  return (
    <HStack w="100%">
      <Text minW="80px">{props.name}: </Text>
      {props.children ? <Text fontWeight="bold">{slicedText}</Text> : <Text>-</Text>}
    </HStack>
  )
}
