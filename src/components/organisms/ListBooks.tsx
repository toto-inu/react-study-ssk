import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BookAttribute } from '../atoms/BookAttribute'

type Props = any

export const ListBooks = ({ books }: Props) => {
  return books.map((item: any) => {
    const book = item.Item
    return (
      <a href={book.itemUrl}>
        <HStack m="24px 24px 0" borderBottom="1px solid #ccc">
          <Image src={book.largeImageUrl} boxSize="150px" minW="150px" objectFit="cover" />
          <VStack>
            <BookAttribute name="タイトル">{`『${book.title}』`}</BookAttribute>
            <BookAttribute name="著者">{`${book.author}`}</BookAttribute>
            <BookAttribute name="概要">{book.itemCaption}</BookAttribute>
            <BookAttribute name="レビュー">{`${book.reviewAverage} (${book.reviewCount})`}</BookAttribute>
          </VStack>
        </HStack>
      </a>
    )
  })
}
