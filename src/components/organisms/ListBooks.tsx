import { HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

type Props = any

export const ListBooks = ({ books }: Props) => {
  const goToItemPage = (link: string) => {
    window.location.replace(link)
  }
  return books.map((item: any) => {
    const book = item.Item
    console.log('🐈', book)
    return (
      // <a href={book.itemUrl}>
      <HStack m="16px 24px 0">
        <Image src={book.largeImageUrl} boxSize="100px" objectFit="cover"></Image>
        <VStack>
          <Text textAlign="left" w="100%">
            {book.title}
          </Text>
          <Text textAlign="left" w="100%">
            {book.author}
          </Text>
          {/* <Text>{book.itemCaption}</Text>
            <Text>{book.reviewAverage}</Text>
            <Text>{book.reviewCount}</Text> */}
        </VStack>
      </HStack>
      // </a>
    )
  })
}
